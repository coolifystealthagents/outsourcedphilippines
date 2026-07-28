import { Header, Footer, JsonLd } from './components';
import { services, staffingProcess } from './data';
import { roleGallery } from './role-gallery-data';

const roles = services.slice(0, 4);
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
    <main className="role-room" data-design="philippines-role-room-2026-07">
      <JsonLd data={schema} />
      <section className="room-hero">
        <div className="hero-loop loop-one" aria-hidden="true" />
        <div className="hero-loop loop-two" aria-hidden="true" />
        <div className="container room-hero-grid">
          <div className="room-copy">
            <p className="eyebrow light">Philippines-only staffing guide</p>
            <h1>Build a Filipino team around the work you already know.</h1>
            <p className="hero-lead">Start with the role, not a stack of resumes. Map the tasks, access limits, working hours, and review owner before you hire talent from the Philippines.</p>
            <div className="actions">
              <a className="btn lilac" href="/contact">Request a role brief</a>
              <a className="text-link" href="#role-desk">See the role desk <span aria-hidden="true">↓</span></a>
            </div>
            <p className="route-note">This is an independent guide. Requests may be sent to a Philippines staffing partner that can follow up on the role.</p>
          </div>
          <div className="hero-visual">
            <div className="photo-shell illustration-shell">
              <object type="image/webp" data="/illustrations/aurora/team-celebration.webp" aria-label="A team celebrating together around a laptop">
                <img src="/philippines-team-workroom.jpg" alt="Colleagues discussing work around monitors in an open office" width="1200" height="1200" />
              </object>
            </div>
            <aside className="role-slip">
              <span>Role brief / 01</span>
              <strong>One owner.<br />One first lane.</strong>
              <small>Tasks · tools · limits · review</small>
            </aside>
            <div className="ph-seal" aria-label="Talent sourced only from the Philippines"><b>PH</b><span>only</span></div>
          </div>
        </div>
        <div className="container confidence-row" aria-label="Staffing approach">
          <span>Filipino talent</span><span>Clear access rules</span><span>Named review owner</span><span>Practical first week</span>
        </div>
      </section>

      <section className="room-section" id="role-desk">
        <div className="container">
          <div className="section-intro visual-intro">
            <div><p className="eyebrow">The role desk</p><h2>Turn a busy job into a clean handoff.</h2></div>
            <div className="intro-support">
              <object type="image/webp" data="/illustrations/aurora/clean-handoff.webp" aria-label="Two coworkers confirming a clear handoff">
                <img src="/illustrations/customer-support.svg" alt="Customer support work illustration" width="700" height="700" loading="lazy" />
              </object>
              <p>Most hiring trouble starts before the interview. If the role covers everything, no candidate can know what good work looks like. Give the first month a smaller shape.</p>
            </div>
          </div>
          <div className="desk-grid">
            <article className="desk-main">
              <div className="desk-top"><span>Working brief</span><span>Philippines talent</span></div>
              <h3>What should leave your desk first?</h3>
              <div className="task-lines">
                <p><i>01</i><span>Recurring work with a finished example</span><b>Ready</b></p>
                <p><i>02</i><span>A task with one clear approval owner</span><b>Ready</b></p>
                <p><i>03</i><span>Work that can be checked without another meeting</span><b>Ready</b></p>
                <p className="hold"><i>04</i><span>Unwritten decisions only you can make</span><b>Hold</b></p>
              </div>
            </article>
            <aside className="desk-side">
              <p className="eyebrow light">Before access</p>
              <h3>Draw the boundary.</h3>
              <ul><li>Individual account</li><li>Smallest useful permission set</li><li>Approval rule for exceptions</li><li>Access removal owner</li></ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="role-library" id="roles">
        <div className="container">
          <div className="library-head"><div><p className="eyebrow">Starting lanes</p><h2>Choose work that can be seen, checked, and handed back.</h2></div><p>These are sensible places to begin with a Filipino team member. The service pages spell out the first tasks and the controls to keep.</p></div>
          <div className="role-grid">
            {roles.map((role, index) => <a className="role-card" href={`/services/${role.slug}`} key={role.slug}>
              <span className="role-card-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="role-card-art" aria-hidden="true">
                <img src={roleIllustrations[index]} alt="" />
              </span>
              <h3>{role.title}</h3><p>{role.buyerProblem}</p><b>Open the role notes <i aria-hidden="true">↗</i></b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="process-field" id="process">
        <div className="container process-grid">
          <div className="process-title"><p className="eyebrow light">A quieter launch</p><h2>Get one lane working before you add another.</h2><p>Start with a small set of tasks for Filipino talent. Add the next lane only after the first one is steady.</p><object className="process-illustration" type="image/webp" data="/illustrations/aurora/one-lane-target.webp" aria-label="A hand placing one clear target at the center"><img src="/illustrations/operations-support.svg" alt="Operations support work illustration" width="700" height="700" loading="lazy" /></object></div>
          <div className="process-list">
            {staffingProcess.map((item) => <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="room-section handoff-section">
        <div className="container">
          <div className="section-intro visual-intro"><div><p className="eyebrow">Proof without theater</p><h2>Ask to see the working documents.</h2></div><div className="intro-support"><object type="image/webp" data="/illustrations/aurora/working-documents.webp" aria-label="Coworkers reviewing a working document together"><img src="/illustrations/admin-support.svg" alt="Administrative support work illustration" width="700" height="700" loading="lazy" /></object><p>A real process is easier to trust when you can inspect it. Blank templates tell you more than borrowed logos or a perfect testimonial.</p></div></div>
          <div className="handoff-grid">{handoffNotes.map((note, index) => <article key={note.label}><span>0{index + 1}</span><h3>{note.label}</h3><p>{note.text}</p></article>)}</div>
        </div>
      </section>

      <section className="role-atlas-section" aria-labelledby="role-atlas-title">
        <div className="container">
          <div className="role-atlas-head">
            <div>
              <p className="eyebrow">The wider role map</p>
              <h2 id="role-atlas-title">There is more than one way to shape a useful role.</h2>
            </div>
            <div>
              <p>Browse more work themes from the Philippines role desk. Start with the tasks your team can explain, check, and hand back.</p>
              <span>Swipe or scroll sideways through all 46 themes <b aria-hidden="true">→</b></span>
            </div>
          </div>
          <div className="role-atlas-window" tabIndex={0} aria-label="More occupation and work illustrations">
            {roleGallery.map((item, index) => <figure className="role-atlas-card" key={item.src}>
              <img src={item.src} alt={`${item.label} work theme`} width="320" height="320" loading="lazy" />
              <figcaption><span>{String(index + 5).padStart(2, '0')}</span><strong>{item.label}</strong></figcaption>
            </figure>)}
          </div>
          <p className="role-atlas-note">These pictures show ways to think about work. A role brief still needs clear tasks, access rules, hours, and one review owner.</p>
        </div>
      </section>

      <section className="container closing-card">
        <div><p className="eyebrow light">Put the role on paper</p><h2>Send the messy task list. Get a cleaner starting point.</h2><p>Tell us what repeats, what needs approval, and when the work must happen. The brief stays focused on Filipino talent from the Philippines.</p></div>
        <object className="closing-illustration" type="image/webp" data="/illustrations/aurora/messy-to-clear.webp" aria-label="A team turning a stack of work into one clear next step"><img src="/illustrations/reporting-qa.svg" alt="Reporting and quality assurance work illustration" width="700" height="700" loading="lazy" /></object>
        <a className="btn lilac" href="/contact">Request a role brief</a>
      </section>
    </main>
    <Footer />
  </>;
}
