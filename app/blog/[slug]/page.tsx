import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogBasics, blogDetails, blogPosts, site } from '../../data';
import { PhilippinesRemoteAccessArticle, remoteAccessDescription, remoteAccessSlug, remoteAccessTitle, remoteAccessUrl } from './philippines-remote-access-article';
import { incidentResponseDescription, incidentResponseSlug, incidentResponseTitle, incidentResponseUrl, PhilippinesIncidentResponseArticle } from './philippines-incident-response-article';
import { businessContinuityDescription, businessContinuitySlug, businessContinuityTitle, businessContinuityUrl, PhilippinesBusinessContinuityArticle } from './philippines-business-continuity-article';
import { paymentChangeDescription, paymentChangeSlug, paymentChangeTitle, paymentChangeUrl, PhilippinesPaymentChangeArticle } from './philippines-payment-change-article';
import { accountRecoveryDescription, accountRecoverySlug, accountRecoveryTitle, accountRecoveryUrl, PhilippinesAccountRecoveryArticle } from './philippines-account-recovery-article';
import { topVirtualAssistantCompaniesDescription, topVirtualAssistantCompaniesSlug, topVirtualAssistantCompaniesTitle, topVirtualAssistantCompaniesUrl, TopVirtualAssistantCompaniesArticle } from './top-virtual-assistant-companies-article';
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));

const baseUrl = 'https://outsourcedphilippines.com';

type DetailSlug = keyof typeof blogDetails;
type BasicSlug = keyof typeof blogBasics;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === accountRecoverySlug) {
    return {
      title: accountRecoveryTitle,
      description: accountRecoveryDescription,
      alternates: { canonical: accountRecoveryUrl },
      openGraph: { title: accountRecoveryTitle, description: accountRecoveryDescription, url: accountRecoveryUrl, siteName: site.brand, type: 'article' },
    };
  }
  if (slug === topVirtualAssistantCompaniesSlug) {
    return {
      title: topVirtualAssistantCompaniesTitle,
      description: topVirtualAssistantCompaniesDescription,
      alternates: { canonical: topVirtualAssistantCompaniesUrl },
      openGraph: { title: topVirtualAssistantCompaniesTitle, description: topVirtualAssistantCompaniesDescription, url: topVirtualAssistantCompaniesUrl, siteName: site.brand, type: 'article' },
    };
  }
  if (slug === paymentChangeSlug) {
    return {
      title: paymentChangeTitle,
      description: paymentChangeDescription,
      alternates: { canonical: paymentChangeUrl },
      openGraph: { title: paymentChangeTitle, description: paymentChangeDescription, url: paymentChangeUrl, siteName: site.brand, type: 'article' },
    };
  }
  if (slug === businessContinuitySlug) {
    return {
      title: businessContinuityTitle,
      description: businessContinuityDescription,
      alternates: { canonical: businessContinuityUrl },
      openGraph: { title: businessContinuityTitle, description: businessContinuityDescription, url: businessContinuityUrl, siteName: site.brand, type: 'article' },
    };
  }
  if (slug === incidentResponseSlug) {
    return {
      title: incidentResponseTitle,
      description: incidentResponseDescription,
      alternates: { canonical: incidentResponseUrl },
      openGraph: { title: incidentResponseTitle, description: incidentResponseDescription, url: incidentResponseUrl, siteName: site.brand, type: 'article' },
    };
  }
  if (slug === remoteAccessSlug) {
    return {
      title: remoteAccessTitle,
      description: remoteAccessDescription,
      alternates: { canonical: remoteAccessUrl },
      openGraph: { title: remoteAccessTitle, description: remoteAccessDescription, url: remoteAccessUrl, siteName: site.brand, type: 'article' },
    };
  }
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Guide' };

  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: site.brand,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === accountRecoverySlug) return <PhilippinesAccountRecoveryArticle />;
  if (slug === topVirtualAssistantCompaniesSlug) return <TopVirtualAssistantCompaniesArticle />;
  if (slug === paymentChangeSlug) return <PhilippinesPaymentChangeArticle />;
  if (slug === businessContinuitySlug) return <PhilippinesBusinessContinuityArticle />;
  if (slug === incidentResponseSlug) return <PhilippinesIncidentResponseArticle />;
  if (slug === remoteAccessSlug) return <PhilippinesRemoteAccessArticle />;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const detail = blogDetails[post.slug as DetailSlug];
  const basic = blogBasics[post.slug as BasicSlug];
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const publishedAt = 'publishedAt' in post ? post.publishedAt : undefined;

  if (!detail && basic) {
    const heroImage = 'heroImage' in post && typeof post.heroImage === 'string' ? post.heroImage : '/research-batch-thumbnail.jpg';
    return (
      <>
        <Header />
        <main className="section">
          <article className="container" style={{ maxWidth: 880 }}>
            {publishedAt && <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: publishedAt, dateModified: publishedAt, url: articleUrl }} />}
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            {publishedAt && <time dateTime={publishedAt}>Published {formatReaderDate(publishedAt)}</time>}
            <img src={heroImage} alt="Illustration of a remote content workflow" width={1200} height={630} style={{ width: '100%', height: 'auto', borderRadius: 18, margin: '1.5rem 0' }} />
            <p className="article-intro">{basic.intro}</p>
            {Array.isArray((basic as { routeBody?: readonly string[] }).routeBody) && <section className="article-section" aria-labelledby="route-local-guide">
              <h2 id="route-local-guide">The route-local operating guide</h2>
              {(basic as unknown as { routeBody: readonly string[] }).routeBody.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
            </section>}
            {basic.sections.map((section) => (
              <section className="article-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="check-panel">
                  <h3>Questions to settle</h3>
                  <ul>{section.checks.map((check) => <li key={check}>{check}</li>)}</ul>
                </div>
              </section>
            ))}
            <section className="source-box" aria-labelledby="daily-guide-sources">
              <h2 id="daily-guide-sources">Sources and next steps</h2>
              <p>Use the <a href="/services/operations-support">operations support work lane</a> as a practical starting point, then review <a href="/blog/outsourced-Philippines-staffing-onboarding-checklist">the onboarding checklist</a> before expanding the role.</p>
              <ul>
                <li><a href="https://www.ilo.org/data" rel="noreferrer">International Labour Organization data</a></li>
              </ul>
            </section>
            <section className="related-box" aria-labelledby="daily-guide-related">
              <h2 id="daily-guide-related">Related Articles</h2>
              <ul>
                <li><a href="/blog/philippines-outsourced-customer-support-ticket-triage">Customer support ticket triage</a></li>
                <li><a href="/blog/philippines-remote-team-quality-assurance-scorecard">Remote team quality assurance scorecard</a></li>
                <li><a href="/blog/philippines-remote-staff-password-access-review">Remote staff access review</a></li>
              </ul>
            </section>
          </article>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  if (!detail) return null;

  const articleId = `${articleUrl}#article`;
  const faqId = `${articleUrl}#faq`;
  const breadcrumbId = `${articleUrl}#breadcrumb`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${articleUrl}#webpage`,
        url: articleUrl,
        ...(publishedAt ? { datePublished: publishedAt, dateModified: publishedAt } : {}),
        name: post.title,
        description: post.excerpt,
        isPartOf: { '@id': `${baseUrl}/#website` },
        mainEntity: { '@id': articleId },
        breadcrumb: { '@id': breadcrumbId },
      },
      {
        '@type': 'Article',
        '@id': articleId,
        headline: post.title,
        ...(publishedAt ? { datePublished: publishedAt, dateModified: publishedAt } : {}),
        description: post.excerpt,
        url: articleUrl,
        mainEntityOfPage: { '@id': `${articleUrl}#webpage` },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
        citation: detail.sources.map((source) => source.url),
        hasPart: detail.sections.map((section, index) => ({
          '@type': 'WebPageElement',
          '@id': `${articleUrl}#section-${index + 1}`,
          name: section.title,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="article-page">
        <JsonLd data={schema} />
        <article>
          <header className="article-hero">
            <div className="article-shell">
              <p className="eyebrow">Provider checklist</p>
              <h1>{post.title}</h1>
              <p className="lead">{post.excerpt}</p>
              {publishedAt && <time dateTime={publishedAt}>Published {formatReaderDate(publishedAt)}</time>}
              <p className="article-intro">A provider should be able to explain who owns the worker relationship, how work is checked, and what happens when something goes wrong. Use this guide to move the sales call past promises and into the details you will rely on after hiring.</p>
            </div>
          </header>

          <div className="article-shell article-body">
            <section className="takeaway-box" aria-labelledby="takeaways-title">
              <p className="eyebrow">Keep these four points</p>
              <h2 id="takeaways-title">The short list</h2>
              <ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section aria-labelledby="answer-check-title">
              <p className="eyebrow">Sales-call filter</p>
              <h2 id="answer-check-title">What a useful answer sounds like</h2>
              <p>Do not score a provider on confidence alone. Compare each answer with the work you expect the team to do.</p>
              <div className="question-grid">
                {detail.questionRows.map((row) => (
                  <article className="question-card" key={row.question}>
                    <h3>{row.question}</h3>
                    <p><strong>Useful answer:</strong> {row.usefulAnswer}</p>
                    <p className="warning"><strong>Pause if:</strong> {row.warning}</p>
                  </article>
                ))}
              </div>
            </section>

            {detail.sections.map((section, index) => (
              <section className="article-section" id={`section-${index + 1}`} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <div className="check-panel">
                  <h3>Ask on the call</h3>
                  <ul>{section.checks.map((check) => <li key={check}>{check}</li>)}</ul>
                </div>
              </section>
            ))}

            <section className="script-box" aria-labelledby="script-title">
              <p className="eyebrow">Copy-ready note</p>
              <h2 id="script-title">Send this before the provider call</h2>
              <p>We are comparing Philippines staffing options for a defined role. Please cover these points in the call and proposal:</p>
              <ol>{detail.callScript.map((line) => <li key={line}>{line}</li>)}</ol>
            </section>

            <section className="article-section" id="faq" aria-labelledby="faq-title">
              <p className="eyebrow">Common questions</p>
              <h2 id="faq-title">Philippines staffing provider FAQ</h2>
              <div className="faq-list">
                {detail.faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="source-box" aria-labelledby="sources-title">
              <h2 id="sources-title">Sources used for this guide</h2>
              <ul>
                {detail.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noreferrer">{source.name}</a>
                    <span>{source.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
