import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '../..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const extract = (text, prefix, suffix) => {
  const start = text.indexOf(prefix);
  const end = text.indexOf(suffix, start + prefix.length);
  if (start < 0 || end < 0) throw new Error(`Cannot extract ${prefix}`);
  return JSON.parse(text.slice(start + prefix.length, end));
};
const occurrences = (text, needle) => text.split(needle).length - 1;
const normalize = text => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const wordCount = value => (JSON.stringify(value).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || []).length;

const blogFile = read('app/blog/oct13-blog-batch.ts');
const researchFile = read('app/oct13-research-batch.ts');
const blogs = extract(blogFile, 'export const oct13BlogPosts = ', ' as const;');
const basics = extract(blogFile, 'export const oct13BlogBasics = ', ' as const;');
const research = extract(researchFile, 'export const oct13ResearchPosts = ', ' as const;');
const manifest = JSON.parse(read('publishing/2026-10-13/manifest.json'));

assert(manifest.site === 'OutsourcedPhilippines.com', 'manifest site mismatch');
assert(manifest.repository === 'coolifystealthagents/outsourcedphilippines', 'manifest repository mismatch');
assert(manifest.branch === 'main', 'manifest branch mismatch');
assert(/^[0-9a-f]{40}$/.test(manifest.baseSha), 'manifest immutable base SHA missing');
assert(manifest.date === '2026-10-13', 'manifest date mismatch');
assert(blogs.length === 12, `expected 12 Blog posts, found ${blogs.length}`);
assert(Object.keys(basics).length === 12, `expected 12 Blog bodies, found ${Object.keys(basics).length}`);
assert(research.length === 5, `expected 5 Research posts, found ${research.length}`);
assert(manifest.blog.length === 12 && manifest.research.length === 5, 'manifest counts must be 12 + 5');
for (const item of blogs) {
  const entry = manifest.blog.find(candidate => candidate.slug === item.slug);
  assert(entry?.title === item.title && entry?.route === `/blog/${item.slug}` && entry?.thumbnail === item.heroImage, `${item.slug}: Blog manifest mismatch`);
}
for (const item of research) {
  const entry = manifest.research.find(candidate => candidate.slug === item.slug);
  assert(entry?.title === item.title && entry?.route === `/research/${item.slug}` && entry?.thumbnail === item.hero, `${item.slug}: Research manifest mismatch`);
}

const all = [...blogs.map(item => ({...item, kind: 'blog', image: item.heroImage})), ...research.map(item => ({...item, kind: 'research', image: item.hero}))];
assert(new Set(all.map(item => item.slug)).size === 17, 'slugs are not unique');
assert(new Set(all.map(item => item.title)).size === 17, 'titles are not unique');
assert(new Set(all.map(item => item.image)).size === 17, 'thumbnail paths are not unique');

for (const item of blogs) {
  const body = basics[item.slug];
  assert(item.publishedAt === '2026-10-13', `${item.slug}: wrong Blog date`);
  assert(!/\b(?:2026|oct(?:ober)?\s+13)\b/i.test(item.title), `${item.slug}: title contains date`);
  assert(body, `${item.slug}: missing Blog body`);
  assert(body?.sections?.length === 7, `${item.slug}: expected 7 sections`);
  assert(body?.sections?.every(section => section.paragraphs?.length === 2 && section.checks?.length === 2), `${item.slug}: section depth incomplete`);
  assert(body?.sources?.length >= 4 && body.sources.every(source => /^https:\/\//.test(source.url)), `${item.slug}: source depth invalid`);
  assert(body?.servicePath === '/services/operations-support', `${item.slug}: service path missing`);
  assert(wordCount(body) >= 950, `${item.slug}: Blog body below 950 words (${wordCount(body)})`);
}

const researchSlugs = new Set(research.map(item => item.slug));
for (const item of research) {
  assert(item.published === '2026-10-13', `${item.slug}: wrong Research date`);
  assert(!/\b(?:2026|oct(?:ober)?\s+13)\b/i.test(item.title), `${item.slug}: title contains date`);
  assert(item.body?.length >= 16, `${item.slug}: Research body needs 16 paragraphs`);
  assert(item.dataSections?.length === 5, `${item.slug}: needs 5 data sections`);
  assert(item.faqs?.length === 5, `${item.slug}: needs 5 FAQs`);
  assert(item.sources?.length >= 10 && item.sources.every(source => /^https:\/\//.test(source)), `${item.slug}: needs 10 authoritative HTTPS sources`);
  assert(new Set(item.sources || []).size === item.sources?.length, `${item.slug}: duplicate Research source`);
  assert(item.related?.length === 3 && item.related.every(slug => researchSlugs.has(slug) && slug !== item.slug), `${item.slug}: related Research invalid`);
  assert(item.serviceHandoff?.slug && item.serviceHandoff?.text, `${item.slug}: missing service handoff`);
  assert(wordCount(item) >= 1150, `${item.slug}: Research body below 1150 words (${wordCount(item)})`);
}

const data = read('app/data.ts');
const fleet = read('app/fleet-content.ts');
assert(occurrences(data, "import { oct13BlogBasics, oct13BlogPosts } from './blog/oct13-blog-batch';") === 1, 'Blog import count invalid');
assert(occurrences(data, '...oct13BlogPosts') === 1 && occurrences(data, '...oct13BlogBasics') === 1, 'Blog registry spread count invalid');
assert(occurrences(data, '...oct12BlogPosts') === 1 && occurrences(data, '...oct12BlogBasics') === 1, 'pre-existing Oct 12 Blog registration changed');
assert(occurrences(fleet, "import { oct13ResearchPosts } from './oct13-research-batch';") === 1, 'Research import count invalid');
assert(occurrences(fleet, 'oct13ResearchPosts') === 2, 'Research registry count invalid');
assert(occurrences(fleet, 'oct12ResearchPosts') === 2, 'pre-existing Oct 12 Research registration changed');

const blogRoute = read('app/blog/[slug]/page.tsx');
const blogIndex = read('app/blog/blog-listing.tsx');
const researchRoute = read('app/research/[slug]/page.tsx');
const researchIndex = read('app/research/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');
assert(blogRoute.includes('<time') && blogRoute.includes('publishedAt'), 'Blog route lacks visible date');
assert(blogRoute.includes('Related Articles'), 'Blog route lacks related-content behavior');
assert(blogIndex.includes('publishedAt'), 'Blog index lacks visible date');
assert(researchRoute.includes('<time') && researchRoute.includes('post.published'), 'Research route lacks visible date');
assert(researchRoute.includes('post.related'), 'Research route lacks related-content behavior');
assert(researchIndex.includes('researchPosts') && researchIndex.includes('published'), 'Research index/date missing');
assert(sitemap.includes('blogPosts') && sitemap.includes('researchPosts'), 'sitemap lacks separate systems');

const hashes = [];
for (const item of all) {
  const target = path.join(root, 'public', item.image.replace(/^\//, ''));
  assert(fs.existsSync(target), `${item.slug}: thumbnail missing`);
  if (!fs.existsSync(target)) continue;
  const buffer = fs.readFileSync(target);
  assert(buffer.subarray(1, 4).toString() === 'PNG', `${item.slug}: thumbnail is not PNG`);
  const width = buffer.readUInt32BE(16), height = buffer.readUInt32BE(20);
  const expected = item.kind === 'blog' ? [1536, 1024] : [1200, 630];
  assert(width === expected[0] && height === expected[1], `${item.slug}: ${width}x${height}, expected ${expected.join('x')}`);
  assert(buffer.includes(Buffer.from(item.title)), `${item.slug}: exact title metadata missing from thumbnail`);
  hashes.push(crypto.createHash('sha256').update(buffer).digest('hex'));
}
assert(new Set(hashes).size === 17, 'thumbnail file hashes are not unique');

const paragraphs = [];
for (const item of blogs) for (const section of basics[item.slug].sections) for (const paragraph of section.paragraphs) paragraphs.push([item.slug, paragraph]);
for (const item of research) for (const paragraph of item.body) paragraphs.push([item.slug, paragraph]);
const seen = new Map();
for (const [slug, paragraph] of paragraphs) {
  const key = normalize(paragraph);
  if (key.length < 160) continue;
  if (seen.has(key)) errors.push(`duplicate substantive paragraph: ${seen.get(key)} and ${slug}`);
  else seen.set(key, slug);
}

const oldSource = [read('app/blog/oct12-blog-batch.ts'), read('app/oct12-research-batch.ts')].join('\n');
for (const [slug, paragraph] of paragraphs) if (normalize(paragraph).length >= 160) {
  assert(!oldSource.includes(JSON.stringify(paragraph).slice(1, -1)), `${slug}: substantive paragraph duplicates existing content`);
}

const baseTree = execFileSync('git', ['ls-tree', '-r', '--name-only', manifest.baseSha], {cwd: root, encoding: 'utf8'});
for (const item of all) {
  assert(!baseTree.includes(`/${item.slug}.`), `${item.slug}: path already existed at immutable base`);
  assert(!oldSource.includes(item.slug), `${item.slug}: slug already existed in prior corpus`);
  assert(!oldSource.includes(item.title), `${item.slug}: title already existed in prior corpus`);
}

if (errors.length) {
  console.error(`FAIL (${errors.length})`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log('PASS: 12 Blog + 5 Research; dates, registries, routes, sources, prose, and 17 unique thumbnails verified.');
