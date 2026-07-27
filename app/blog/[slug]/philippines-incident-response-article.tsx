import { JsonLd } from '../../components';

export const incidentResponseSlug = 'philippines-outsourced-support-incident-response-checklist';
export const incidentResponseTitle = 'Philippines outsourced support incident response checklist';
export const incidentResponseDescription = 'A practical incident response checklist for companies working with Philippines-based outsourced support staff.';
export const incidentResponseUrl = `https://outsourcedphilippines.com/blog/${incidentResponseSlug}`;

const sources = [
  { name: 'Verizon 2025 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf' },
  { name: 'NIST SP 800-61r3: Incident Response Recommendations and Considerations for Cybersecurity Risk Management', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf' },
  { name: 'FBI 2024 Internet Crime Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
  { name: 'CISA: Incident Response Plan Basics', url: 'https://www.cisa.gov/resources-tools/resources/incident-response-plan-irp-basics' },
  { name: 'Philippine National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/' },
  { name: 'Philippine National Privacy Commission Circular 16-03: Personal Data Breach Management', url: 'https://privacy.gov.ph/wp-content/uploads/2016/12/NPC-Circular-16-03-Personal-Data-Breach-Management.pdf' },
] as const;

const faqs = [
  { question: 'What should an outsourced support worker report first?', answer: 'Report what happened, the time, the account or record involved, and the last action taken. Include a screenshot or ticket ID only if doing so will not expose more sensitive data.' },
  { question: 'Should the support worker investigate the incident alone?', answer: 'No. The worker can preserve basic facts and take pre-approved safe steps, but the incident owner should direct account changes, evidence collection, restoration, and outside notices.' },
  { question: 'Does a Philippines-based worker decide whether the event is a reportable data breach?', answer: 'No. The worker should report the facts quickly to the company contact. The company privacy lead, data protection officer, or counsel should assess duties under the law and the contracts that apply.' },
  { question: 'How often should the team practice the plan?', answer: 'Run a short drill when a person starts and after the tools or contacts change. A quarterly five-minute test is a useful house rule, not a legal standard.' },
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

export function PhilippinesIncidentResponseArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', '@id': `${incidentResponseUrl}#article`, headline: incidentResponseTitle, description: incidentResponseDescription, url: incidentResponseUrl, datePublished: '2026-07-27', dateModified: '2026-07-27', publisher: { '@type': 'Organization', name: 'Outsourced Philippines', url: 'https://outsourcedphilippines.com' }, citation: sources.map((source) => source.url), mainEntityOfPage: { '@id': `${incidentResponseUrl}#webpage` } },
      { '@type': 'FAQPage', '@id': `${incidentResponseUrl}#faq`, mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', '@id': `${incidentResponseUrl}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedphilippines.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedphilippines.com/blog' },
        { '@type': 'ListItem', position: 3, name: incidentResponseTitle, item: incidentResponseUrl },
      ] },
      { '@type': 'WebPage', '@id': `${incidentResponseUrl}#webpage`, url: incidentResponseUrl, name: incidentResponseTitle, mainEntity: { '@id': `${incidentResponseUrl}#article` }, breadcrumb: { '@id': `${incidentResponseUrl}#breadcrumb` } },
    ],
  };

  return <>
    <SafeHeader />
    <main className="article-page strict-article-page">
      <JsonLd data={schema} />
      <article data-article-marker="ph-outsourced-support-incident-response-v1">
        <header className="article-hero">
          <div className="article-shell">
            <p className="eyebrow">Philippines staffing guide</p>
            <h1>{incidentResponseTitle}</h1>
            <p className="lead">Give support staff a fast way to report trouble without asking them to make security, legal, or customer-notice decisions.</p>
            <p className="article-intro narrative">A good plan tells a Philippines-based support worker whom to contact, what facts to save, and which safe actions they may take. It also names the company manager who can disable accounts, restore systems, and decide what happens next.</p>
          </div>
        </header>

        <div className="article-shell article-body">
          <section className="takeaway-box" aria-labelledby="short-list-title">
            <p className="eyebrow">The short list</p>
            <h2 id="short-list-title">Five rules for the first report</h2>
            <ul>
              <li>Stop the task if continuing could make the problem worse.</li>
              <li>Use one named incident contact and one backup contact.</li>
              <li>Save the time, account, ticket, and last action taken.</li>
              <li>Do not delete messages, logs, files, or browser history.</li>
              <li>Leave legal decisions and outside notices with the company.</li>
            </ul>
          </section>

          <section className="article-section" aria-labelledby="why-title">
            <h2 id="why-title">Why the support handoff needs its own plan</h2>
            <p className="narrative">Support staff often see the first sign of a problem. A worker may notice a strange login, a customer message about an account change, a file sent to the wrong person, or a ticket that suddenly contains private records.</p>
            <p className="narrative">The 2025 Verizon Data Breach Investigations Report analyzed 22,052 security incidents and 12,195 confirmed breaches from 139 countries. Its dataset is global and does not measure Filipino workers, staffing firms, or support teams.</p>
            <p className="narrative">Verizon reported human involvement in 60% of breaches, third-party involvement in 30%, and exploitation of vulnerabilities as an initial access route in 20%. These figures overlap in places and should not be added together, but they show why people, outside access, and exposed systems all belong in the response plan.</p>
          </section>

          <div className="visual-scroll" tabIndex={0} role="region" aria-label="2025 global breach factors chart; scroll horizontally on small screens">
            <p className="scroll-cue">Swipe or use arrow keys to see the full chart.</p>
            <svg className="evidence-chart" viewBox="0 0 760 360" role="img" aria-labelledby="incident-chart-title incident-chart-desc">
              <title id="incident-chart-title">Selected factors in breaches analyzed by Verizon in 2025</title>
              <desc id="incident-chart-desc">Horizontal bars show human involvement at 60 percent, third-party involvement at 30 percent, and vulnerability exploitation as an initial access route at 20 percent.</desc>
              <rect width="760" height="360" rx="24" fill="#f7f1e7"/>
              <text x="40" y="48" className="svg-title">Selected factors in confirmed breaches</text>
              <text x="40" y="78" className="svg-note">Verizon 2025 DBIR, global contributor dataset</text>
              <text x="40" y="132" className="svg-label">Human involvement</text><rect x="270" y="104" width="360" height="38" rx="12" fill="#e35f3e"/><text x="642" y="132" className="svg-value">60%</text>
              <text x="40" y="210" className="svg-label">Third-party involvement</text><rect x="270" y="182" width="180" height="38" rx="12" fill="#0f8f73"/><text x="462" y="210" className="svg-value">30%</text>
              <text x="40" y="288" className="svg-label">Vulnerability route</text><rect x="270" y="260" width="120" height="38" rx="12" fill="#7357b5"/><text x="402" y="288" className="svg-value">20%</text>
              <line x1="270" y1="318" x2="650" y2="318" stroke="#a99c8d" strokeWidth="2"/><text x="270" y="342" className="svg-axis">0%</text><text x="620" y="342" className="svg-axis">60%</text>
            </svg>
          </div>
          <p className="methods-note">Methods note: Verizon based the 2025 DBIR on incident records from its team, global contributors, and public disclosures. The three measures describe different parts of that dataset, and the report does not isolate Philippines-based outsourced support.</p>

          <Banner label="Set the access rules" title="Match every account to a task" body="Use named accounts, small permissions, and a manager-owned removal list before live support begins." href="/blog/philippines-remote-staff-data-access-checklist" link="Open the access checklist" />

          <section className="article-section" aria-labelledby="matrix-title">
            <h2 id="matrix-title">Use a first-action matrix</h2>
            <p className="narrative">A worker should not have to invent a response while a customer is waiting. Write the safe first action, the company owner, the evidence to keep, and the action that is off limits.</p>
            <div className="table-scroll" tabIndex={0} role="region" aria-label="Incident first-action matrix; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to reach the last column.</p>
              <table>
                <thead><tr><th>Signal</th><th>Support worker does</th><th>Company owner does</th><th>Keep this evidence</th><th>Do not do</th></tr></thead>
                <tbody>
                  <tr><th>Strange login</th><td>Stop using the account and contact the incident owner</td><td>Review sessions, disable access, and start recovery</td><td>Time, alert, account name, and device</td><td>Reset the main owner account without approval</td></tr>
                  <tr><th>Wrong recipient</th><td>Report the message and identify the file or record</td><td>Assess exposure and direct the next contact</td><td>Recipient, time, subject, and item sent</td><td>Delete the sent item or ask the recipient to hide it</td></tr>
                  <tr><th>Suspicious link</th><td>Stop, report it, and disconnect the device if the plan allows</td><td>Check the device, account, and related messages</td><td>Sender, URL text, screenshot, and click status</td><td>Open the link again to test it</td></tr>
                  <tr><th>Customer account claim</th><td>Freeze the support task and collect the ticket facts</td><td>Verify identity and decide on account action</td><td>Ticket ID, claimed change, and account history</td><td>Promise a result or disclose private account details</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section" aria-labelledby="owner-title">
            <h2 id="owner-title">Name the people who can make the hard calls</h2>
            <p className="narrative">The support worker reports the event, but the company owns the response. Name one incident lead, one technical contact, one privacy contact, and one backup who can answer during the worker's Philippines shift.</p>
            <p className="narrative">NIST SP 800-61r3 says leaders may have authority over high-impact actions such as shutting down or rebuilding important services. The same guide says incident handlers verify events, collect and analyze evidence, set priorities, and act to limit damage.</p>
            <p className="narrative">A small company may give several of those jobs to one person. That is fine as long as the worker has a name, a reachable channel, and a backup rather than a vague instruction to tell the team.</p>
          </section>

          <section className="quote-panel" aria-labelledby="nist-quote-title">
            <p className="eyebrow">Exact source quote</p>
            <h2 id="nist-quote-title">Keep response inside normal risk work</h2>
            <blockquote>"Regardless of the incident response life cycle framework or model used, every organization should take incident response into consideration throughout their cybersecurity risk management activities."</blockquote>
            <p className="quote-source">NIST SP 800-61r3, April 2025, by Alex Nelson, Sanjay Rekhi, Murugiah Souppaya, and Karen Scarfone.</p>
          </section>

          <section className="article-section" aria-labelledby="message-title">
            <h2 id="message-title">Give staff a copy-ready alert</h2>
            <p className="narrative">A fixed message helps when the worker is worried about saying the wrong thing. Keep it in the support handbook and pin it in the channel used for urgent reports.</p>
            <div className="script-box">
              <p><strong>Incident alert:</strong> I stopped work at [Philippines time and company time]. I saw [short description] in [account, ticket, or tool]. The last action I took was [action]. I saved [ticket ID, screenshot, or alert] and have not deleted or changed anything. Please confirm the next safe step.</p>
            </div>
            <p className="narrative">Do not ask the worker to paste passwords, full customer records, or private files into a chat message. The incident lead can direct a safer transfer if the evidence itself contains sensitive data.</p>
          </section>

          <Banner label="Review real support work" title="Build checks into the role" body="Use a small sample, an issue log, and one manager who can turn mistakes into clear corrections." href="/services/reporting-and-qa" link="See reporting and QA" />

          <section className="article-section" aria-labelledby="path-title">
            <h2 id="path-title">Use a four-step response path</h2>
            <p className="narrative">The worker's first job is to report clean facts, not to finish the whole investigation. The company can then contain the problem, recover the service, and review what should change.</p>
            <div className="visual-scroll" tabIndex={0} role="region" aria-label="Four-step incident response graphic; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to see all four steps.</p>
              <svg className="incident-flow" viewBox="0 0 920 250" role="img" aria-labelledby="incident-flow-title incident-flow-desc">
                <title id="incident-flow-title">Four-step outsourced support incident path</title>
                <desc id="incident-flow-desc">The path moves from a worker report to company containment, recovery, and review.</desc>
                <rect width="920" height="250" rx="24" fill="#17324d"/>
                <g className="flow-card"><rect x="35" y="62" width="180" height="126" rx="18"/><text x="55" y="94">1. Report</text><text x="55" y="128">Stop, note the time,</text><text x="55" y="153">and save basic facts</text></g>
                <path d="M220 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m250 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="275" y="62" width="180" height="126" rx="18"/><text x="295" y="94">2. Contain</text><text x="295" y="128">Company lead limits</text><text x="295" y="153">access and spread</text></g>
                <path d="M460 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m490 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="515" y="62" width="180" height="126" rx="18"/><text x="535" y="94">3. Recover</text><text x="535" y="128">Restore safely and</text><text x="535" y="153">check normal service</text></g>
                <path d="M700 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m730 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="755" y="62" width="130" height="126" rx="18"/><text x="775" y="94">4. Review</text><text x="775" y="128">Fix the plan and</text><text x="775" y="153">practice again</text></g>
              </svg>
            </div>
          </section>

          <section className="article-section" aria-labelledby="preserve-title">
            <h2 id="preserve-title">Preserve facts without making the damage bigger</h2>
            <p className="narrative">The FBI's 2024 Internet Crime Report recorded 193,407 phishing or spoofing complaints. That is a count of reports received by the FBI, not every message sent worldwide and not a measure of Philippines-based staff.</p>
            <p className="narrative">If the worker clicked, sent, downloaded, or changed something, ask for a plain account of what happened. Do not punish fast reporting, because fear can turn a small event into hours of silence and lost evidence.</p>
            <p className="narrative">CISA's incident response material recommends preparing contact details, roles, and communication plans before an event. Your local plan should also say which approved actions a worker may take, such as using the mail tool's report button or disconnecting a company device from the network.</p>
          </section>

          <section className="article-section" aria-labelledby="privacy-title">
            <h2 id="privacy-title">Send privacy questions to the right owner</h2>
            <p className="narrative">The Philippines Data Privacy Act and National Privacy Commission rules may matter when personal information is involved. This guide cannot decide whether an event is a personal data breach or whether a notice is required for a particular company.</p>
            <p className="narrative">The worker should report the people, records, system, time, and actions they can identify without guessing. The company data protection officer, privacy lead, or qualified counsel should assess the law, contracts, affected people, and any notice duty.</p>
            <p className="narrative">Talent location does not prove where customer data, cloud logs, backups, administrators, or other vendors are located. Map those systems separately so the incident owner knows whom to call outside the Philippines staffing team.</p>
          </section>

          <section className="article-section" aria-labelledby="drill-title">
            <h2 id="drill-title">Run a five-minute drill before live work</h2>
            <p className="narrative">Send a harmless sample alert and ask the worker to use the incident message. Check whether it reaches the primary contact and backup with the correct time, account, and ticket details.</p>
            <p className="narrative">Then test one missing contact or unavailable tool. The point is to find a broken phone number, unclear owner, or blocked channel before a real customer record is at risk.</p>
            <p className="narrative">Record the result in one line and fix the plan the same day. Repeat the drill after a tool change, manager change, or major role change, and use a quarterly test only as a company house rule.</p>
          </section>

          <Banner label="Turn the plan into a role brief" title="Set the limits before hiring" body="Share the tasks, tools, working hours, incident contacts, and manager-only decisions for the role." href="/contact" link="Contact us" />

          <section className="article-section" id="faq" aria-labelledby="faq-title">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">Outsourced support incident response FAQ</h2>
            <div className="faq-list">{faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
          </section>

          <section className="related-box" aria-labelledby="related-title">
            <h2 id="related-title">Keep planning the support role</h2>
            <ul>
              <li><a href="/blog/philippines-remote-staff-data-access-checklist">Set safe account access</a></li>
              <li><a href="/services/customer-support">Plan the customer support lane</a></li>
              <li><a href="/services/reporting-and-qa">Add reporting and QA checks</a></li>
              <li><a href="/blog/outsourced-Philippines-staffing-provider-questions">Ask a provider about ownership and escalation</a></li>
            </ul>
          </section>

          <section className="source-box" aria-labelledby="sources-title">
            <h2 id="sources-title">Sources</h2>
            <ol>{sources.map((source, index) => <li key={source.url}><span className="source-number">{index + 1}.</span> <a href={source.url} rel="noreferrer">{source.name}</a></li>)}</ol>
          </section>
        </div>
      </article>
    </main>
    <SafeFooter />
  </>;
}
