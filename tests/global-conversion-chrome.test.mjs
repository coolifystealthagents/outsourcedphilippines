import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const root = new URL('../', import.meta.url);
const read = async path => readFile(new URL(path, root), 'utf8');
const digest = async path => createHash('sha256').update(await readFile(path)).digest('hex');

test('approved review register and provenance are copied unchanged', async () => {
  const localReviews = new URL('app/reviews.ts', root);
  const sourceReviews = '/workspace/websitedesignoutsource/app/reviews.ts';
  const localProvenance = new URL('app/reviews-provenance.json', root);
  const sourceProvenance = '/workspace/websitedesignoutsource/app/reviews-provenance.json';
  assert.equal(await digest(localReviews), await digest(sourceReviews));
  assert.equal(await digest(localProvenance), await digest(sourceProvenance));
  const source = await read('app/reviews.ts');
  const names = [...source.matchAll(/name: '([^']+)'/g)].map(match => match[1]);
  assert.equal(names.length, 14);
  assert.equal(new Set(names).size, 14);
  assert.equal(JSON.parse(await read('app/reviews-provenance.json')).reviewCount, 14);
});

test('global chrome has exact primary options, attribution, and accessible mobile behavior', async () => {
  const nav = await read('app/global-chrome.tsx');
  const chrome = await read('app/components.tsx');
  assert.deepEqual([...nav.matchAll(/label: '([^']+)', href: '([^']+)'/g)].map(x => [x[1], x[2]]), [['Home','/'],['Services','/services'],['Contact Us','/contact-us']]);
  for (const token of ['aria-expanded={open}', 'aria-controls="mobile-primary-navigation"', "event.key === 'Escape'", "event.key !== 'Tab'", 'buttonRef.current?.focus()']) assert.match(nav, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(chrome, /Skip to main content/);
  assert.equal((chrome.match(/Powered by Stealth Agents/g) || []).length, 1, 'shared attribution component renders in header and footer');
  assert.match(chrome, /stealth-agents-logo\.png/);
});

test('contact conversion uses all approved reviews and no review controls', async () => {
  const page = await read('app/contact-us/page.tsx');
  const css = await read('app/contact-us/contact.module.css');
  const form = await read('app/contact-us/StandardContactForm.tsx');
  assert.match(page, /stealthAgentsReviews\.map/);
  assert.match(page, /Stealth Agents reviews/);
  assert.match(page, /★★★★★/);
  assert.match(page, /Official team, Bacolod/);
  assert.match(page, /stealth-agents-team-bacolod\.jpg/);
  assert.doesNotMatch(page, />0\{i\+1\}</);
  assert.doesNotMatch(page, />0[1-9]</);
  assert.doesNotMatch(page, /review.*(?:button|controls)/i);
  assert.match(css, /animation:review-marquee/);
  assert.match(css, /\.marquee:hover .*animation-play-state:paused/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(form, /window\.location\.assign\("\/thank-you"\)[\s\S]{0,300}if \(tracker\)/);
  for (const field of ['firstName','lastName','email','phoneLocal','companyName','website','companySize','positions','referral','referralSpecify','message']) assert.match(form, new RegExp(`name=\\"${field}\\"`));
});

test('homepage avoids a generic bulk image gallery', async () => {
  const page = await read('app/page.tsx');
  assert.doesNotMatch(page, /roleGallery|role-atlas-window|all 46 themes/);
});

test('canonical routing, security policy, utility routes, and sitemap are present', async () => {
  const middleware = await read('middleware.ts');
  const config = await read('next.config.mjs');
  const sitemap = await read('app/sitemap.xml/route.ts');
  const thanks = await read('app/thank-you/page.tsx');
  assert.match(middleware, /url\.pathname === '\/contact'/);
  assert.match(middleware, /url\.pathname = '\/contact-us'/);
  assert.match(middleware, /NextResponse\.redirect\(url, 308\)/);
  for (const header of ['Strict-Transport-Security','Content-Security-Policy','X-Content-Type-Options','Referrer-Policy','Permissions-Policy']) assert.match(config, new RegExp(header));
  for (const allowed of ['fonts.googleapis.com','fonts.gstatic.com','acrtracking.stealthagents.us','go.oncehub.com','leads.stealthagents.com']) assert.match(config, new RegExp(allowed.replaceAll('.', '\\.')));
  assert.match(sitemap, /'\/contact-us'/); assert.match(sitemap, /'\/about'/); assert.doesNotMatch(sitemap, /'\/thank-you'|'\/thanks-whats-next'/);
  assert.match(thanks, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(thanks, /\/thanks-whats-next/);
  await Promise.all(['app/about/page.tsx','app/thanks-whats-next/page.tsx','app/not-found.tsx','public/brand/stealth-agents-logo.png','public/brand/stealth-agents-team-bacolod.jpg'].map(path => access(new URL(path, root))));
});

test('favicon and shared subsidiary logo use the same identity', async () => {
  assert.equal(await digest(new URL('app/icon.svg', root)), await digest(new URL('public/logo.svg', root)));
});
