import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = { title: 'Thanks: What Happens Next', robots: { index: false, follow: false } };

export default function ThanksWhatsNextPage() { return <><Header/><main className="confirmation-page"><section className="confirmation-card"><img src="/logo.svg" alt="" className="confirmation-mark"/><p className="eyebrow">Booking complete</p><h1>Your conversation is on the calendar.</h1><p>Thank you for booking time with the Stealth Agents team. Check your inbox for the calendar confirmation and meeting details.</p><div className="confirmation-next"><h2>What happens next</h2><ol><li>Bring the recurring tasks, schedule, and tools involved in the role.</li><li>The team will clarify priorities, access limits, and review expectations.</li><li>If the service fits, you will receive clear next steps for the staffing process.</li></ol></div><img src="/brand/stealth-agents-logo.png" alt="Stealth Agents" className="confirmation-sa-logo"/><a className="btn primary" href="/">Return home</a></section></main><Footer/></>; }
