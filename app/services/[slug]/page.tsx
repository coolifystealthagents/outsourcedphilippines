const fieldPhotos: Record<string,[string,string]> = {"executive-administration": ["/design-photography/8133880.webp", "a woman in black blazer holding a notebook"], "ecommerce-operations": ["/design-photography/7857553.webp", "woman standing next to a desk with a laptop and cardboard boxes and writing on paper"], "real-estate-administration": ["/design-photography/7652176.webp", "a group of people having a meeting in the office"], "healthcare-administration": ["/design-photography/7709185.webp", "a woman working in a call center"], "legal-administrative-support": ["/design-photography/9052297.webp", "woman holding a notebook and talking"], "bookkeeping-support": ["/design-photography/35029019.webp", "business desk with financial documents and cash"], "customer-experience": ["/design-photography/8867267.webp", "call center agent working"], "digital-marketing-operations": ["/design-photography/5710191.webp", "concentrated asian women working on laptop in cafe"], "sales-development-support": ["/design-photography/7163386.webp", "employees using a laptop in the office"], "project-coordination": ["/design-photography/7693730.webp", "group of men and women looking at a laptop and working together"], "operations-support": ["/design-photography/3931504.webp", "diverse business team working on laptop in modern office"]};
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer, Header, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import '../services.css';

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
    openGraph: { title: service.title, description: service.summary, url, type: 'website', images: [{ url: fieldPhotos[service.slug][0], width: service.hero.width, height: service.hero.height, alt: fieldPhotos[service.slug][1] }] },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const url = `${servicesUrl}/${service.slug}`;
  const related = service.related.map((relatedSlug) => fleetServices.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: service.title, description: service.summary, mainEntity: { '@id': `${url}#service` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
      { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.summary, url, areaServed: { '@type': 'Country', name: 'Philippines' }, provider: { '@type': 'Organization', name: 'Outsourced Philippines', url: baseUrl } },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
        { '@type': 'ListItem', position: 3, name: service.title, item: url },
      ] },
    ],
  };

  return <>
    <Header />
    <main className="service-system">
      <JsonLd data={schema} />
      <section className="service-hero-stage">
        <div className="service-shell service-hero-grid">
          <div>
            <p className="service-kicker">Specialist support from the Philippines</p>
            <h1>{service.title}</h1>
            <p className="service-lead">{service.summary}</p>
            <div className="service-hero-actions">
              <a className="btn lilac" href="/contact-us">Discuss your requirements</a>
              <a className="service-text-link" href="#scope">See responsibilities ↓</a>
            </div>
          </div>
          <div className="service-hero-art">
            <img src={fieldPhotos[service.slug][0]} alt={fieldPhotos[service.slug][1]} width={service.hero.width} height={service.hero.height} loading="eager" fetchPriority="high" style={{ objectPosition: service.hero.position }} />
            <p className="service-hero-note">Practical support. Clear responsibilities.</p>
          </div>
        </div>
      </section>

      <nav className="brief-nav" aria-label="On this page"><a href="#scope">Responsibilities</a><a href="#process">Working together</a><a href="#checks">Quality & approvals</a><a href="#questions">Questions</a></nav>
      <section className="brief-section" id="scope"><div className="brief-shell"><div className="brief-context"><p className="service-kicker">Where support helps</p><p>{service.problem}</p><p className="brief-audience">{service.audience}</p></div><div className="brief-columns"><article><h2>What the specialist handles</h2><ul>{service.scope.map(item=><li key={item}>{item}</li>)}</ul><h3>What you provide</h3><ul>{service.inputs.map(item=><li key={item}>{item}</li>)}</ul></article><aside className="brief-output"><p className="service-kicker">The finished handoff</p><h2>What you receive</h2><ul>{service.deliverables.map(item=><li key={item}>{item}</li>)}</ul></aside></div></div></section>
      <section className="brief-section brief-tint" id="process"><div className="brief-shell"><div className="brief-heading"><p className="service-kicker">A practical starting point</p><h2>From first sample to routine work</h2></div><ol className="brief-steps">{service.workflow.map((step,i)=><li key={step.title}><span aria-hidden="true">0{i+1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol><div className="brief-examples">{service.scenarios.map(scenario=><article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.situation}</p><p><strong>The response:</strong> {scenario.approach}</p></article>)}</div></div></section>
      <section className="brief-section" id="checks"><div className="brief-shell brief-columns"><article><p className="service-kicker">Your team remains in control</p><h2>Decisions you keep</h2><ul>{service.boundaries.map(item=><li key={item}>{item}</li>)}</ul></article><article><p className="service-kicker">Review before expanding</p><h2>How the work is checked</h2><ul>{service.qualityControls.map(item=><li key={item}>{item}</li>)}</ul></article></div></section>
      <section className="brief-section brief-tint" id="questions"><div className="brief-shell"><div className="brief-heading"><p className="service-kicker">Before you begin</p><h2>Questions about this service</h2></div><div className="brief-faq">{service.faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div><nav className="brief-related" aria-label="Related services"><strong>Also explore</strong>{related.map(item=>item&&<a key={item.slug} href={`/services/${item.slug}`}>{item.title} ↗</a>)}<a href="/services">All services ↗</a></nav></div></section>
      <section className="service-shell service-final">
        <div><p className="service-kicker" style={{ color: '#fff' }}>Put the lane on paper</p><h2>Bring the recurring work and one real exception.</h2><p>We can use them to frame the inputs, permissions, review owner, and first sample for a Philippines-based role.</p></div>
        <a className="btn lilac" href="/contact-us">Request a role brief</a>
      </section>
    </main>
    <Footer />
  </>;
}
