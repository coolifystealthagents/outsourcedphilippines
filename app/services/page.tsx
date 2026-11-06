import { SectorScenarios } from "../sector-scenarios";
import type { Metadata } from 'next';
import { Footer, Header, JsonLd } from '../components';
import { fleetServices } from '../fleet-content';
import './services.css';

const baseUrl = 'https://outsourcedphilippines.com';
const servicesUrl = `${baseUrl}/services`;
export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore bounded Philippines-based staffing lanes with practical inputs, workflows, quality controls, and owner decision boundaries.',
  alternates: { canonical: servicesUrl },
  openGraph: { title: 'Philippines-based staffing services', description: 'Explore bounded Philippines-based staffing lanes with practical inputs, workflows, quality controls, and owner decision boundaries.', url: servicesUrl, type: 'website' },
};

const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'CollectionPage', '@id': `${servicesUrl}#collection`, url: servicesUrl, name: 'Philippines-based staffing services', description: metadata.description, mainEntity: { '@id': `${servicesUrl}#services` }, breadcrumb: { '@id': `${servicesUrl}#breadcrumb` } },
  { '@type': 'ItemList', '@id': `${servicesUrl}#services`, numberOfItems: fleetServices.length, itemListElement: fleetServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${servicesUrl}/${service.slug}` })) },
  { '@type': 'BreadcrumbList', '@id': `${servicesUrl}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl }] },
] };

const indexFaqs = [
  { question: 'Which service should we start with?', answer: 'Start where the input, finished output, and reviewer are easiest to name. A narrow recurring queue is a better pilot than a broad request for general assistance.' },
  { question: 'Can several services be combined into one role?', answer: 'Yes when the work shares tools, hours, sensitivity, and a review owner. Keep unrelated regulated, customer-facing, or financial decisions in separate lanes until each is stable.' },
  { question: 'What remains with our team?', answer: 'Your team keeps policy, approval, professional judgment, commercial commitments, sensitive exceptions, and the responsibility to provide lawful access and current instructions.' },
  { question: 'Does a service page promise a business outcome?', answer: 'No. These pages describe work design and controls. Fit and quality still need to be tested with current examples, a representative sample, and accountable review.' },
];

export default function Services() {
  return <>
    <Header />
    <main className="service-system philippines-directory">
      <JsonLd data={schema} />
      <section className="service-hero-stage service-index-hero">
        <div className="service-shell service-hero-grid">
          <div><p className="service-kicker">Philippines-based specialist support</p><h1>Find the right support for your team.</h1><p className="service-lead">Explore eleven practical service families. Each page names the inputs, working scope, outputs, review controls, and human decisions that should not disappear into delegation.</p><div className="service-hero-actions"><a className="btn lilac" href="#service-atlas">Explore services</a><a className="service-text-link" href="/contact-us">Bring us a task list →</a></div></div>
          <div className="service-hero-art"><img className="field-photo" src="/design-photography/8519081.webp" alt="a people looking the laptop together" width={1440} height={960} loading="eager" fetchPriority="high" /><p className="service-hero-note">Eleven starting lanes. One rule: keep decisions with a named human owner.</p></div>
        </div>
      </section>

      <section className="service-section" id="service-atlas">
        <div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Our services</p><h2>Choose the work you want to hand over.</h2></div><p>See the responsibilities, deliverables, and approval boundaries for each service.</p></div>
          <div className="service-family-grid">{fleetServices.map((service) => <a className="service-family-card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.title}</h2><p>{service.summary}</p><b>Explore service ↗</b></a>)}</div>
        </div>
      </section>

      <section className="service-section dark"><div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Operating method</p><h2>A clear start. A checkable result.</h2></div><p>Use a small live sample to test the definition, source evidence, correction path, and owner response before adding volume.</p></div>
        <div className="service-workflow"><article><h3>Bring examples</h3><p>Share accepted work, a failed or unusual item, the current source record, and any existing checklist.</p></article><article><h3>Draw the lane</h3><p>Name permitted actions, systems, hours, definition of done, and the exact condition that pauses work.</p></article><article><h3>Review a sample</h3><p>Inspect ordinary, missing-information, and exception cases. Record why corrections were needed.</p></article><article><h3>Expand carefully</h3><p>Add volume or an adjacent queue only when quality is stable and access still matches the task.</p></article></div>
      </div></section>

      <section className="service-section paper"><div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Common questions</p><h2>Before you get started.</h2></div></div><div className="service-faqs">{indexFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="service-shell service-final"><div><p className="service-kicker" style={{ color: '#fff' }}>Start with the evidence</p><h2>Bring one recurring task and one awkward exception.</h2><p>That is enough to begin a useful conversation about scope, access, quality review, and a Philippines-based support lane.</p></div><a className="btn lilac" href="/contact-us">Request a role brief</a></section>
    </main>
    <Footer />
  </>;
}
