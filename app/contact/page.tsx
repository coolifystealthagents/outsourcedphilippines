import { Header, Footer, JsonLd } from '../components';
import { site, leadQuestions } from '../data';

export const metadata = {
  title: `Request a role brief | ${site.brand}`,
  description: 'Share the work, tools, hours, and approval limits for a role filled by Filipino talent from the Philippines.',
};

export default function Contact() {
  const siteUrl = 'https://outsourcedphilippines.com';
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Request a role brief from ${site.brand}`, url: `${siteUrl}/contact` };
  return <><Header /><main className="contact-page"><JsonLd data={schema} /><section className="contact-hero"><div className="container contact-grid"><div><p className="eyebrow light">Role intake</p><h1>Tell us what keeps landing back on your desk.</h1><p className="lead">We will use the details to shape a starting role for Filipino talent from the Philippines. Keep it rough. A real task list is more useful than a polished job description.</p><div className="intake-note"><b>Independent routing note</b><p>This site does not employ staff directly. Your request may be shared with a Philippines staffing partner that can discuss the role with you.</p></div></div><div className="brief-preview"><span>Useful details</span><ul>{leadQuestions.slice(0, 4).map((q) => <li key={q}>{q}</li>)}</ul></div></div></section><section className="container form-wrap"><form className="role-form" action="/thank-you"><div className="form-head"><span>Role brief / start</span><h2>Put the first lane on paper.</h2></div><div className="form-grid"><label>Name<input required name="name" /></label><label>Work email<input required name="email" type="email" /></label><label className="wide">Company or website<input name="company" /></label><label className="wide">What work should a Filipino team member handle first?<textarea required name="tasks" rows={6} /></label><label>Working hours or time zone<input name="hours" /></label><label>Who reviews the first two weeks?<input name="reviewer" /></label></div><button className="btn primary" type="submit">Send the role brief</button><p className="form-disclosure">By sending this form, you agree that the request can be routed to a Philippines staffing partner for follow-up. The talent pool is limited to the Philippines.</p></form></section></main><Footer /></>;
}
