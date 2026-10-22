import { notFound } from 'next/navigation';
import { Footer, Header } from '../components';
import { blogPosts } from '../data';
import { formatEditorialDate, isEditorialDate, resolveArticleHero } from '../editorial';

const PAGE_SIZE = 20;
const legacyDate: Record<string, string> = {
  'philippines-remote-staff-data-access-checklist': '2026-07-25',
  'top-50-virtual-assistant-companies': '2026-07-28',
  'philippines-outsourced-customer-support-account-recovery-checklist': '2026-07-28',
  'philippines-outsourced-staff-payment-change-verification-checklist': '2026-07-27',
  'philippines-remote-team-business-continuity-checklist': '2026-07-26',
  'philippines-outsourced-support-incident-response-checklist': '2026-07-26',
  'outsourced-Philippines-staffing-provider-questions': '2026-07-24',
};
const DEFAULT_PUBLISHED_DATE = '2026-07-23';

export function resolveBlogPublishedDate(post: { slug: string; publishedAt?: unknown }) {
  if (isEditorialDate(post.publishedAt)) return post.publishedAt;
  const legacy = legacyDate[post.slug];
  return isEditorialDate(legacy) ? legacy : DEFAULT_PUBLISHED_DATE;
}

export function BlogListing({ page = 1 }: { page?: number }) {
  const total = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
  if (page < 1 || page > total) notFound();
  const posts = blogPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return <><Header /><main className="fleet-main editorial-index">
    <section className="editorial-index-hero"><div className="container"><p className="eyebrow">Blog</p><h1>Practical guides for Philippines-based staffing</h1><p className="lead">Plan the work before you hire. These field guides cover role scope, onboarding, access, handoffs, quality checks, and the operating decisions that keep a distributed team useful.</p></div></section>
    <section className="section"><div className="container">
      <p className="editorial-index-context">Use this library to turn a broad hiring idea into a specific work lane. Each guide focuses on tasks a Philippines-based specialist can own, decisions that should stay with your company, and evidence a manager can review. Start with the problem closest to your current bottleneck, then follow the related reading and service links.</p>
      <div className="fleet-card-grid">{posts.map((post) => { const date = resolveBlogPublishedDate(post); return <a className="fleet-card editorial-card" href={`/blog/${post.slug}`} key={post.slug}>
        <img src={resolveArticleHero('heroImage' in post && typeof post.heroImage === 'string' ? post.heroImage : undefined, post.slug)} alt="" width="640" height="360" loading="lazy" />
        <div className="editorial-card-meta"><time dateTime={date}>{formatEditorialDate(date)}</time><span>{post.minutes} min read</span></div>
        <h2>{post.title}</h2><p>{post.excerpt}</p>
      </a>; })}</div>
      <nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, index) => index + 1).map((number) => <a className={number === page ? 'active' : ''} aria-current={number === page ? 'page' : undefined} href={number === 1 ? '/blog' : `/blog/page/${number}`} key={number}>{number}</a>)}</nav>
      <aside className="editorial-index-cta"><p className="eyebrow">Build a workable role</p><h2>Turn useful reading into a clear staffing brief</h2><p>Choose the recurring tasks, define approval boundaries, and name the first review sample. Our service lanes can help you shape the role before recruiting begins.</p><a className="btn primary" href="/services">Explore services</a></aside>
    </div></section>
  </main><Footer /></>;
}
export { PAGE_SIZE };
