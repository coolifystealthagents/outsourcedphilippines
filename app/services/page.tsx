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
    <main className="service-system">
      <JsonLd data={schema} />
      <section className="service-hero-stage service-index-hero">
        <div className="service-shell service-hero-grid">
          <div><p className="service-kicker">The Philippines role atlas</p><h1>Choose a work lane before you choose a job title.</h1><p className="service-lead">Explore eleven practical service families. Each page names the inputs, working scope, outputs, review controls, and human decisions that should not disappear into delegation.</p><div className="service-hero-actions"><a className="btn lilac" href="#service-atlas">Browse the service atlas</a><a className="service-text-link" href="/contact-us">Bring us a task list →</a></div></div>
          <div className="service-hero-art"><img src="/illustrations/getillustrations/goodle-team/filipino-team-collaboration.svg" alt="Illustrated Philippines-based team collaborating around a shared work plan" width="750" height="750" loading="eager" fetchPriority="high" /><p className="service-hero-note">Eleven starting lanes. One rule: keep decisions with a named human owner.</p></div>
        </div>
      </section>

      <section className="service-intro-band"><div className="service-shell service-intro-grid"><article><p className="service-kicker">The full offering</p><h2>Administrative work, specialist queues, and coordination</h2><p>The atlas covers executive, commerce, real estate, healthcare, legal, bookkeeping, customer, marketing, sales, project, and general operations support.</p></article><article><p className="service-kicker">How to use it</p><h2>Read for the edge of the role</h2><p>Do not compare titles alone. Compare source inputs, exception types, access needs, review capacity, and which owner can make the decisions the work will surface.</p></article></div></section>

      <section className="service-section" id="service-atlas">
        <div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Service atlas</p><h2>Find the queue that resembles your actual work.</h2></div><p>Every service opens into a page-specific role desk with scenarios, controls, FAQs, and neighboring lanes-not a generic task list.</p></div>
          <div className="service-family-grid">{fleetServices.map((service) => <a className="service-family-card" href={`/services/${service.slug}`} key={service.slug}><img src={service.hero.src} alt={service.hero.alt} width={service.hero.width} height={service.hero.height} loading="lazy" /><h2>{service.title}</h2><p>{service.summary}</p><b>Open the role desk →</b></a>)}</div>
        </div>
      </section>

      <section className="service-section dark"><div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Operating method</p><h2>A service becomes real when the handoff can be inspected.</h2></div><p>Use a small live sample to test the definition, source evidence, correction path, and owner response before adding volume.</p></div>
        <div className="service-workflow"><article><h3>Bring examples</h3><p>Share accepted work, a failed or unusual item, the current source record, and any existing checklist.</p></article><article><h3>Draw the lane</h3><p>Name permitted actions, systems, hours, definition of done, and the exact condition that pauses work.</p></article><article><h3>Review a sample</h3><p>Inspect ordinary, missing-information, and exception cases. Record why corrections were needed.</p></article><article><h3>Expand carefully</h3><p>Add volume or an adjacent queue only when quality is stable and access still matches the task.</p></article></div>
      </div></section>

      <section className="service-section paper"><div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Decision guide</p><h2>Choose by operating condition, not by fashionable title.</h2></div><p>The same person may eventually cover adjacent lanes, but the first brief should have one coherent review system.</p></div>
        <div className="service-choice-table"><article><h3>When work follows records</h3><p>Choose bookkeeping, ecommerce, real estate, healthcare, or legal administration when source provenance, access, and professional boundaries dominate the design.</p><a href="/services/bookkeeping-support">See a controlled records lane →</a></article><article><h3>When work follows conversations</h3><p>Choose customer experience, sales development, marketing operations, or executive administration when approved language and escalation context matter most.</p><a href="/services/customer-experience">See a customer queue →</a></article><article><h3>When work follows owners</h3><p>Choose project coordination or operations support when dependencies, handoffs, status evidence, and exception aging are the center of the role.</p><a href="/services/project-coordination">See a coordination lane →</a></article></div>
      </div></section>

      <section className="service-section"><div className="service-shell service-boundary-grid"><article className="service-boundary-card"><p className="service-kicker">Good first-lane signals</p><h2>Work is ready when...</h2><ul><li>A finished item can be shown without a long private explanation.</li><li>One source of truth and one review owner can be named.</li><li>Ordinary work is common enough to form a useful sample.</li><li>An exception can pause safely while an owner responds.</li></ul></article><article className="service-boundary-card quality"><p className="service-kicker" style={{ color: '#fff' }}>Hold and redesign</p><h2>Do not delegate yet when...</h2><ul><li>The role depends on unspoken judgment or constantly changing priorities.</li><li>No one has capacity to review early work or answer exceptions.</li><li>Access cannot be limited to the work being assigned.</li><li>Success is described only as “save time” with no observable output.</li></ul></article></div></section>

      <section className="service-section paper"><div className="service-shell"><div className="service-heading"><div><p className="service-kicker">Common questions</p><h2>Before you select a lane.</h2></div></div><div className="service-faqs">{indexFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="service-shell service-final"><div><p className="service-kicker" style={{ color: '#fff' }}>Start with the evidence</p><h2>Bring one recurring task and one awkward exception.</h2><p>That is enough to begin a useful conversation about scope, access, quality review, and a Philippines-based support lane.</p></div><a className="btn lilac" href="/contact-us">Request a role brief</a></section>
    </main>
    <Footer />
  </>;
}
