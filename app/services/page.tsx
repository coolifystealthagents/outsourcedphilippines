import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';
import { fleetServices } from '../fleet-content';

const baseUrl = 'https://outsourcedphilippines.com';
const servicesUrl = `${baseUrl}/services`;

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore focused staffing services delivered by specialists based in the Philippines.',
  alternates: { canonical: servicesUrl },
  openGraph: {
    title: 'Philippines-based staffing services',
    description: 'Explore focused staffing services delivered by specialists based in the Philippines.',
    url: servicesUrl,
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${servicesUrl}#collection`,
      url: servicesUrl,
      name: 'Philippines-based staffing services',
      description: metadata.description,
      mainEntity: { '@id': `${servicesUrl}#services` },
      breadcrumb: { '@id': `${servicesUrl}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${servicesUrl}#services`,
      numberOfItems: fleetServices.length,
      itemListElement: fleetServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        url: `${servicesUrl}/${service.slug}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${servicesUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
      ],
    },
  ],
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="fleet-main fleet-outsourcedphilippines">
        <JsonLd data={schema} />
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Philippines business teams, scoped around real work</h1>
            <p className="lead">Choose a focused service lane, then define the tools, examples, approvals, and reporting your Philippines-based specialist will use.</p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {fleetServices.map((service, index) => (
              <a className="fleet-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
