import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const rendererFamilies = [
  'app/blog/[slug]/page.tsx',
  'app/research/[slug]/page.tsx',
  'app/aug19-content.tsx',
  'app/blog/[slug]/philippines-remote-access-article.tsx',
  'app/blog/[slug]/philippines-payment-change-article.tsx',
  'app/blog/[slug]/philippines-incident-response-article.tsx',
  'app/blog/[slug]/philippines-business-continuity-article.tsx',
  'app/blog/[slug]/philippines-account-recovery-article.tsx',
  'app/blog/[slug]/top-virtual-assistant-companies-article.tsx',
];

test('all article renderer families use the shared editorial system', () => {
  const dispatcher = read('app/blog/[slug]/page.tsx');
  assert.match(dispatcher, /EditorialAutoNavigator/);
  assert.match(read('app/research/[slug]/page.tsx'), /EditorialArticle/);
  assert.match(read('app/aug19-content.tsx'), /EditorialArticle/);
  for (const file of rendererFamilies) assert.ok(fs.existsSync(path.join(root, file)), `${file} is inventoried`);
  for (const file of rendererFamilies.slice(3)) {
    const source = read(file);
    assert.match(source, /<h2 id=/, `${file} keeps semantic, addressable H2 sections`);
  }
});

test('TOC has active state, keyboard anchors, mobile disclosure, and sticky bounded sidebar', () => {
  const client = read('app/editorial-toc.tsx');
  const css = read('app/article.css');
  assert.match(client, /IntersectionObserver/);
  assert.match(client, /aria-current=.*location/);
  assert.match(client, /href={`#\$\{item\.id\}`}/);
  assert.match(client, /<details className="editorial-mobile-toc">/);
  assert.match(client, /querySelectorAll<HTMLHeadingElement>\('h2'\)/);
  assert.match(css, /\.editorial-sidebar\{[^}]*position:sticky/);
  assert.match(css, /max-height:calc\(100vh - 120px\)/);
  assert.match(css, /overflow-y:auto/);
  assert.match(css, /scroll-margin-top:112px/);
});

test('shared shell provides complete metadata, hero, reading measure, and populated sidebar', () => {
  const shell = read('app/editorial.tsx');
  const toc = read('app/editorial-toc.tsx');
  for (const contract of ['title', 'dek', 'published', 'readMinutes', 'hero', 'sections']) assert.match(shell, new RegExp(contract));
  assert.match(shell, /Outsourced Philippines/);
  assert.match(shell, /resolveArticleHero/);
  assert.match(toc, /Related service/);
  assert.match(toc, /Related resources/);
  assert.match(toc, /Sources/);
  assert.match(toc, /resolveEditorialSidebar/);
});

test('hero fallback is deterministic and topic grouped, not a generic image', () => {
  const shell = read('app/editorial.tsx');
  for (const group of ['security', 'customer', 'finance', 'operations', 'people', 'research']) assert.match(shell, new RegExp(`${group}: \\[`));
  assert.match(shell, /hash = \(\(hash \* 31\)/);
  assert.doesNotMatch(shell, /research-batch-thumbnail/);
});

test('blog and research indexes include thumbnails, dates, read time, context, and final CTA', () => {
  for (const file of ['app/blog/blog-listing.tsx', 'app/research/page.tsx']) {
    const source = read(file);
    assert.match(source, /editorial-index-context/);
    assert.match(source, /editorial-card/);
    assert.match(source, /<img/);
    assert.match(source, /<time/);
    assert.match(source, /min read/);
    assert.match(source, /editorial-index-cta/);
  }
});

test('research and August 19 TOC fragments are produced in H2 source order', () => {
  const research = read('app/research/[slug]/page.tsx');
  const aug19 = read('app/aug19-content.tsx');
  assert.match(research, /const headings = \[/);
  assert.match(research, /const next = \(\) => sections\[sectionIndex\+\+\]\.id/);
  assert.match(aug19, /if \(raw\.startsWith\('## '\)\)/);
  assert.match(aug19, /parsed\.sections\.map\(\(\{ id, heading \}\)/);
});
