import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import meta from './aug19-meta.json';
import { EditorialArticle, estimateReadMinutes, slugifyHeading } from './editorial';

const SITE = 'https://outsourcedphilippines.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };
type MarkdownBlock = { kind: 'heading' | 'list' | 'paragraph'; text: string };
type MarkdownSection = { heading: string; id: string; blocks: MarkdownBlock[] };

function item(slug: string): Item { return (meta as Record<string, Item>)[slug]; }
function source(family: Family, slug: string) { return fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8').replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, ''); }

export function parseAug19Sections(text: string): { intro: MarkdownBlock[]; sections: MarkdownSection[] } {
  const intro: MarkdownBlock[] = [];
  const sections: MarkdownSection[] = [];
  let current: MarkdownSection | null = null;
  let headingIndex = 0;
  for (const raw of text.split(/\n\n+/).map((part) => part.trim()).filter(Boolean)) {
    if (raw.startsWith('## ')) {
      const heading = raw.slice(3).trim();
      headingIndex += 1;
      current = { heading, id: `${slugifyHeading(heading)}-${headingIndex}`, blocks: [] };
      sections.push(current);
      continue;
    }
    const block: MarkdownBlock = { kind: raw.startsWith('- ') ? 'list' : 'paragraph', text: raw };
    if (current) current.blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

function safeMarkdownHref(value: string) {
  if (value.startsWith('/')) return value;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:' ? value : null;
  } catch {
    return null;
  }
}

export function renderAug19Inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const href = safeMarkdownHref(match[2].trim());
    nodes.push(href
      ? <a href={href} rel={href.startsWith('/') ? undefined : 'noreferrer'} key={`${match.index}-${href}`}>{match[1]}</a>
      : match[0]);
    cursor = pattern.lastIndex;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderBlock(block: MarkdownBlock, key: string) {
  if (block.kind === 'list') return <ul key={key}>{block.text.split('\n').map((line, index) => <li key={index}>{renderAug19Inline(line.replace(/^- /, ''))}</li>)}</ul>;
  return <p key={key}>{renderAug19Inline(block.text)}</p>;
}

export function getAug19Metadata(family: Family, slug: string): Metadata { const entry = item(slug); return { title: entry.title, description: entry.description, alternates: { canonical: `/${family}/${slug}` }, openGraph: { title: entry.title, description: entry.description, url: `${SITE}/${family}/${slug}`, images: [entry.hero] } }; }
export function renderAug19Article(family: Family, slug: string) {
  const entry = item(slug);
  const markdown = source(family, slug);
  const parsed = parseAug19Sections(markdown);
  const headings = parsed.sections.map(({ id, heading }) => ({ id, label: heading }));
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: entry.title, datePublished: '2026-08-19', dateModified: '2026-08-19', mainEntityOfPage: `${SITE}/${family}/${slug}`, image: `${SITE}${entry.hero}`, publisher: { '@type': 'Organization', name: 'Outsourced Philippines' } };
  return <EditorialArticle family={family === 'research' ? 'Research' : 'Blog'} title={entry.title} dek={entry.description} slug={slug} published="2026-08-19" readMinutes={estimateReadMinutes(markdown)} hero={entry.hero} sections={headings} schema={<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}>
    {parsed.intro.map((block, index) => renderBlock(block, `intro-${index}`))}
    {parsed.sections.map((section) => <section key={section.id} aria-labelledby={section.id}>
      <h2 id={section.id}>{section.heading}</h2>
      {section.blocks.map((block, index) => renderBlock(block, `${section.id}-${index}`))}
    </section>)}
  </EditorialArticle>;
}
