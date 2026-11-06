import { notFound } from 'next/navigation';

import { journalThumbnail } from "../journal-thumbnail";
import { Footer, Header } from '../components';
import { researchPosts } from '../fleet-content';
import { estimateReadMinutes, formatEditorialDate, resolveArticleHero } from '../editorial';

export const PAGE_SIZE = 20;
const frozenAug10 = new Set(['philippines-appointment-setting-research', 'philippines-ecommerce-customer-care-research', 'philippines-executive-travel-support-research', 'philippines-finance-reconciliation-support-research', 'philippines-healthcare-privacy-admin-research', 'philippines-legal-records-admin-research', 'philippines-project-status-reporting-research', 'philippines-real-estate-transaction-admin-research', 'philippines-recruitment-sourcing-research', 'philippines-sales-development-research', 'philippines-social-media-operations-research', 'philippines-sop-audit-research']);
export function ResearchListing({page = 1}: {page?: number}) {
  const total = Math.max(1, Math.ceil(researchPosts.length / PAGE_SIZE));
  if (!Number.isInteger(page) || page < 1 || page > total) notFound();
  const newestFirst = [...researchPosts].sort((a, b) => b.published.localeCompare(a.published) || Number(frozenAug10.has(b.slug)) - Number(frozenAug10.has(a.slug)));
  return <><Header /><main className="fleet-main editorial-index">
    <section className="editorial-index-hero"><div className="container"><p className="eyebrow">Research library</p><h1>Research for planning Philippines-based teams</h1><p className="lead">Evidence-aware research notes for role design, operating controls, staffing decisions, and the practical limits of public data.</p></div></section>
    <section className="section"><div className="container">
      <p className="editorial-index-context">This library translates public evidence into questions an operator can test inside a real work lane. Each note states its method and limits, links its sources, and closes with a practical next step. The findings are planning inputs, not promises about individual workers or automatic proof of compliance.</p>
      <div className="fleet-card-grid">{newestFirst.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((post) => { const text = [post.excerpt, post.statistic, post.methodology, ...post.body, ...post.dataSections.map((section) => section.text)].join(' '); return <a className="fleet-card editorial-card" href={`/research/${post.slug}`} key={post.slug}>
        <img src={journalThumbnail(resolveArticleHero(post.hero, post.slug, 'research'))} alt="" width="640" height="360" loading="lazy" />
        <div className="editorial-card-meta"><time dateTime={post.published}>{formatEditorialDate(post.published)}</time><span>{estimateReadMinutes(text)} min read</span></div>
        <h2>{post.title}</h2><p>{post.excerpt}</p>
      </a>; })}</div>
      <nav className="pagination" aria-label="Research pages">{Array.from({length: total}, (_, index) => index + 1).map(number => <a className={number === page ? 'active' : ''} aria-current={number === page ? 'page' : undefined} href={number === 1 ? '/research' : `/research/page/${number}`} key={number}>{number}</a>)}</nav>
      <aside className="editorial-index-cta"><p className="eyebrow">From evidence to operation</p><h2>Test the finding in a bounded work lane</h2><p>Pair the research with a named owner, a representative sample, and an acceptance rule. Then explore the service lane that best matches the work you need to move.</p><a className="btn primary" href="/services">Explore services</a></aside>
    </div></section>
  </main><Footer /></>;
}
