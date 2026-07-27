import { JsonLd } from '../../components';

export const remoteAccessSlug = 'philippines-remote-staff-data-access-checklist';
export const remoteAccessTitle = 'Philippines remote staff data access checklist';
export const remoteAccessDescription = 'A practical checklist for giving Philippines-based remote staff safe access to company tools, records, inboxes, and customer data.';
export const remoteAccessUrl = `https://outsourcedphilippines.com/blog/${remoteAccessSlug}`;

const sources = [
  { name: 'Verizon 2024 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/Tc4b/reports/2024-dbir-data-breach-investigations-report.pdf' },
  { name: 'FBI 2024 Internet Crime Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
  { name: 'NIST Special Publication 800-207: Zero Trust Architecture', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf' },
  { name: 'CISA: Use Strong Passwords', url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords' },
  { name: 'CISA: Recognize and Report Phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing' },
  { name: 'National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/' },
] as const;

const faqs = [
  { question: 'Should a remote staff member use a shared login?', answer: 'No. Give each person an individual account so you can see who did what and remove one person without disrupting the rest of the team. Keep shared mailboxes behind named user accounts.' },
  { question: 'What access should a new Philippines-based staff member get first?', answer: 'Start with the smallest set needed for the first approved tasks. Add access after the manager has reviewed real work and confirmed that the next tool is needed.' },
  { question: 'Who should approve sensitive changes?', answer: 'A company owner or manager should keep final approval for bank details, refunds, payroll changes, legal records, security settings, and account ownership. Remote staff can prepare the change and collect the supporting records.' },
  { question: 'How often should access be reviewed?', answer: 'Check access after the first week, when duties change, and when the role ends. A short monthly review also helps catch old permissions that no longer match the work.' },
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

export function PhilippinesRemoteAccessArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', '@id': `${remoteAccessUrl}#article`, headline: remoteAccessTitle, description: remoteAccessDescription, url: remoteAccessUrl, datePublished: '2026-07-25', dateModified: '2026-07-25', publisher: { '@type': 'Organization', name: 'Outsourced Philippines', url: 'https://outsourcedphilippines.com' }, citation: sources.map((source) => source.url), mainEntityOfPage: { '@id': `${remoteAccessUrl}#webpage` } },
      { '@type': 'FAQPage', '@id': `${remoteAccessUrl}#faq`, mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', '@id': `${remoteAccessUrl}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedphilippines.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedphilippines.com/blog' },
        { '@type': 'ListItem', position: 3, name: remoteAccessTitle, item: remoteAccessUrl },
      ] },
      { '@type': 'WebPage', '@id': `${remoteAccessUrl}#webpage`, url: remoteAccessUrl, name: remoteAccessTitle, mainEntity: { '@id': `${remoteAccessUrl}#article` }, breadcrumb: { '@id': `${remoteAccessUrl}#breadcrumb` } },
    ],
  };

  return <>
    <SafeHeader />
    <main className="article-page strict-article-page">
      <JsonLd data={schema} />
      <article data-article-marker="ph-remote-access-checklist-v1">
        <header className="article-hero">
          <div className="article-shell">
            <p className="eyebrow">Philippines staffing guide</p>
            <h1>{remoteAccessTitle}</h1>
            <p className="lead">Give a new remote staff member enough access to do the work, but keep account ownership and sensitive approvals with your company.</p>
            <p className="article-intro narrative">A safe setup starts with the task, not the person. List what the Philippines-based staff member must do, then open only the records and actions needed for those tasks.</p>
          </div>
        </header>

        <div className="article-shell article-body">
          <section className="takeaway-box" aria-labelledby="short-list-title">
            <p className="eyebrow">The short list</p>
            <h2 id="short-list-title">Five rules to set before day one</h2>
            <ul>
              <li>Use a named account for every person.</li>
              <li>Turn on multi-factor authentication wherever the tool allows it.</li>
              <li>Separate preparation work from manager approval.</li>
              <li>Keep a written list of tools, owners, and removal steps.</li>
              <li>Review real work before adding another permission.</li>
            </ul>
          </section>

          <section className="article-section" aria-labelledby="why-access-title">
            <h2 id="why-access-title">Why a short access plan matters</h2>
            <p className="narrative">Remote work does not make a person unsafe, and a Philippines location is not a security problem by itself. Trouble starts when a company gives one broad login, leaves old accounts open, or lets approval duties blur into preparation work.</p>
            <p className="narrative">The 2024 Verizon Data Breach Investigations Report reviewed 30,458 security incidents and 10,626 confirmed breaches. It found that the human element appeared in 68% of breaches, errors appeared in 28%, and third-party connections appeared in 15%.</p>
            <p className="narrative">Those figures do not measure Filipino remote staff. They show why every company needs simple controls for people, mistakes, and outside access, whether the worker sits in Manila, Cebu, or the company office.</p>
          </section>

          <div className="visual-scroll" tabIndex={0} role="region" aria-label="Security factors chart; scroll horizontally on small screens">
            <p className="scroll-cue">Swipe or use arrow keys to see the full chart.</p>
            <svg className="evidence-chart" viewBox="0 0 760 360" role="img" aria-labelledby="risk-chart-title risk-chart-desc">
              <title id="risk-chart-title">Selected factors in breaches reported by Verizon in 2024</title>
              <desc id="risk-chart-desc">Horizontal bars show human element at 68 percent, errors at 28 percent, and third-party involvement at 15 percent.</desc>
              <rect width="760" height="360" rx="24" fill="#f7f1e7"/>
              <text x="40" y="48" className="svg-title">Selected factors in confirmed breaches</text>
              <text x="40" y="78" className="svg-note">Verizon 2024 DBIR</text>
              <text x="40" y="132" className="svg-label">Human element</text><rect x="230" y="104" width="408" height="38" rx="12" fill="#e35f3e"/><text x="650" y="132" className="svg-value">68%</text>
              <text x="40" y="210" className="svg-label">Errors</text><rect x="230" y="182" width="168" height="38" rx="12" fill="#0f8f73"/><text x="410" y="210" className="svg-value">28%</text>
              <text x="40" y="288" className="svg-label">Third-party link</text><rect x="230" y="260" width="90" height="38" rx="12" fill="#7357b5"/><text x="332" y="288" className="svg-value">15%</text>
              <line x1="230" y1="318" x2="650" y2="318" stroke="#a99c8d" strokeWidth="2"/><text x="230" y="342" className="svg-axis">0%</text><text x="620" y="342" className="svg-axis">70%</text>
            </svg>
          </div>
          <p className="methods-note">Methods note: These are three separate measures from the Verizon 2024 DBIR, not parts of one total. Verizon revised its human-element measure and used incident data supplied by participating organizations; the figures describe its dataset, not every company.</p>

          <Banner label="Plan the role first" title="Match access to a real task list" body="Write the first tasks, tools, approval limits, and review owner before accounts are created." href="/services/operations-support" link="See operations support" />

          <section className="article-section" aria-labelledby="access-table-title">
            <h2 id="access-table-title">Use a task-to-access table</h2>
            <p className="narrative">A tool list is too vague on its own. Write the action the person may take, the action they may prepare, and the decision that stays with your manager.</p>
            <div className="table-scroll" tabIndex={0} role="region" aria-label="Task and access control table; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to reach the manager column.</p>
              <table>
                <thead><tr><th>Work lane</th><th>Staff member may do</th><th>Manager keeps</th><th>Proof to review</th></tr></thead>
                <tbody>
                  <tr><th>Shared inbox</th><td>Sort messages, apply labels, draft approved replies</td><td>Send legal, complaint, or exception replies</td><td>First 20 drafts and the daily exception list</td></tr>
                  <tr><th>Customer records</th><td>Update contact details and add call notes</td><td>Merge records, export full lists, change security settings</td><td>Change log and a sample of edited records</td></tr>
                  <tr><th>Invoices</th><td>Collect files, enter fields, flag missing details</td><td>Approve payment, change bank details, release funds</td><td>Source file linked to every prepared entry</td></tr>
                  <tr><th>Cloud files</th><td>Work inside a named project folder</td><td>Change ownership or share the full drive</td><td>Folder membership and recent activity</td></tr>
                  <tr><th>Support desk</th><td>Tag tickets and answer common questions from approved text</td><td>Approve refunds and policy exceptions</td><td>QA sample, escalations, and reopened tickets</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section" aria-labelledby="account-title">
            <h2 id="account-title">Create named accounts, not mystery logins</h2>
            <p className="narrative">Each remote staff member should sign in with an account tied to their name. Named accounts make the activity log useful and let your administrator remove one person's access without changing how everyone else works.</p>
            <p className="narrative">CISA advises people to use long, random, unique passwords and a password manager. Turn on multi-factor authentication too, then store recovery codes under company control rather than in a worker's personal inbox.</p>
            <p className="narrative">Keep the main owner account with your company. A Philippines-based admin support hire may schedule meetings or prepare records, but they should not become the only owner of your domain, cloud drive, customer system, or password vault.</p>
          </section>

          <section className="quote-panel" aria-labelledby="nist-quote-title">
            <p className="eyebrow">Exact source quote</p>
            <h2 id="nist-quote-title">Location alone should not create trust</h2>
            <blockquote>"Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned)."</blockquote>
            <p className="quote-source">NIST Special Publication 800-207, Zero Trust Architecture, August 2020.</p>
          </section>

          <section className="article-section" aria-labelledby="phishing-title">
            <h2 id="phishing-title">Give suspicious messages a clear exit</h2>
            <p className="narrative">The FBI's 2024 Internet Crime Report recorded 193,407 phishing or spoofing complaints during the year. That count covers reports made to the FBI, so it should not be read as every phishing attempt that occurred.</p>
            <p className="narrative">Your staff member needs one fast rule: stop, do not click, and send the message to a named manager or security contact. CISA notes that urgent language, requests for personal information, shortened links, and incorrect addresses can be warning signs.</p>
            <p className="narrative">Practice with two or three examples from your own inbox. Show where the sender address appears, how to report the message in the mail tool, and which channel to use if the mailbox itself may be unsafe.</p>
          </section>

          <Banner label="First-week setup" title="Teach one narrow work lane" body="Use examples, limited permissions, and one reviewer while the new team member learns the job." href="/blog" link="Open the onboarding checklist" />

          <section className="article-section" aria-labelledby="flow-title">
            <h2 id="flow-title">Use this four-step access path</h2>
            <p className="narrative">Do not open every tool on the first morning. Move from a written task to a limited account, review the first work, and widen access only when the next duty calls for it.</p>
            <div className="visual-scroll" tabIndex={0} role="region" aria-label="Four-step staff access graphic; scroll horizontally on small screens">
              <p className="scroll-cue">Swipe or use arrow keys to see all four steps.</p>
              <svg className="access-flow" viewBox="0 0 920 250" role="img" aria-labelledby="access-flow-title access-flow-desc">
                <title id="access-flow-title">Four-step remote staff access path</title>
                <desc id="access-flow-desc">The path moves from task definition to a named account, sample review, and a controlled access decision.</desc>
                <rect width="920" height="250" rx="24" fill="#17324d"/>
                <g className="flow-card"><rect x="35" y="62" width="180" height="126" rx="18"/><text x="55" y="94">1. Define</text><text x="55" y="128">Task, tool, limit,</text><text x="55" y="153">and review owner</text></g>
                <path d="M220 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m250 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="275" y="62" width="180" height="126" rx="18"/><text x="295" y="94">2. Open</text><text x="295" y="128">Named account and</text><text x="295" y="153">smallest permission</text></g>
                <path d="M460 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m490 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="515" y="62" width="180" height="126" rx="18"/><text x="535" y="94">3. Review</text><text x="535" y="128">Check real work and</text><text x="535" y="153">record corrections</text></g>
                <path d="M700 125h42" stroke="#8ee1cc" strokeWidth="8"/><path d="m730 112 18 13-18 13" fill="none" stroke="#8ee1cc" strokeWidth="8"/>
                <g className="flow-card"><rect x="755" y="62" width="130" height="126" rx="18"/><text x="775" y="94">4. Decide</text><text x="775" y="128">Keep, remove,</text><text x="775" y="153">or add access</text></g>
              </svg>
            </div>
          </section>

          <section className="article-section" aria-labelledby="privacy-title">
            <h2 id="privacy-title">Write down what data the role can see</h2>
            <p className="narrative">The Philippines Data Privacy Act of 2012 sets rules for processing personal information, but a short article cannot decide your legal duties. Ask qualified counsel or your privacy lead what applies to your company, industry, customers, and contracts.</p>
            <p className="narrative">For the working plan, name the data inside each tool and why the task needs it. A support role may need an order number and delivery status, but not a full customer export or unrestricted access to identity records.</p>
            <p className="narrative">Also write where files may be saved and whether local downloads are allowed. If the work can stay inside the company tool, block exports and personal storage instead of relying on a verbal promise.</p>
          </section>

          <section className="article-section" aria-labelledby="review-title">
            <h2 id="review-title">Review access when the work changes</h2>
            <p className="narrative">Check the account after the first week and after every meaningful role change. Compare the current permissions with the task list, then remove anything that no longer supports the job.</p>
            <p className="narrative">Use the same list when a staff member leaves or moves to another role. Disable sign-in, transfer company files, change shared secrets, remove active sessions, collect company devices, and record who completed each step.</p>
            <p className="narrative">A monthly review can stay small. The manager reads the account list, confirms the business owner, checks the last sign-in, and signs off on anything that remains open.</p>
          </section>

          <section className="article-section" aria-labelledby="incident-title">
            <h2 id="incident-title">Plan the first ten minutes after a mistake</h2>
            <p className="narrative">People will click the wrong thing, send a file to the wrong person, or notice an account acting strangely. The safest response is a short report made quickly, not silence while the worker tries to fix everything alone.</p>
            <p className="narrative">Give the staff member one incident contact and a backup contact who works during their Philippines shift. The report should say what happened, which account or record was involved, when it happened, and what the person has already touched.</p>
            <p className="narrative">Tell the worker which safe steps they may take without waiting, such as disconnecting a company device from the network or using the mail tool's report button. Keep account recovery, evidence removal, customer notices, and legal decisions with the people your company has named for those duties.</p>
            <p className="narrative">Run a five-minute practice before live work begins. Send a harmless sample message, ask the worker to report it, and check whether the notice reaches the right person with enough detail to act.</p>
          </section>

          <Banner label="Build the handoff" title="Turn this checklist into a role brief" body="Share the tasks, tools, working hours, and approval rules so the first access plan fits the real job." href="/contact" link="Contact us" />

          <section className="article-section" id="faq" aria-labelledby="faq-title">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">Remote staff access FAQ</h2>
            <div className="faq-list">{faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</div>
          </section>

          <section className="related-box" aria-labelledby="related-title">
            <h2 id="related-title">Keep planning the role</h2>
            <ul>
              <li><a href="/services/admin-support">See the admin support work lane</a></li>
              <li><a href="/services/reporting-and-qa">Plan reporting and QA checks</a></li>
              <li><a href="/blog">Choose the first tasks to hand off</a></li>
              <li><a href="/blog/outsourced-Philippines-staffing-provider-questions">Ask a staffing provider about access and ownership</a></li>
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
