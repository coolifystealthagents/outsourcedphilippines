import type { ReactNode } from 'react';
import { CTA, Footer, Header } from './components';
import { EditorialToc, type EditorialSidebarData, type TocItem } from './editorial-toc';

const heroGroups = {
  security: ['/illustrations/role-gallery/role-art-06.webp', '/illustrations/role-gallery/role-art-18.webp', '/illustrations/role-gallery/role-art-32.webp'],
  customer: ['/illustrations/customer-support.svg', '/illustrations/role-gallery/role-art-12.webp', '/illustrations/role-gallery/role-art-38.webp'],
  finance: ['/illustrations/role-gallery/role-art-08.webp', '/illustrations/role-gallery/role-art-24.webp', '/illustrations/reporting-qa.svg'],
  operations: ['/illustrations/operations-support.svg', '/illustrations/role-gallery/role-art-21.webp', '/illustrations/role-gallery/role-art-41.webp'],
  people: ['/illustrations/admin-support.svg', '/illustrations/role-gallery/role-art-03.webp', '/illustrations/role-gallery/role-art-35.webp'],
  research: ['/illustrations/reporting-qa.svg', '/illustrations/role-gallery/role-art-16.webp', '/illustrations/role-gallery/role-art-44.webp'],
} as const;

export function slugifyHeading(value: string) {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
}

export function resolveArticleHero(explicit: string | undefined, slug: string, family: 'blog' | 'research' = 'blog') {
  if (explicit) return explicit;
  const value = slug.toLowerCase();
  const key = /access|identity|security|password|incident|recovery/.test(value) ? 'security'
    : /customer|support|contact|complaint|service/.test(value) ? 'customer'
    : /invoice|payment|expense|payroll|finance|bank|chargeback/.test(value) ? 'finance'
    : /recruit|candidate|training|onboard|executive|admin/.test(value) ? 'people'
    : family === 'research' ? 'research' : 'operations';
  const group = heroGroups[key];
  let hash = 0;
  for (const character of slug) hash = ((hash * 31) + character.charCodeAt(0)) >>> 0;
  return group[hash % group.length];
}

export function estimateReadMinutes(text: string) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 220));
}

export function isEditorialDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function formatEditorialDate(value: unknown) {
  if (!isEditorialDate(value)) return null;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

type EditorialArticleProps = {
  family: 'Blog' | 'Research';
  title: string;
  dek: string;
  slug: string;
  published: string;
  readMinutes: number;
  hero?: string;
  heroAlt?: string;
  sections: TocItem[];
  children: ReactNode;
  schema?: ReactNode;
  showCta?: boolean;
  sidebar?: EditorialSidebarData;
};

export function EditorialArticle({ family, title, dek, slug, published, readMinutes, hero, heroAlt, sections, children, schema, showCta = true, sidebar }: EditorialArticleProps) {
  if (!isEditorialDate(published)) throw new Error(`Invalid editorial publication date for ${slug}: ${published}`);
  const image = resolveArticleHero(hero, slug, family === 'Research' ? 'research' : 'blog');
  return <>
    <Header />
    <main className="editorial-page">
      {schema}
      <article>
        <header className="editorial-hero">
          <div className="editorial-hero-copy">
            <p className="eyebrow">{family}</p>
            <h1>{title}</h1>
            <p className="lead">{dek}</p>
            <div className="editorial-byline" aria-label="Article details">
              <span>Outsourced Philippines</span>
              <time dateTime={published}>{formatEditorialDate(published)}</time>
              <span>{readMinutes} min read</span>
            </div>
          </div>
          <img src={image} alt={heroAlt ?? `Editorial illustration for ${title}`} width="1200" height="630" />
        </header>
        <div className="editorial-layout">
          <EditorialToc items={sections} title={title} slug={slug} family={family} published={published} readMinutes={readMinutes} sidebar={sidebar} />
          <div className="editorial-content">{children}</div>
        </div>
      </article>
      {showCta && <CTA />}
    </main>
    <Footer />
  </>;
}
