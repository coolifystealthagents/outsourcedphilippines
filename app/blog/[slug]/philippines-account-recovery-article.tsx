import { JsonLd } from '../../components';

export const accountRecoverySlug = 'philippines-outsourced-customer-support-account-recovery-checklist';
export const accountRecoveryTitle = 'Philippines outsourced customer support account recovery checklist';
export const accountRecoveryDescription = 'A practical account recovery checklist for Philippines-based customer support teams, with clear identity checks, manager approvals, notifications, and safe handoffs.';
export const accountRecoveryUrl = `https://outsourcedphilippines.com/blog/${accountRecoverySlug}`;

const sources = [
  { name: 'NIST Special Publication 800-63B: Digital Identity Guidelines, Authentication and Authenticator Management', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html#account-recovery' },
  { name: 'FBI Internet Crime Complaint Center: 2024 IC3 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
  { name: 'FTC: Reported fraud losses in 2024, March 10, 2025', url: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024' },
  { name: 'CISA Secure Our World: Turn on multifactor authentication', url: 'https://www.cisa.gov/secure-our-world/turn-mfa' },
  { name: 'FTC Consumer Advice: What to know about identity theft', url: 'https://consumer.ftc.gov/articles/what-know-about-identity-theft' },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
] as const;

const faqs = [
  { question: 'Can a Philippines-based support worker approve an account recovery request?', answer: 'They can collect facts, follow the approved checks, and prepare the case. A named company owner should approve sensitive recovery actions, changes to sign-in methods, and access to protected customer data.' },
  { question: 'Is a matching email address enough to prove the customer owns the account?', answer: 'No. The email account may be compromised, and the request may come from the person trying to take over the account. Use checks tied to records that existed before the request arrived.' },
  { question: 'Should support ask for a password or one-time sign-in code?', answer: 'No. Staff should never ask a customer to share a password, full recovery code, or one-time sign-in code. Use the company recovery process and collect only the minimum facts needed for the case.' },
  { question: 'What should happen after recovery is approved?', answer: 'Send a notice through the contact routes already stored on the account, end older sessions when the product allows it, record the decision, and give the customer a clear way to report an action they did not request.' },
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

export function PhilippinesAccountRecoveryArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', '@id': `${accountRecoveryUrl}#article`, headline: accountRecoveryTitle, description: accountRecoveryDescription, url: accountRecoveryUrl, datePublished: '2026-07-28', dateModified: '2026-07-28', publisher: { '@type': 'Organization', name: 'Outsourced Philippines', url: 'https://outsourcedphilippines.com' }, citation: sources.map((source) => source.url), mainEntityOfPage: { '@id': `${accountRecoveryUrl}#webpage` } },
      { '@type': 'FAQPage', '@id': `${accountRecoveryUrl}#faq`, mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', '@id': `${accountRecoveryUrl}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedphilippines.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedphilippines.com/blog' },
        { '@type': 'ListItem', position: 3, name: accountRecoveryTitle, item: accountRecoveryUrl },
      ] },
      { '@type': 'WebPage', '@id': `${accountRecoveryUrl}#webpage`, url: accountRecoveryUrl, name: accountRecoveryTitle, mainEntity: { '@id': `${accountRecoveryUrl}#article` }, breadcrumb: { '@id': `${accountRecoveryUrl}#breadcrumb` } },
    ],
  };

  return <>
    <SafeHeader />
    <main className="article-page strict-article-page">
      <JsonLd data={schema} />
      <article data-article-marker="ph-account-recovery-support-v1">
        <header className="article-hero">
          <div className="article-shell">
            <p className="eyebrow">Philippines staffing guide</p>
            <h1>{accountRecoveryTitle}</h1>
            <p className="lead">Give Philippines-based support staff a clear way to help a locked-out customer without letting one message, one caller, or one worker take control of the account.</p>
            <p className="article-intro narrative">Account recovery is a sensitive support task because the person asking for help may be the customer or someone trying to become the customer. The safest plan gives the Filipino support worker a fixed check, a firm stop point, and a named company owner for approval.</p>
          </div>
        </header>

        <div className="article-shell article-body">
          <section className="takeaway-box" aria-labelledby="recovery-short-list-title">
            <p className="eyebrow">The short list</p>
            <h2 id="recovery-short-list-title">Five rules for a recovery request</h2>
            <ul>
              <li>Keep the request in a protected support queue.</li>
              <li>Use facts stored before the customer lost access.</li>
              <li>Never ask for a password or one-time sign-in code.</li>
              <li>Send sensitive cases to a named company owner.</li>
              <li>Notify the customer through contact routes already on file.</li>
            </ul>
          </section>

          <section className="article-section" aria-labelledby="recovery-risk-title">
            <h2 id="recovery-risk-title">Treat recovery as a new access decision</h2>
            <p className="narrative">A person who knows an order number, old address, or recent ticket may still be an impostor. Those details can appear in stolen mailboxes, copied support threads, leaked files, or public posts.</p>
            <p className="narrative">The FBI Internet Crime Complaint Center recorded 193,407 phishing or spoofing complaints in 2024. The same report recorded 64,882 personal data breach complaints, 21,403 identity theft complaints, and 982 SIM swap complaints.</p>
            <p className="narrative">Those counts come from reports sent to a U.S. federal system. They do not measure account attacks handled by Filipino workers, and they do not show the share of recovery requests that are dishonest.</p>
          </section>

          <div className="visual-scroll" tabIndex={0} role="region" aria-label="FBI 2024 complaint indicators related to account recovery risk; scroll horizontally on small screens">
            <p className="scroll-cue">Swipe or use arrow keys to see the full chart.</p>
            <svg className="evidence-chart" viewBox="0 0 780 430" role="img" aria-labelledby="recovery-chart-title recovery-chart-desc">
              <title id="recovery-chart-title">Selected FBI IC3 complaint indicators reported for 2024</title>
              <desc id="recovery-chart-desc">Horizontal bars show 193,407 phishing or spoofing complaints, 64,882 personal data breach complaints, 21,403 identity theft complaints, and 982 SIM swap complaints.</desc>
              <rect width="780" height="430" rx="24" fill="#f7f1e7"/>
              <text x="40" y="48" className="svg-title">Selected FBI IC3 indicators</text>
              <text x="40" y="78" className="svg-note">Complaint counts reported to IC3 for 2024</text>
              <text x="40" y="132" className="svg-label">Phishing or spoofing</text><rect x="350" y="104" width="350" height="38" rx="12" fill="#e35f3e"/><text x="576" y="132" className="svg-value" style={{ fill: '#ffffff' }}>193,407</text>
              <text x="40" y="208" className="svg-label">Personal data breach</text><rect x="350" y="180" width="203" height="38" rx="12" fill="#0f8f73"/><text x="568" y="208" className="svg-value">64,882</text>
              <text x="40" y="284" className="svg-label">Identity theft</text><rect x="350" y="256" width="117" height="38" rx="12" fill="#7357b5"/><text x="482" y="284" className="svg-value">21,403</text>
              <text x="40" y="360" className="svg-label">SIM swap</text><rect x="350" y="332" width="50" height="38" rx="12" fill="#d3a72f"/><text x="415" y="360" className="svg-value">982</text>
              <line x1="350" y1="392" x2="700" y2="392" stroke="#a99c8d" strokeWidth="2"/><text x="350" y="417" className="svg-axis">Smallest bar widened for legibility</text><text x="632" y="417" className="svg-axis">2024</text>
            </svg>
          </div>
          <p className="methods-note">Methods note: The chart uses four complaint counts from the FBI IC3 2024 annual report. The bars use a square-root scale, with the smallest bar widened so its label stays readable; the categories can overlap and must not be added or treated as Philippines outsourcing figures.</p>

          <Banner label="Protect the worker account first" title="Set safe access before support begins" body="Give each Philippines-based support worker a named account, small permissions, and a manager-owned removal path." href="/blog/philippines-remote-staff-data-access-checklist" link="Open the access checklist" />

          <section className="article-section" aria-labelledby="recovery-table-title">
            <h2 id="recovery-table-title">Give the team one decision table</h2>
            <p className="narrative">The worker should know what can move forward, what needs more proof, and what must stop. Put the table inside the support guide and review it with real examples before the worker handles recovery cases alone.</p>
            <div className="table-scroll" tabIndex={0} role="region" aria-label="Customer account recovery decision table; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to reach the last column.</p>
              <table>
                <thead><tr><th>Request state</th><th>Worker can do</th><th>Worker must not do</th><th>Company owner decides</th><th>Record to keep</th></tr></thead>
                <tbody>
                  <tr><th>Known customer lost one sign-in method</th><td>Open the recovery case and use approved checks</td><td>Ask for a password or sign-in code</td><td>Whether sensitive access can be restored</td><td>Checks used, result, owner, and time</td></tr>
                  <tr><th>Contact details changed recently</th><td>Hold the case and flag the change</td><td>Send a new link to the changed contact</td><td>Which older contact route to use</td><td>Old route, new route, and review note</td></tr>
                  <tr><th>Caller wants MFA removed</th><td>Collect the reason and open an urgent review</td><td>Disable protection during the call</td><td>Identity proof and replacement method</td><td>Request, evidence, approval, and notice</td></tr>
                  <tr><th>High-impact account or unusual request</th><td>Preserve the case and alert the owner</td><td>Reveal protected account facts</td><td>Extra checks, hold time, and next action</td><td>Risk signs and the final decision</td></tr>
                  <tr><th>Customer rejects the recovery notice</th><td>Start the incident handoff</td><td>Debate the customer or alter old notes</td><td>Containment and investigation steps</td><td>Notice, reply, session action, and owner</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section" aria-labelledby="recovery-proof-title">
            <h2 id="recovery-proof-title">Use facts that existed before the request</h2>
            <p className="narrative">A recovery check should rely on approved records, not clues supplied by the person asking for access. A stored contact route, earlier account event, recovery code, or repeated identity check is stronger than a new phone number inside the ticket.</p>
            <p className="narrative">Do not build a quiz from private account details and then reveal whether each guess was correct. The worker can collect the answer, compare it through the approved tool, and use a neutral response that does not expose more data.</p>
            <p className="narrative">If the company cannot complete the required check, the case stays on hold. A support worker should never lower the proof simply because the customer sounds upset, mentions a deadline, or asks for a supervisor.</p>
          </section>

          <section className="quote-panel" aria-labelledby="recovery-quote-title">
            <p className="eyebrow">Exact source quote</p>
            <h2 id="recovery-quote-title">Tell the customer when recovery happens</h2>
            <blockquote>"An account recovery event always causes one or more notifications to be sent to the subscriber to help detect the fraudulent use of account recovery."</blockquote>
            <p className="quote-source">NIST Special Publication 800-63B, account recovery section, page updated August 26, 2025.</p>
          </section>

          <section className="article-section" aria-labelledby="recovery-script-title">
            <h2 id="recovery-script-title">Give the worker a calm script</h2>
            <p className="narrative">A fixed reply keeps the case clear when a customer is stressed. It also protects the worker from being pushed into an action that sits outside the support role.</p>
            <div className="script-box">
              <p><strong>Recovery reply:</strong> I can help open the account recovery check. I will not ask for your password or a one-time sign-in code. We need to compare this request with information already held on the account, and some changes need approval from our account owner. We will send a notice through the contact routes already on file when the review is complete.</p>
            </div>
            <p className="narrative">The worker should not promise that access will return during the same chat or call. They can give the case number, explain the next review step, and say where an approved notice will arrive.</p>
          </section>

          <Banner label="Keep the support lane clear" title="Write the escalation line" body="Let Philippines-based support staff collect and route the case while your company keeps sensitive access decisions with named owners." href="/services/customer-support" link="Plan customer support" />

          <section className="article-section" aria-labelledby="recovery-path-title">
            <h2 id="recovery-path-title">Use a five-step recovery handoff</h2>
            <p className="narrative">The path starts with a protected case and ends with a separate notice. No single message or support worker should be able to request, check, approve, and hide the same recovery action.</p>
            <div className="visual-scroll" tabIndex={0} role="region" aria-label="Five-step customer account recovery handoff graphic; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to see all five steps.</p>
              <svg className="incident-flow account-recovery-flow" viewBox="0 0 1130 250" role="img" aria-labelledby="recovery-flow-title recovery-flow-desc">
                <title id="recovery-flow-title">Five-step Philippines support account recovery handoff</title>
                <desc id="recovery-flow-desc">The path moves from opening a protected case to checking old records, sending a sensitive case to an owner, restoring approved access, and notifying the customer.</desc>
                <rect width="1130" height="250" rx="24" fill="#17324d"/>
                <g className="flow-card"><rect x="15" y="62" width="190" height="126" rx="18"/><text x="35" y="94">1. Open</text><text x="35" y="128">Put the request in</text><text x="35" y="153">the protected queue</text></g>
                <path d="M208 125h22" stroke="#8ee1cc" strokeWidth="7"/><path d="m220 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="235" y="62" width="190" height="126" rx="18"/><text x="255" y="94">2. Check</text><text x="255" y="128">Use facts already</text><text x="255" y="153">held on the account</text></g>
                <path d="M428 125h22" stroke="#8ee1cc" strokeWidth="7"/><path d="m440 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="455" y="62" width="190" height="126" rx="18"/><text x="475" y="94">3. Review</text><text x="475" y="128">Owner handles</text><text x="475" y="153">sensitive decisions</text></g>
                <path d="M648 125h22" stroke="#8ee1cc" strokeWidth="7"/><path d="m660 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="675" y="62" width="190" height="126" rx="18"/><text x="695" y="94">4. Restore</text><text x="695" y="128">Bind approved access</text><text x="695" y="153">and end old sessions</text></g>
                <path d="M868 125h22" stroke="#8ee1cc" strokeWidth="7"/><path d="m880 113 16 12-16 12" fill="none" stroke="#8ee1cc" strokeWidth="7"/>
                <g className="flow-card"><rect x="895" y="62" width="220" height="126" rx="18"/><text x="915" y="94">5. Notify</text><text x="915" y="128">Tell the customer on</text><text x="915" y="153">stored contact routes</text></g>
              </svg>
            </div>
          </section>

          <section className="article-section" aria-labelledby="recovery-mfa-title">
            <h2 id="recovery-mfa-title">Do not turn recovery into an MFA bypass</h2>
            <p className="narrative">A customer may say the old phone is gone, the email is locked, or the sign-in app no longer works. The answer is a recovery path with its own checks, not a quick removal of every protection on the account.</p>
            <p className="narrative">CISA tells organizations and users to turn on multifactor authentication because it adds protection when a password is compromised. The support guide should name which recovery actions the worker can prepare and which actions need a security or account owner.</p>
            <p className="narrative">When the product allows more than one sign-in method, ask the account owner to plan backups before a lockout happens. Keep recovery codes out of tickets and chat, and never let a worker copy them into a support note.</p>
          </section>

          <section className="article-section" aria-labelledby="recovery-notice-title">
            <h2 id="recovery-notice-title">Send the notice somewhere the requester did not choose</h2>
            <p className="narrative">After an approved recovery, send a notice to the email address, phone number, or other route that was stored before the request. If several routes already exist, use more than one for a sensitive account.</p>
            <p className="narrative">The notice should say what happened, when it happened, and how to report an action the customer did not request. It should not include a password, full recovery code, or private evidence used in the check.</p>
            <p className="narrative">The FTC received fraud reports from 2.6 million consumers for 2024 and reported $12.5 billion in total losses. It also reported $789 million in government imposter scam losses for that year, but those U.S. consumer figures are context, not a forecast for any support team or Philippines operation.</p>
          </section>

          <section className="article-section" aria-labelledby="recovery-qa-title">
            <h2 id="recovery-qa-title">Review recovery cases without copying private data</h2>
            <p className="narrative">A weekly check can sample the case path without putting customer secrets into a new spreadsheet. Review whether the worker used the approved queue, followed the right checks, reached the correct owner, and sent the required notice.</p>
            <p className="narrative">Record the case number and the control result, not the full identity evidence. If a case failed the process, fix the guide or access setup before asking the worker to handle more sensitive requests.</p>
            <p className="narrative">NIST Cybersecurity Framework 2.0 gives organizations a way to organize cyber risk work around governance, protection, detection, response, and recovery. A small support team can use the same plain idea: name the owner, protect the account, spot warning signs, act on the case, and learn from the review.</p>
          </section>

          <section className="article-section" aria-labelledby="recovery-drill-title">
            <h2 id="recovery-drill-title">Run a short recovery drill</h2>
            <p className="narrative">Create a harmless sample ticket in which the requester knows one true fact but asks to change the contact route and remove MFA. Ask the worker to open the case, avoid revealing account facts, hold the sensitive action, and send the case to the named owner.</p>
            <p className="narrative">Then check whether the owner can find the old contact route and whether the final notice goes to the right place. Fix any missing owner, vague stop rule, open permission, or unsafe field before the live queue depends on it.</p>
            <p className="narrative">Repeat the drill after the product, support tool, account owner, or customer verification process changes. The goal is a calm handoff that still works when the requester is angry, rushed, or convincing.</p>
          </section>

          <Banner label="Turn the checklist into a role brief" title="Name the queue, checks, and owners" body="Share the support lane, stop rules, approval owners, and customer notice path before a Philippines-based worker starts." href="/contact" link="Contact us" />

          <section className="article-section" id="faq" aria-labelledby="recovery-faq-title">
            <p className="eyebrow">Common questions</p>
            <h2 id="recovery-faq-title">Customer account recovery FAQ</h2>
            <div className="faq-list">{faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
          </section>

          <section className="related-box" aria-labelledby="recovery-related-title">
            <h2 id="recovery-related-title">Keep planning the support controls</h2>
            <ul>
              <li><a href="/blog/philippines-remote-staff-data-access-checklist">Set safe worker account access</a></li>
              <li><a href="/blog/philippines-outsourced-support-incident-response-checklist">Write the incident reporting path</a></li>
              <li><a href="/services/customer-support">Plan the customer support role</a></li>
              <li><a href="/services/reporting-and-qa">Add support QA checks</a></li>
            </ul>
          </section>

          <section className="source-box" aria-labelledby="recovery-sources-title">
            <h2 id="recovery-sources-title">Sources</h2>
            <ol>{sources.map((source, index) => <li key={source.url}><span className="source-number">{index + 1}.</span> <a href={source.url} rel="noreferrer">{source.name}</a></li>)}</ol>
          </section>
        </div>
      </article>
    </main>
    <SafeFooter />
  </>;
}
