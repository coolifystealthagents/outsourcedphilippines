import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from './components';
import { staffingProcess } from './data';
import { fleetServices } from './fleet-content';
import './home.css';

export const metadata: Metadata = {
  title: 'Outsourcing to the Philippines',
  description: 'Plan clear, reviewable roles for Filipino talent with practical service scopes, handoff guidance, and Philippines staffing support.',
  alternates: { canonical: 'https://outsourcedphilippines.com' },
  openGraph: {
    title: 'Outsourcing to the Philippines | Outsourced Philippines',
    description: 'Plan clear, reviewable roles for Filipino talent with practical service scopes, handoff guidance, and Philippines staffing support.',
    url: 'https://outsourcedphilippines.com',
    type: 'website',
  },
};

const roles = fleetServices.slice(0, 4).map((service) => ({ ...service, href: `/services/${service.slug}` }));
const roleIllustrations = [
  '/illustrations/operations-support.svg',
  '/illustrations/customer-support.svg',
  '/illustrations/admin-support.svg',
  '/illustrations/reporting-qa.svg',
];
const handoffNotes = [
  { label: 'Work sample', text: 'Show one finished example before the first task is assigned.' },
  { label: 'Approval line', text: 'Write down what your Filipino team member can decide and what comes back to you.' },
  { label: 'Review rhythm', text: 'Check early work often, then ease off once the lane is steady.' },
];
const confidenceItems = [
  ['Filipino talent', '/icons/getillustrations/soft-color/filipino-talent.svg'],
  ['Clear access rules', '/icons/getillustrations/soft-color/access-rules.svg'],
  ['Named review owner', '/icons/getillustrations/soft-color/review-owner.svg'],
  ['Practical first week', '/icons/getillustrations/soft-color/first-week-plan.svg'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Outsourced Philippines',
    url: 'https://outsourcedphilippines.com',
    description: 'Independent role-planning guides for companies hiring Filipino talent from the Philippines.',
  };

  return <>
    <Header />
    <main className="role-room" data-design="philippines-role-room-2026-07" data-gi-rollout="two-illustration-packs-one-icon-pack">
      <JsonLd data={schema} />
      <section className="room-hero">
        <div className="hero-loop loop-one" aria-hidden="true" />
        <div className="hero-loop loop-two" aria-hidden="true" />
        <div className="container room-hero-grid">
          <div className="room-copy">
            <p className="eyebrow light">Philippines-only staffing guide</p>
            <h1>Build your team in the Philippines.</h1>
            <p className="hero-lead">Start with the role, not a stack of resumes. Map the tasks, access limits, working hours, and review owner before you hire talent from the Philippines.</p>
            <div className="actions">
              <a className="btn lilac" href="/contact-us">Request a role brief</a>
              <a className="text-link" href="#role-desk">See the role desk <span aria-hidden="true">↓</span></a>
            </div>
            <p className="route-note">This is an independent guide. Requests may be sent to a Philippines staffing partner that can follow up on the role.</p>
          </div>
          <figure className="hero-visual field-frame"><img className="field-photo" src="/design-photography/7964511.webp" alt="poeple working with laptops on office" width={1440} height={960} loading="eager" fetchPriority="high" /></figure>
        </div>
        <div className="container confidence-row" aria-label="Staffing approach">
          {confidenceItems.map(([label, icon]) => <span key={label}><img src={icon} alt={`${label} icon`} />{label}</span>)}
        </div>
      </section>



      <section className="role-library" id="roles">
        <div className="container">
          <div className="library-head"><div><p className="eyebrow">Services</p><h2>Specialist support for your daily operations.</h2></div><p>These are sensible places to begin with a Filipino team member. The service pages spell out the first tasks and the controls to keep.</p></div>
          <div className="role-grid">
            {roles.map((role) => <a className="role-card" href={role.href} key={role.slug}>
              <h3>{role.title}</h3><p>{role.summary}</p><b>Explore service <i aria-hidden="true">↗</i></b>
            </a>)}
          </div>
        </div>
      </section>

<section className="field-story" aria-labelledby="field-story-title"><img src="/design-photography/7709215.webp" alt="photo of a man and a woman putting on their headsets" width={1200} height={800} loading="lazy"/><div><h2 id="field-story-title">Design the handoff around the time difference</h2><p className="field-intro">A shared queue works when the person starting a shift can see what changed after the previous one ended.</p><p>Leave the open customer request, last reply, promised deadline, and next action together in the handoff.</p><p>Agree on a short overlap for exceptions. Routine work can move asynchronously; a changed refund or delivery promise goes back to its owner.</p><a href="/services/customer-experience">Explore customer experience <span aria-hidden="true">→</span></a></div></section>
      <section className="process-field" id="process">
        <div className="container process-grid">
          <div className="process-title"><p className="eyebrow light">A quieter launch</p><h2>Get one lane working before you add another.</h2><p>Start with a small set of tasks for Filipino talent. Add the next lane only after the first one is steady.</p></div>
          <div className="process-list">
            {staffingProcess.map((item) => <article key={item.step}><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="room-section" id="role-desk">
        <div className="container">
          <div className="section-intro visual-intro">
            <div><p className="eyebrow">The role desk</p><h2>Turn a busy job into a clean handoff.</h2></div>
            <div className="intro-support">
              <img className="field-photo" src="/design-photography/8867185.webp" alt="four people working in the office" width={1440} height={960} loading="lazy" />
              <p>Most hiring trouble starts before the interview. If the role covers everything, no candidate can know what good work looks like. Give the first month a smaller shape.</p>
            </div>
          </div>
          <div className="desk-grid">
            <article className="desk-main">
              <div className="desk-top"><span>Working brief</span><span>Philippines talent</span></div>
              <h3>What should leave your desk first?</h3>
              <div className="task-lines">
                <p><span>Recurring work with a finished example</span><b>Ready</b></p>
                <p><span>A task with one clear approval owner</span><b>Ready</b></p>
                <p><span>Work that can be checked without another meeting</span><b>Ready</b></p>
                <p className="hold"><span>Unwritten decisions only you can make</span><b>Hold</b></p>
              </div>
            </article>
            <aside className="desk-side">
              <img className="field-photo" src="/design-photography/7653580.webp" alt="colleagues in an office" width={1440} height={960} loading="lazy" />
              <p className="eyebrow light">Before access</p>
              <h3>Draw the boundary.</h3>
              <ul><li>Individual account</li><li>Smallest useful permission set</li><li>Approval rule for exceptions</li><li>Access removal owner</li></ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="decision-compass" aria-labelledby="decision-title">
        <div className="container">
          <div className="compass-heading"><p className="eyebrow">Decision guidance</p><h2 id="decision-title">Choose the lane by what must stay visible.</h2><p>A useful starting role is not necessarily the busiest one. Pick the work your team can explain, sample, and stop safely when an exception appears.</p></div>
          <div className="compass-grid">
            <article><h3>Records must agree</h3><p>Start with a source-led lane when the core problem is keeping fields, documents, dates, or transactions current.</p><a href="/services/bookkeeping-support">Explore bookkeeping support →</a></article>
            <article><h3>Conversations need a route</h3><p>Start with a response lane when approved answers are stable and unusual cases have a named escalation owner.</p><a href="/services/customer-experience">Explore customer experience →</a></article>
            <article><h3>Owners need follow-through</h3><p>Start with coordination when decisions already have owners but actions, dependencies, and evidence are becoming scattered.</p><a href="/services/project-coordination">Explore project coordination →</a></article>
          </div>
          <a className="compass-all" href="/services">Compare all eleven services →</a>
        </div>
      </section>

      <section className="container closing-card">
        <div><p className="eyebrow light">Put the role on paper</p><h2>Send the messy task list. Get a cleaner starting point.</h2><p>Tell us what repeats, what needs approval, and when the work must happen. The brief stays focused on Filipino talent from the Philippines.</p></div>

        <a className="btn lilac" href="/contact-us">Request a role brief</a>
      </section>
    </main>
    <Footer />
  </>;
}
