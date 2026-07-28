import { JsonLd } from '../../components';

export const businessContinuitySlug = 'philippines-remote-team-business-continuity-checklist';
export const businessContinuityTitle = 'Philippines remote team business continuity checklist';
export const businessContinuityDescription = 'A practical business continuity checklist for keeping work moving when a Philippines-based remote team loses power, internet access, a tool, or a key contact.';
export const businessContinuityUrl = `https://outsourcedphilippines.com/blog/${businessContinuitySlug}`;

const sources = [
  { name: 'World Bank: Individuals using the Internet, Philippines', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH' },
  { name: 'World Bank: Fixed broadband subscriptions, Philippines', url: 'https://data.worldbank.org/indicator/IT.NET.BBND.P2?locations=PH' },
  { name: 'World Bank: Mobile cellular subscriptions, Philippines', url: 'https://data.worldbank.org/indicator/IT.CEL.SETS.P2?locations=PH' },
  { name: 'DOST-PAGASA: Tropical cyclone information', url: 'https://www.pagasa.dost.gov.ph/climate/tropical-cyclone-information' },
  { name: 'NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems', url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf' },
  { name: 'Ready.gov: Business emergency plans', url: 'https://www.ready.gov/business/emergency-plans' },
] as const;

const faqs = [
  { question: 'Does a Philippines-based remote worker need two internet providers?', answer: 'Not every role needs two home connections. Start with the work impact, then choose a tested backup such as mobile data, another approved location, or a company backup worker.' },
  { question: 'Who should call a continuity event?', answer: 'Name one company manager and one backup who can pause work, move a queue, or approve the alternate plan. The remote worker should report facts and follow the written trigger instead of making a company-wide call alone.' },
  { question: 'What should stay out of a personal chat during an outage?', answer: 'Keep passwords, full customer records, private files, and recovery codes out of personal chat. Use an approved backup channel and share only the details needed to identify the task and its status.' },
  { question: 'How often should the continuity plan be tested?', answer: 'Test each backup before the role goes live and after a tool, manager, or location changes. A short quarterly check is a useful company rule, but it is not a legal standard.' },
] as const;

function SafeHeader() {
  return <header className="nav fleet-nav"><div className="nav-inner"><a className="logo" href="/" aria-label="Outsourced Philippines home"><span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true"/><span className="logo-name">Outsourced Philippines</span></span></a><nav className="links fleet-links" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact">Contact Us</a></nav><details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact">Contact Us</a></nav></details></div></header>;
}

function SafeFooter() {
  return <footer className="footer legit-footer"><div className="footer-grid"><div><a className="footer-logo" href="/">Outsourced Philippines</a><p>Practical role planning for companies hiring Filipino talent based in the Philippines.</p></div><div><h3>Explore</h3><div className="footer-links"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a></div></div><div><h3>Company</h3><div className="footer-links"><a href="/contact">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a></div></div></div><div className="footer-bottom"><span>© 2026 Outsourced Philippines. All rights reserved.</span><span>OutsourcedPhilippines.com</span></div></footer>;
}

function Banner({ label, title, body, href, link }: { label: string; title: string; body: string; href: string; link: string }) {
  return <aside className="article-banner" aria-label={label}><div><p className="eyebrow">{label}</p><h2>{title}</h2><p>{body}</p></div><a className="btn primary" href={href}>{link}</a></aside>;
}

export function PhilippinesBusinessContinuityArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', '@id': `${businessContinuityUrl}#article`, headline: businessContinuityTitle, description: businessContinuityDescription, url: businessContinuityUrl, datePublished: '2026-07-28', dateModified: '2026-07-28', publisher: { '@type': 'Organization', name: 'Outsourced Philippines', url: 'https://outsourcedphilippines.com' }, citation: sources.map((source) => source.url), mainEntityOfPage: { '@id': `${businessContinuityUrl}#webpage` } },
      { '@type': 'FAQPage', '@id': `${businessContinuityUrl}#faq`, mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', '@id': `${businessContinuityUrl}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedphilippines.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedphilippines.com/blog' },
        { '@type': 'ListItem', position: 3, name: businessContinuityTitle, item: businessContinuityUrl },
      ] },
      { '@type': 'WebPage', '@id': `${businessContinuityUrl}#webpage`, url: businessContinuityUrl, name: businessContinuityTitle, mainEntity: { '@id': `${businessContinuityUrl}#article` }, breadcrumb: { '@id': `${businessContinuityUrl}#breadcrumb` } },
    ],
  };

  return <>
    <SafeHeader />
    <main className="article-page strict-article-page">
      <JsonLd data={schema} />
      <article data-article-marker="ph-remote-team-continuity-v1">
        <header className="article-hero">
          <div className="article-shell">
            <p className="eyebrow">Philippines staffing guide</p>
            <h1>{businessContinuityTitle}</h1>
            <p className="lead">Keep the work moving when a Philippines-based team member loses power, internet access, a work tool, or the company contact they need.</p>
            <p className="article-intro narrative">A useful continuity plan is short enough to use during a real interruption. It names the work that cannot wait, the person who can make decisions, and the safe backup path for each task.</p>
          </div>
        </header>

        <div className="article-shell article-body">
          <section className="takeaway-box" aria-labelledby="continuity-short-list-title">
            <p className="eyebrow">The short list</p>
            <h2 id="continuity-short-list-title">Five rules to settle before work begins</h2>
            <ul>
              <li>Rank tasks by the harm caused when they stop.</li>
              <li>Give every urgent queue a company owner and backup owner.</li>
              <li>Test the backup connection and channel with real work.</li>
              <li>Keep customer data inside approved tools during an interruption.</li>
              <li>Record what happened and fix weak steps after service returns.</li>
            </ul>
          </section>

          <section className="article-section" aria-labelledby="continuity-why-title">
            <h2 id="continuity-why-title">Plan for a normal bad day, not a movie disaster</h2>
            <p className="narrative">Most interruptions are ordinary: a neighborhood outage, a damaged cable, a flooded road, a locked account, or a company tool that will not load. The plan should help one person handle the next hour without asking them to solve the whole emergency.</p>
            <p className="narrative">DOST-PAGASA says an average of 20 tropical cyclones enter the Philippine Area of Responsibility each year, with about 8 or 9 crossing the country. It also says nearly 70% of typhoons develop during the July through October peak, so weather belongs in the plan even though not every worker faces the same local risk.</p>
            <p className="narrative">A person in Metro Manila, Cebu, Davao, or a smaller city may have very different power, transport, and connection options. Ask about the actual work location and available backups instead of writing one rule for the whole country.</p>
          </section>

          <div className="visual-scroll" tabIndex={0} role="region" aria-label="Philippines connectivity indicators chart; scroll horizontally on small screens">
            <p className="scroll-cue">Swipe or use arrow keys to see the full chart.</p>
            <svg className="evidence-chart" viewBox="0 0 780 390" role="img" aria-labelledby="continuity-chart-title continuity-chart-desc">
              <title id="continuity-chart-title">Selected Philippines connectivity indicators reported by the World Bank for 2024</title>
              <desc id="continuity-chart-desc">Horizontal bars show internet use at 67.3 percent of the population, fixed broadband subscriptions at 7.1 per 100 people, and mobile cellular subscriptions at 115.3 per 100 people.</desc>
              <rect width="780" height="390" rx="24" fill="#f7f1e7"/>
              <text x="40" y="48" className="svg-title">Philippines connectivity indicators</text>
              <text x="40" y="78" className="svg-note">World Bank data, 2024</text>
              <text x="40" y="138" className="svg-label">Internet users</text><rect x="350" y="108" width="228" height="40" rx="12" fill="#e35f3e"/><text x="592" y="138" className="svg-value">67.3%</text>
              <text x="40" y="226" className="svg-label">Fixed broadband subscriptions</text><rect x="350" y="196" width="24" height="40" rx="12" fill="#0f8f73"/><text x="388" y="226" className="svg-value">7.1 per 100</text>
              <text x="40" y="314" className="svg-label">Mobile subscriptions</text><rect x="350" y="284" width="390" height="40" rx="12" fill="#7357b5"/><text x="594" y="314" className="svg-value" style={{ fill: '#ffffff' }}>115.3 per 100</text>
              <line x1="350" y1="346" x2="740" y2="346" stroke="#a99c8d" strokeWidth="2"/><text x="350" y="372" className="svg-axis">0</text><text x="668" y="372" className="svg-axis">115 per 100</text>
            </svg>
          </div>
          <p className="methods-note">Methods note: The chart uses the latest 2024 Philippines values returned by the World Bank for three different indicators. Internet use is a share of people, while fixed and mobile values count subscriptions per 100 people; a person may hold more than one subscription, so these measures should not be added or treated as proof of backup access.</p>

          <Banner label="Start with the work lane" title="Write the tasks before the backup plan" body="List the first duties, manager-only decisions, work hours, and proof that the task is complete." href="/services/operations-support" link="See operations support" />

          <section className="article-section" aria-labelledby="continuity-table-title">
            <h2 id="continuity-table-title">Use one interruption table for the role</h2>
            <p className="narrative">The table should tell the worker what to do now, what can wait, and who takes control. Keep it beside the task guide so the backup path is easy to find when the normal tool is unavailable.</p>
            <div className="table-scroll" tabIndex={0} role="region" aria-label="Remote team continuity action table; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to reach the last column.</p>
              <table>
                <thead><tr><th>Interruption</th><th>Worker does first</th><th>Company owner decides</th><th>Safe backup</th><th>Proof to keep</th></tr></thead>
                <tbody>
                  <tr><th>Home power loss</th><td>Save work, report the time, and check the approved backup window</td><td>Whether to wait, move the queue, or use another worker</td><td>Charged device, approved alternate site, or queue handoff</td><td>Open tasks and last completed item</td></tr>
                  <tr><th>Internet loss</th><td>Test the named backup once and report the result</td><td>Whether mobile access is safe for the task</td><td>Approved mobile data or another approved location</td><td>Connection used and task status</td></tr>
                  <tr><th>Work tool outage</th><td>Stop duplicate entries and list blocked items</td><td>Whether a manual log may be used</td><td>Company-owned queue sheet with limited fields</td><td>Item ID, time, and later system update</td></tr>
                  <tr><th>Manager unavailable</th><td>Contact the named backup and hold exceptions</td><td>Which urgent decisions move to another owner</td><td>Backup contact tree</td><td>Requests held and messages sent</td></tr>
                  <tr><th>Severe local weather</th><td>Follow local safety advice and report availability when safe</td><td>Whether the shift or queue moves</td><td>Another worker or delayed service notice</td><td>Queue handoff and next check time</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section" aria-labelledby="continuity-priority-title">
            <h2 id="continuity-priority-title">Sort the work by what happens when it stops</h2>
            <p className="narrative">A customer reply due today is different from a report due next week. Mark each task as urgent, time-bound, or safe to hold, then write the longest pause the company can accept.</p>
            <p className="narrative">Be specific about the harm. A late internal spreadsheet may be annoying, while a missed customer safety message, locked account report, or same-day order change may need an immediate handoff.</p>
            <p className="narrative">The company manager owns these choices because they depend on customer promises and business risk. The Philippines-based worker can report the queue, preserve facts, and follow the trigger that the manager approved.</p>
          </section>

          <section className="quote-panel" aria-labelledby="continuity-quote-title">
            <p className="eyebrow">Exact source quote</p>
            <h2 id="continuity-quote-title">Recovery may use a different place, device, or method</h2>
            <blockquote>"Contingency planning refers to interim measures to recover information system services after a disruption."</blockquote>
            <p className="quote-source">NIST Special Publication 800-34 Rev. 1, May 2010, by Marianne Swanson, Pauline Bowen, Amy Wohl Phillips, Dean Gallup, and David Lynes.</p>
          </section>

          <section className="article-section" aria-labelledby="continuity-contact-title">
            <h2 id="continuity-contact-title">Build a contact tree that works across time zones</h2>
            <p className="narrative">Write one primary company contact and one backup for each shift. Include the channel, expected reply window, and the point when the worker should move to the next name.</p>
            <p className="narrative">Do not leave a Philippines-based worker sending repeated messages to a sleeping group chat while customer work piles up. Give the backup enough authority to move a queue, pause a task, or reach the person who can.</p>
            <p className="narrative">Test the tree with a harmless message that includes Philippines time and the company team's time. If the backup cannot answer or does not know the job, fix the list before live work begins.</p>
          </section>

          <Banner label="Protect customer work" title="Pair the backup with clear access limits" body="Use named accounts, small permissions, and manager-owned recovery steps on every approved connection." href="/blog/philippines-remote-staff-data-access-checklist" link="Open the access checklist" />

          <section className="article-section" aria-labelledby="continuity-path-title">
            <h2 id="continuity-path-title">Use a four-step continuity path</h2>
            <p className="narrative">The worker reports the interruption and protects the current work. The company owner then chooses the safe alternate, moves the queue, and confirms when normal work can return.</p>
            <div className="visual-scroll" tabIndex={0} role="region" aria-label="Four-step remote team continuity graphic; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to see all four steps.</p>
              <svg className="incident-flow continuity-flow" viewBox="0 0 920 250" role="img" aria-labelledby="continuity-flow-title continuity-flow-desc">
                <title id="continuity-flow-title">Four-step Philippines remote team continuity path</title>
                <desc id="continuity-flow-desc">The path moves from a worker report to a company decision, safe queue handoff, and return review.</desc>
                <rect width="920" height="250" rx="24" fill="#17324d"/>
                <g className="flow-card"><rect x="15" y="62" width="200" height="126" rx="18"/><text x="35" y="94">1. Report</text><text x="35" y="128">Time, place, task,</text><text x="35" y="153">and last safe action</text></g>
                <path d="M218 125h24" stroke="#8ee1cc" strokeWidth="7"/><path d="m232 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="245" y="62" width="200" height="126" rx="18"/><text x="265" y="94">2. Decide</text><text x="265" y="128">Company owner picks</text><text x="265" y="153">the approved backup</text></g>
                <path d="M448 125h24" stroke="#8ee1cc" strokeWidth="7"/><path d="m462 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="475" y="62" width="200" height="126" rx="18"/><text x="495" y="94">3. Handoff</text><text x="495" y="128">Move urgent items and</text><text x="495" y="153">record what remains</text></g>
                <path d="M678 125h24" stroke="#8ee1cc" strokeWidth="7"/><path d="m692 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="705" y="62" width="200" height="126" rx="18"/><text x="725" y="94">4. Return</text><text x="725" y="128">Reconcile work and</text><text x="725" y="153">fix the weak step</text></g>
              </svg>
            </div>
          </section>

          <section className="article-section" aria-labelledby="continuity-data-title">
            <h2 id="continuity-data-title">Keep the backup safe enough for the task</h2>
            <p className="narrative">A mobile connection may help with a low-risk status update, but that does not make every task safe on any device or network. Write which approved device, connection, and location may handle customer records or company files.</p>
            <p className="narrative">The World Bank reported that 67.3% of people in the Philippines used the internet in 2024. It also reported 7.1 fixed broadband subscriptions and 115.3 mobile cellular subscriptions per 100 people, but those national figures do not prove that one worker has a working backup at one address.</p>
            <p className="narrative">Test the actual path with the same device and tools the role will use. If sensitive work cannot be done safely on the backup, the plan should move the queue rather than push the worker onto a personal account or public connection.</p>
          </section>

          <section className="article-section" aria-labelledby="continuity-manual-title">
            <h2 id="continuity-manual-title">Control any temporary manual list</h2>
            <p className="narrative">A simple list can keep a queue visible while a work tool is down, but it can also create duplicate work and stray customer data. Use a company-owned file with only the fields needed to identify the item and its next action.</p>
            <p className="narrative">Name who may open the list, who updates the main system later, and who checks that every item moved across once. Delete or archive the temporary list under the company's normal records rule after the reconciliation is complete.</p>
            <p className="narrative">Ready.gov advises businesses to identify critical operations, suppliers, and recovery needs in an emergency plan. For a remote staffing role, that means naming the queue, the tool, the company owner, the approved alternate, and the evidence needed to restart cleanly.</p>
          </section>

          <section className="article-section" aria-labelledby="continuity-drill-title">
            <h2 id="continuity-drill-title">Run a 15-minute drill before the first outage</h2>
            <p className="narrative">Give the worker a harmless message that says the normal connection or tool is unavailable. Ask them to report the facts, reach the backup contact, and open the approved alternate without using real customer data.</p>
            <p className="narrative">Watch for small failures: an old phone number, a file that requires the missing tool, a backup worker who cannot see the queue, or a mobile connection that never completed sign-in. Those details are the point of the drill.</p>
            <p className="narrative">Record the start time, the first successful contact, and the point when the urgent item was ready to move. Fix one weak step, test it again, and keep the final plan beside the role guide.</p>
          </section>

          <Banner label="Turn the plan into a role brief" title="Set the owner, hours, and handoff rules" body="Share the first tasks, normal tools, backup contacts, and decisions that stay with your company." href="/contact" link="Contact us" />

          <section className="article-section" id="faq" aria-labelledby="continuity-faq-title">
            <p className="eyebrow">Common questions</p>
            <h2 id="continuity-faq-title">Philippines remote team continuity FAQ</h2>
            <div className="faq-list">{faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
          </section>

          <section className="related-box" aria-labelledby="continuity-related-title">
            <h2 id="continuity-related-title">Keep planning the remote role</h2>
            <ul>
              <li><a href="/blog/philippines-remote-staff-data-access-checklist">Set safe tool and data access</a></li>
              <li><a href="/blog/philippines-outsourced-support-incident-response-checklist">Write the incident reporting path</a></li>
              <li><a href="/services/customer-support">Plan the customer support lane</a></li>
              <li><a href="/services/reporting-and-qa">Add reporting and QA checks</a></li>
            </ul>
          </section>

          <section className="source-box" aria-labelledby="continuity-sources-title">
            <h2 id="continuity-sources-title">Sources</h2>
            <ol>{sources.map((source, index) => <li key={source.url}><span className="source-number">{index + 1}.</span> <a href={source.url} rel="noreferrer">{source.name}</a></li>)}</ol>
          </section>
        </div>
      </article>
    </main>
    <SafeFooter />
  </>;
}
