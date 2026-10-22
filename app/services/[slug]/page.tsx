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
    openGraph: { title: service.title, description: service.summary, url, type: 'website', images: [{ url: service.hero.src, width: service.hero.width, height: service.hero.height, alt: service.hero.alt }] },
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
            <p className="service-kicker">Philippines-based role planning</p>
            <h1>{service.title}</h1>
            <p className="service-lead">{service.summary}</p>
            <div className="service-hero-actions">
              <a className="btn lilac" href="/contact-us">Discuss this role</a>
              <a className="service-text-link" href="#scope">Read the working scope ↓</a>
            </div>
          </div>
          <div className="service-hero-art">
            <img src={service.hero.src} alt={service.hero.alt} width={service.hero.width} height={service.hero.height} loading="eager" fetchPriority="high" style={{ objectPosition: service.hero.position }} />
            <p className="service-hero-note">A role brief should name the work, evidence, owner, and stop rule.</p>
          </div>
        </div>
      </section>

      <section className="service-intro-band">
        <div className="service-shell service-intro-grid">
          <article><p className="service-kicker">Who this is for</p><h2>A lane with an accountable owner</h2><p>{service.audience}</p></article>
          <article><p className="service-kicker">The operating problem</p><h2>Delegation needs a visible edge</h2><p>{service.problem}</p></article>
        </div>
      </section>

      <section className="service-section" id="scope">
        <div className="service-shell">
          <div className="service-heading"><div><p className="service-kicker">Role desk</p><h2>Inputs first. Then a bounded scope.</h2></div><p>Useful support begins with source material and decision rights-not a broad job title. These are the items to settle before access is issued.</p></div>
          <div className="service-list-grid">
            <article className="service-list-card"><h3>What the client provides</h3><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="service-list-card"><h3>Work inside the lane</h3><ul>{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </div>
      </section>

      <section className="service-section dark">
        <div className="service-shell">
          <div className="service-heading"><div><p className="service-kicker">Working rhythm</p><h2>Move from examples to a reviewable queue.</h2></div><p>The launch sequence is deliberately narrow. It exposes unclear instructions and exception paths before the role takes on more volume.</p></div>
          <div className="service-workflow">{service.workflow.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
          <div className="service-heading" style={{ marginTop: 58 }}><div><p className="service-kicker">What comes back</p><h2>Working artifacts, not invisible activity.</h2></div></div>
          <div className="service-deliverables">{service.deliverables.map((item) => <span key={item}><b>Reviewable output</b>{item}</span>)}</div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell service-boundary-grid">
          <article className="service-boundary-card"><p className="service-kicker">Human decision boundary</p><h2>What stays with the owner</h2><ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="service-boundary-card quality"><p className="service-kicker" style={{ color: '#fff' }}>Quality controls</p><h2>How work is checked</h2><ul>{service.qualityControls.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="service-section paper">
        <div className="service-shell">
          <div className="service-heading"><div><p className="service-kicker">In practice</p><h2>Ordinary work and the exception beside it.</h2></div><p>Scenarios make a role boundary easier to test than a list of traits. They show where preparation ends and accountable judgment begins.</p></div>
          <div className="service-scenarios">{service.scenarios.map((scenario) => <article className="service-scenario" key={scenario.title}><h3>{scenario.title}</h3><p><strong>Situation:</strong> {scenario.situation}</p><p><strong>Approach:</strong> {scenario.approach}</p></article>)}</div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-shell">
          <div className="service-heading"><div><p className="service-kicker">Decision support</p><h2>Questions to resolve before launch.</h2></div></div>
          <div className="service-faqs">{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
          <div style={{ marginTop: 48 }}><p className="service-kicker">Related service lanes</p><div className="service-related">{related.map((item) => item && <a key={item.slug} href={`/services/${item.slug}`}>{item.title} →</a>)}<a href="/services">View all services →</a></div></div>
        </div>
      </section>

      <section className="service-shell service-final">
        <div><p className="service-kicker" style={{ color: '#fff' }}>Put the lane on paper</p><h2>Bring the recurring work and one real exception.</h2><p>We can use them to frame the inputs, permissions, review owner, and first sample for a Philippines-based role.</p></div>
        <a className="btn lilac" href="/contact-us">Request a role brief</a>
      </section>
    </main>
    <Footer />
  </>;
}
