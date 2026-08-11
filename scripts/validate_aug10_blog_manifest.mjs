import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const fail = (message) => { throw new Error(message); };

manifest.entries.length >= manifest.minimum || fail('accepted count is below minimum');
const seen = new Set();
let previousDate = '9999-12-31';
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' });
for (const entry of manifest.entries) {
  seen.has(entry.slug) && fail(`duplicate slug: ${entry.slug}`);
  seen.add(entry.slug);
  entry.route === `/blog/${entry.slug}` || fail(`wrong route: ${entry.slug}`);
  entry.route.startsWith('/blog/') || fail(`non-Blog route: ${entry.slug}`);
  fs.existsSync(path.join(root, entry.sourcePath)) || fail(`missing source: ${entry.sourcePath}`);
  entry.sourceDate === '2026-08-10' || fail(`wrong source date: ${entry.slug}`);
  entry.renderedDate === '2026-08-10' || fail(`wrong rendered date: ${entry.slug}`);
  entry.sourceDateField === 'publishedAt' || fail(`wrong source date field: ${entry.slug}`);
  entry.renderedDateFields.includes('datePublished') || fail(`missing JSON-LD date field: ${entry.slug}`);
  entry.introducedByCommit.length === 40 || fail(`invalid provenance commit: ${entry.slug}`);
  entry.provenance === 'original-aug10-batch' || fail(`unexpected provenance: ${entry.slug}`);
  entry.sourcePath === 'app/blog/daily-blog-batch.ts' || fail(`unexpected source path: ${entry.slug}`);
  const parentSource = git('show', `${entry.introducedByCommit}^:${entry.sourcePath}`);
  const introducedSource = git('show', `${entry.introducedByCommit}:${entry.sourcePath}`);
  !parentSource.includes(`'${entry.slug}'`) || fail(`slug existed before introducing commit: ${entry.slug}`);
  introducedSource.includes(`'${entry.slug}'`) || fail(`slug absent at introducing commit: ${entry.slug}`);
  entry.sourceDate <= previousDate || fail(`manifest is not newest-first at ${entry.slug}`);
  previousDate = entry.sourceDate;
}

const routeSource = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
routeSource.includes('datePublished') || fail('route does not emit JSON-LD datePublished');
routeSource.includes('<time dateTime={publishedAt}>') || fail('route does not emit visible publication time');
const sitemapSource = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
sitemapSource.includes('blogPosts.map') || fail('Blog routes are not sitemap eligible');
const indexSource = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
indexSource.includes("bDate.localeCompare(aDate)") || fail('Blog index is not date sorted');

const builtRoot = path.join(root, '.next/server/app/blog');
fs.existsSync(builtRoot) || fail('production build output is missing');
const builtText = fs.readdirSync(builtRoot, { recursive: true }).map((file) => {
  const full = path.join(builtRoot, file);
  return fs.statSync(full).isFile() ? fs.readFileSync(full, 'utf8') : '';
}).join('\n');
for (const entry of manifest.entries) {
  builtText.includes(entry.slug) || fail(`built route missing slug: ${entry.slug}`);
  const builtRoutePath = path.join(root, '.next/server/app', `${entry.route.slice(1)}.html`);
  fs.existsSync(builtRoutePath) || fail(`built route file missing: ${entry.route}`);
  const builtRoute = fs.readFileSync(builtRoutePath, 'utf8');
  builtRoute.includes(`<link rel="canonical" href="https://outsourcedphilippines.com${entry.route}"/>`) || fail(`canonical missing: ${entry.slug}`);
  builtRoute.includes('datePublished') || fail(`rendered JSON-LD date missing: ${entry.slug}`);
  builtRoute.includes(`dateTime=\"2026-08-10\"`) || fail(`rendered visible date missing: ${entry.slug}`);
}
builtText.includes('2026-08-10') || fail('built routes do not expose target date');
const routeBundle = fs.readFileSync(path.join(builtRoot, '[slug]/page.js'), 'utf8');
routeBundle.includes('datePublished') || fail('built route bundle does not expose datePublished');
routeBundle.includes('dateTime') || fail('built route bundle does not expose visible date time');
console.log(`August 10 Blog manifest PASS (${manifest.entries.length} entries)`);
