import fs from 'node:fs';

const source = fs.readFileSync('app/blog/sep22-blog-batch.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const slugMatches = [...source.matchAll(/slug:'([^']+)'/g)].map((match) => match[1]);

if (slugMatches.length !== 12) throw new Error(`expected 12 source routes, got ${slugMatches.length}`);
if (new Set(slugMatches).size !== 12) throw new Error('duplicate September 22 slug');
if (!source.includes("const publishedAt = '2026-09-22'")) throw new Error('publication date mismatch');
if (!data.includes('...sep22BlogPosts') || !data.includes('...sep22BlogBasics')) throw new Error('batch is not registered');

const inventory = fs.readFileSync('app/data.ts', 'utf8') + fs.readdirSync('app/blog')
  .filter((name) => name.endsWith('.ts') || name.endsWith('.tsx'))
  .map((name) => fs.readFileSync(`app/blog/${name}`, 'utf8'))
  .join('\n');
for (const slug of slugMatches) {
  const count = inventory.split(slug).length - 1;
  if (count !== 1) throw new Error(`slug collision: ${slug} appears ${count} times`);
  const html = fs.readFileSync(`.next/server/app/blog/${slug}.html`, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
  const words = text.trim().split(/\s+/).length;
  if (words < 900) throw new Error(`${slug} rendered only ${words} words`);
  if (!html.includes(`<link rel="canonical" href="https://outsourcedphilippines.com/blog/${slug}"`)) throw new Error(`canonical mismatch: ${slug}`);
  if (!html.includes('2026-09-22') || !html.includes('datePublished')) throw new Error(`date metadata missing: ${slug}`);
}

console.log('validated 12 unique September 22 Blog routes; each renders 900+ words with canonical and publication metadata');
