import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://outsourcedphilippines.com';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return {
    title: s ? `${s.title} | Filipino talent in the Philippines` : 'Service',
    description: s?.desc,
    alternates: s ? { canonical: `/services/${s.slug}` } : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const serviceUrl = `${baseUrl}/services/${s.slug}`;
  const howToId = `${serviceUrl}#first-week-launch`;
  const faqId = `${serviceUrl}#faq`;
  const pageId = `${serviceUrl}#webpage`;
  const serviceId = `${serviceUrl}#service`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': pageId,
      url: serviceUrl,
      name: `${s.title} for outsourced Philippines staffing`,
      description: s.desc,
      isPartOf: { '@type': 'WebSite', '@id': `${baseUrl}/#website`, name: site.brand, url: baseUrl },
      mainEntity: { '@id': serviceId },
      hasPart: [{ '@id': howToId }, { '@id': faqId }],
      breadcrumb: { '@id': `${serviceUrl}#breadcrumb` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': serviceId,
      name: `${s.title} staffing support`,
      serviceType: s.title,
      provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
      areaServed: { '@type': 'Country', name: 'Philippines' },
      audience: { '@type': 'BusinessAudience', audienceType: site.audience },
      description: s.desc,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': howToId,
      name: `How to launch ${s.title.toLowerCase()} in week one`,
      step: s.launchPlan.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item,
        text: item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': faqId,
      mainEntity: s.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${serviceUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
        { '@type': 'ListItem', position: 3, name: s.title, item: serviceUrl },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{s.title} for Filipino teams in the Philippines</h1>
              <p className="lead">{s.desc}</p>
              <p>{s.buyerProblem}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt="Colleagues discussing work around monitors in an open office" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Best tasks</h3>
              <ul>{s.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Quality controls</h3>
              <ul>{s.controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card" id="first-week-launch">
              <h3>First week launch</h3>
              <ol>{s.launchPlan.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
          </div>
        </section>

        <section className="section band" id="faq">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>What to decide before you hire.</h2>
            <div className="cards">
              {s.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two">
            <div>
              <p className="eyebrow">Simple handoff rule</p>
              <h2>Give the role a small lane first.</h2>
              <p>
                A Filipino hire works best when the first week has finished examples, clear approval rules, and one manager checking the work. Add more tasks after the first lane is steady.
              </p>
            </div>
            <div className="card">
              <p className="quote">"Do not hire a person into a foggy job. Write the lane, test the lane, then widen it."</p>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
