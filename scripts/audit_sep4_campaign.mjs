import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const base = (process.argv[2] || 'http://127.0.0.1:3210').replace(/\/$/, '');
const canonicalBase = 'https://outsourcedphilippines.com';
const blogManifest = JSON.parse(await readFile(new URL('../.paperclip/daily-content/2026-09-04/blog.json', import.meta.url)));
const researchManifest = JSON.parse(await readFile(new URL('../.paperclip/daily-content/2026-09-04/research.json', import.meta.url)));
const expected = [...blogManifest.entries.map((item) => item.route), ...researchManifest.map((item) => item.route)];

async function get(path) {
  const response = await fetch(`${base}${path}`, { redirect: 'follow' });
  return { response, text: await response.text() };
}

function hrefs(html, family) {
  return new Set([...html.matchAll(new RegExp(`href="(${family}/[^"?#]+)`, 'g'))].map((match) => match[1]));
}

async function crawlBlogIndex() {
  const seenPages = new Set(['/blog']);
  const routes = new Set();
  for (const page of seenPages) {
    const { response, text } = await get(page);
    if (response.status !== 200) throw new Error(`Blog index ${page} returned ${response.status}`);
    for (const route of hrefs(text, '/blog')) {
      if (/^\/blog\/page\/\d+$/.test(route)) seenPages.add(route);
      else routes.add(route);
    }
  }
  return routes;
}

const [{ text: researchIndex }, { text: sitemap }, blogIndexRoutes] = await Promise.all([
  get('/research'),
  get('/sitemap.xml'),
  crawlBlogIndex(),
]);
const researchIndexRoutes = hrefs(researchIndex, '/research');
const hashes = new Set();
const results = [];

for (const route of expected) {
  const { response, text: html } = await get(route);
  const canonical = `${canonicalBase}${route}`;
  const imageMatch = html.match(/<img[^>]+src="([^"]+)"/);
  const imagePath = imageMatch?.[1]?.replace(base, '');
  const imageStatus = imagePath ? (await fetch(`${base}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`)).status : 0;
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const hash = createHash('sha256').update(bodyText).digest('hex');
  const checks = {
    http200: response.status === 200,
    visibleDate: html.includes('September 4, 2026'),
    structuredDate: html.includes('"datePublished":"2026-09-04"'),
    selfCanonical: html.includes(`<link rel="canonical" href="${canonical}"`),
    correctFamily: route.startsWith('/blog/') || route.startsWith('/research/'),
    indexMember: route.startsWith('/blog/') ? blogIndexRoutes.has(route) : researchIndexRoutes.has(route),
    sitemapMember: sitemap.includes(`<loc>${canonical}</loc>`),
    validImage: imageStatus === 200,
    responsiveMarkup: html.includes('name="viewport"') && !html.includes('<table'),
    uniqueIdentity: !hashes.has(hash),
  };
  hashes.add(hash);
  results.push({ route, status: Object.values(checks).every(Boolean) ? 'PASS' : 'FAIL', checks });
}

const dateCount = {
  blog: results.filter((item) => item.route.startsWith('/blog/') && item.status === 'PASS').length,
  research: results.filter((item) => item.route.startsWith('/research/') && item.status === 'PASS').length,
};
console.log(JSON.stringify({ base, expected: { blog: 12, research: 5 }, measured: dateCount, results }, null, 2));
if (dateCount.blog !== 12 || dateCount.research !== 5 || results.some((item) => item.status !== 'PASS')) process.exitCode = 1;
