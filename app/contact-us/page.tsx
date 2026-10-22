import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { services, site } from '../data';
import { stealthAgentsReviews } from '../reviews';
import StandardContactForm from './StandardContactForm';
import styles from './contact.module.css';

const canonical = 'https://outsourcedphilippines.com/contact-us';
const description = 'Talk with Stealth Agents about a managed Philippines-based team, including role scope, recruiting, onboarding, and ongoing support.';
export const metadata: Metadata = { title: 'Contact Outsourced Philippines | Plan Your Team', description, alternates: { canonical }, robots: { index: true, follow: true }, openGraph: { title: 'Plan Your Philippines Outsourcing Team', description, url: canonical, type: 'website', images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', alt: site.alt }] } };

export default function ContactUsPage() { return <><Header/><main className={styles.page}>
  <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.heroGrid}>
    <div className={styles.copy}><p className={styles.kicker}>Managed Philippines staffing</p><h1 id="contact-title">Tell us what your team needs to get done.</h1><p className={styles.lead}>Share the role, schedule, and systems involved. Stealth Agents can help recruit, onboard, and support a dedicated virtual assistant around a clearly defined scope.</p><ul><li>A practical role and task conversation</li><li>Clear access, review, and escalation boundaries</li><li>No obligation to move forward</li></ul>
      <section className={styles.reviews} aria-labelledby="review-heading"><div className={styles.reviewHead}><div className={styles.stars} aria-label="Five out of five stars">★★★★★</div><h2 id="review-heading">Stealth Agents reviews</h2></div><div className={styles.marquee} tabIndex={0}><div className={styles.reviewTrack}>{stealthAgentsReviews.map(review => <article key={review.name}><blockquote>“{review.quote}”</blockquote><p><strong>{review.name}</strong><span>{review.role}</span></p></article>)}</div></div></section>
    </div>
    <div id="consultation" className={styles.form}><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
  </div></section>
  <section className={styles.team}><div className={styles.teamGrid}><figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1600" height="1067" alt="Stealth Agents team in Bacolod"/><figcaption>Official team, Bacolod</figcaption></figure><div><p className={styles.kicker}>Your managed-service partner</p><img className={styles.saLogo} src="/brand/stealth-agents-logo.png" alt="Stealth Agents"/><h2>Support that continues after the match.</h2><p>Stealth Agents is the managed-service partner behind your staffing conversation. The team helps translate your requirements into a role, identify suitable talent, coordinate onboarding, and provide an ongoing point of contact as the work develops.</p><p>You retain ownership of business decisions, permissions, and approvals. The managed model adds recruiting and operational support around the dedicated assistant working with your company.</p></div></div></section>
  <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Start with a defined lane</p><h2>Useful roles begin with repeatable work and a clear reviewer.</h2><div className={styles.cards}>{services.map((service)=><article key={service.slug}><h3>{service.title}</h3><p>{service.desc}</p></article>)}</div></div></section>
  <section className={styles.close}><div><p className={styles.kicker}>Ready to define the role?</p><h2>Start your staffing conversation.</h2><p>Complete the form with the work, schedule, and team context you already know.</p></div><a href="#consultation">Go to contact form</a></section>
</main><Footer/></>; }
