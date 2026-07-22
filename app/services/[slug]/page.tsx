import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';

const baseUrl = 'https://outsourcedphilippines.com';
const servicesUrl = `${baseUrl}/services`;

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};

  const url = `${servicesUrl}/${service.slug}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.summary,
      url,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${servicesUrl}/${service.slug}`;
  const serviceId = `${url}#service`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.summary,
        mainEntity: { '@id': serviceId },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: service.title,
        description: service.summary,
        url,
        areaServed: { '@type': 'Country', name: 'Philippines' },
        provider: {
          '@type': 'Organization',
          name: 'Outsourced Philippines',
          url: baseUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="fleet-main">
        <JsonLd data={schema} />
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Philippines service</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.summary}</p>
            <a className="btn primary" href="/contact">Discuss this service</a>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <article>
              <h2>Work this role can support</h2>
              <ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </article>
            <article>
              <h2>Controls to set first</h2>
              <ul>{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </article>
            <article>
              <h2>Practical launch plan</h2>
              <ol>{service.launch.map((step) => <li key={step}>{step}</li>)}</ol>
            </article>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
