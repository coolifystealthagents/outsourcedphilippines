import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const baseUrl = 'https://outsourcedphilippines.com';

type DetailSlug = keyof typeof blogDetails;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug as DetailSlug];
  const articleUrl = `${baseUrl}/blog/${post.slug}`;

  if (!detail) {
    return (
      <>
        <Header />
        <main className="section">
          <article className="container" style={{ maxWidth: 880 }}>
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="card">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          </article>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

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
