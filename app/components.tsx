import * as data from './data';
const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || String(item));
const getSlug = (item: any) => item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const domain = site.domain || 'OutsourcedPhilippines.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
export function LogoMark() { return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand || domain}</span></span>; }
export function Header() { return <header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><nav className="links" aria-label="Main navigation"><a href="/#roles">Role notes</a><a href="/#process">How it works</a><a href="/blog">Guides</a><a href="/contact">Contact</a></nav><a className="btn nav-cta" href="/contact">Request a role brief</a></div></header>; }
export function Footer() { return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><p>Practical role planning for companies hiring Filipino talent from the Philippines.</p><p className="footer-note">This is an independent informational website. We work only with Philippines-based talent. Requests may be routed to a Philippines staffing team or service partner for follow-up.</p></div><div><h3>Role notes</h3><div className="footer-links">{footerItems.map((item: any) => <a href={`/services/${getSlug(item)}`} key={getSlug(item)}>{getTitle(item)}</a>)}</div></div><div><h3>Site</h3><div className="footer-links"><a href="/contact">Contact</a><a href="/blog">Guides</a><a href="/privacy">Privacy policy</a><a href="/terms">Terms and conditions</a><a href="/cancellation-policy">Cancellation policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>Philippines-only talent sourcing</span></div></footer>; }
export function CTA() { return <section className="final-cta"><p className="eyebrow">Start with the work</p><h2>Write the role before you hire Filipino talent.</h2><p>Share the tasks, tools, hours, and approval limits. We will turn them into a practical first brief.</p><a className="btn primary" href="/contact">Request a role brief</a></section>; }
