import { Header, Footer, JsonLd } from './components';
import { services, staffingProcess } from './data';

const roles = services.slice(0, 4);
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
            <div className="photo-shell">
              <img src="/philippines-team-workroom.jpg" alt="Colleagues discussing work around monitors in an open office" />
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
          <div className="section-intro">
            <div><p className="eyebrow">The role desk</p><h2>Turn a busy job into a clean handoff.</h2></div>
            <p>Most hiring trouble starts before the interview. If the role covers everything, no candidate can know what good work looks like. Give the first month a smaller shape.</p>
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
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{role.title}</h3><p>{role.buyerProblem}</p><b>Open the role notes <i aria-hidden="true">↗</i></b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="process-field" id="process">
        <div className="container process-grid">
          <div className="process-title"><p className="eyebrow light">A quieter launch</p><h2>Get one lane working before you add another.</h2><p>Start with a small set of tasks for Filipino talent. Add the next lane only after the first one is steady.</p></div>
          <div className="process-list">
            {staffingProcess.map((item) => <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="room-section handoff-section">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Proof without theater</p><h2>Ask to see the working documents.</h2></div><p>A real process is easier to trust when you can inspect it. Blank templates tell you more than borrowed logos or a perfect testimonial.</p></div>
          <div className="handoff-grid">{handoffNotes.map((note, index) => <article key={note.label}><span>0{index + 1}</span><h3>{note.label}</h3><p>{note.text}</p></article>)}</div>
        </div>
      </section>

      <section className="container closing-card">
        <div><p className="eyebrow light">Put the role on paper</p><h2>Send the messy task list. Get a cleaner starting point.</h2><p>Tell us what repeats, what needs approval, and when the work must happen. The brief stays focused on Filipino talent from the Philippines.</p></div>
        <a className="btn lilac" href="/contact">Request a role brief</a>
      </section>
    </main>
    <Footer />
  </>;
}
