import { notFound } from 'next/navigation';
import {StickyArticleToc} from '../../sticky-article-toc';
import { researchPosts } from '../../fleet-content';
import { EditorialArticle, estimateReadMinutes, resolveArticleHero, slugifyHeading } from '../../editorial';

const baseUrl = 'https://outsourcedphilippines.com';
export function generateStaticParams() { return researchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Research' };
  const hero = resolveArticleHero(post.hero, post.slug, 'research');
  return { title: post.title, description: post.excerpt, alternates: { canonical: `${baseUrl}/research/${post.slug}` }, openGraph: { title: post.title, description: post.excerpt, url: `${baseUrl}/research/${post.slug}`, type: 'article', modifiedTime: post.updated ?? post.published, images: [{ url: `${baseUrl}${hero}`, width: 1200, height: 630, alt: post.title }] }, twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [`${baseUrl}${hero}`] } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const headings = ['Key stats', 'Methodology', 'Key takeaways', ...post.dataSections.map((section) => section.heading), ...(post.serviceHandoff ? ['Next step'] : []), 'FAQs', 'Sources', 'Related research'];
  const sections = headings.map((label, index) => ({ id: `${slugifyHeading(label)}-${index + 1}`, label }));
  let sectionIndex = 0;
  const next = () => sections[sectionIndex++].id;
  const allText = [post.excerpt, post.statistic, post.methodology, ...post.body, ...post.dataSections.map((section) => section.text), ...post.faqs.flatMap((faq) => [faq.question, faq.answer])].join(' ');
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.published, dateModified: post.updated ?? post.published, mainEntityOfPage: `${baseUrl}/research/${post.slug}`, author: { '@type': 'Organization', name: 'Outsourced Philippines' }, image: `${baseUrl}${resolveArticleHero(post.hero, post.slug, 'research')}` };
  return <EditorialArticle family="Research" title={post.title} dek={post.excerpt} slug={post.slug} published={post.published} readMinutes={estimateReadMinutes(allText)} hero={post.hero} sections={sections} schema={<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}>
    <section><h2 id={next()}>Key stats</h2><p>{post.statistic}</p></section>
    <section><h2 id={next()}>Methodology</h2><p>{post.methodology}</p></section>
    <section><h2 id={next()}>Key takeaways</h2>{post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>
    {post.dataSections.map((section) => <section key={section.heading}><h2 id={next()}>{section.heading}</h2><p>{section.text}</p></section>)}
    {post.serviceHandoff&&<section><h2 id={next()}>Next step</h2><p>{post.serviceHandoff.text}</p><p><a href={`/services/${post.serviceHandoff.slug}`}>{post.serviceHandoff.label}</a></p></section>}
    <section><h2 id={next()}>FAQs</h2>{post.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
    <section><h2 id={next()}>Sources</h2><ol>{post.sources.map((source) => <li key={source}><a href={source} rel="noreferrer">{source}</a></li>)}</ol></section>
    <section><h2 id={next()}>Related research</h2><ul>{post.related.map((relatedSlug) => <li key={relatedSlug}><a href={`/research/${relatedSlug}`}>{relatedSlug}</a></li>)}</ul></section>
  </EditorialArticle>;
}
