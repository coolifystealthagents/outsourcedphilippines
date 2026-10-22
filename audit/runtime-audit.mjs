import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const base = process.env.AUDIT_BASE_URL || 'http://localhost:3101';
const outDir = 'audit/local-runtime';
await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = { pages: [], interaction: {}, formApi: {}, failures: [] };

async function inspect(path, viewport, label) {
  const context = await browser.newContext({ viewport, reducedMotion: 'no-preference' });
  const page = await context.newPage();
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('requestfailed', (request) => {
    const url = request.url();
    if (url.startsWith(base)) errors.push(`requestfailed: ${url} ${request.failure()?.errorText || ''}`);
  });
  const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 45_000 });
  const audit = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelectorAll('h1').length,
    canonical: document.querySelector('link[rel="canonical"]')?.href || '',
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    viewportClipping: [...document.querySelectorAll('main h1, main h2, main form, main form button')]
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return style.display !== 'none' && rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
      })
      .map((element) => ({ tag: element.tagName, className: String(element.className), ...(() => { const rect = element.getBoundingClientRect(); return { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) }; })() })),
    brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.getAttribute('src')),
    emptyImageAlts: [...document.images].filter((image) => image.getAttribute('alt') === null).map((image) => image.getAttribute('src')),
    skipLink: Boolean(document.querySelector('a.skip-link[href="#main-content"]')),
  }));
  const screenshot = `${outDir}/${label}.png`;
  await page.screenshot({ path: screenshot, fullPage: true });
  results.pages.push({ path, viewport, status: response?.status(), ...audit, errors, screenshot });
  await context.close();
}

const desktop = [
  ['/', 'home-desktop'], ['/services', 'services-desktop'], ['/services/executive-administration', 'service-desktop'],
  ['/contact-us', 'contact-desktop'], ['/blog', 'blog-desktop'], ['/blog/page/21', 'blog-page-21-desktop'],
  ['/blog/top-50-virtual-assistant-companies', 'blog-bespoke-desktop'], ['/blog/philippines-remote-staff-data-access-checklist', 'blog-shared-desktop'],
  ['/research', 'research-desktop'], ['/research/philippines-revenue-operations-research', 'research-detail-desktop'], ['/about', 'about-desktop'],
];
for (const [path, label] of desktop) await inspect(path, { width: 1440, height: 900 }, label);
for (const [path, label] of [['/', 'home-mobile'], ['/services', 'services-mobile'], ['/contact-us', 'contact-mobile'], ['/blog/top-50-virtual-assistant-companies', 'blog-mobile'], ['/research/philippines-revenue-operations-research', 'research-mobile']]) await inspect(path, { width: 390, height: 844 }, label);

{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  const toggle = page.locator('button[aria-controls="mobile-primary-navigation"]');
  await toggle.focus();
  await toggle.click();
  const opened = await toggle.getAttribute('aria-expanded');
  await page.keyboard.press('Escape');
  const escaped = await toggle.getAttribute('aria-expanded');
  const focusRestored = await toggle.evaluate((element) => document.activeElement === element);
  results.interaction.mobileNavigation = { opened, escaped, focusRestored };
  await context.close();
}

{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(`${base}/contact-us`, { waitUntil: 'networkidle' });
  results.interaction.reducedMotion = await page.locator('[class*="reviewTrack"]').evaluate((element) => {
    const style = getComputedStyle(element);
    return { animationName: style.animationName, animationDuration: style.animationDuration };
  });
  await context.close();
}

{
  const request = await browser.newContext().then((context) => context.request);
  const headers = { origin: base };
  const incomplete = await request.post(`${base}/api/contact`, { headers, form: { firstName: 'Test', lastName: 'Person', email: 'test@example.com' }, maxRedirects: 0 });
  const complete = await request.post(`${base}/api/contact`, { headers, form: { firstName: 'Test', lastName: 'Person', email: 'test@example.com', countryCode: '+1', phoneLocal: '5555550100', companyName: 'Example Company', companySize: '11-50', positions: 'Just 1 Position', referral: 'Google', message: 'Runtime verification only.' }, maxRedirects: 0 });
  results.formApi = { incomplete: incomplete.status(), completeWithoutConfiguredUpstream: complete.status() };
}

for (const page of results.pages) {
  if (page.status !== 200 || page.h1 !== 1 || page.horizontalOverflow > 1 || page.viewportClipping.length || page.brokenImages.length || page.emptyImageAlts.length || page.errors.length || !page.skipLink) results.failures.push(page);
}
if (results.interaction.mobileNavigation?.opened !== 'true' || results.interaction.mobileNavigation?.escaped !== 'false' || !results.interaction.mobileNavigation?.focusRestored) results.failures.push({ interaction: results.interaction.mobileNavigation });
if (results.interaction.reducedMotion?.animationName !== 'none') results.failures.push({ reducedMotion: results.interaction.reducedMotion });
if (results.formApi.incomplete !== 422 || results.formApi.completeWithoutConfiguredUpstream !== 503) results.failures.push({ formApi: results.formApi });

await fs.writeFile(`${outDir}/browser-audit.json`, JSON.stringify(results, null, 2));
await browser.close();
console.log(JSON.stringify({ pageCount: results.pages.length, failures: results.failures, interaction: results.interaction, formApi: results.formApi }, null, 2));
process.exitCode = results.failures.length ? 1 : 0;
