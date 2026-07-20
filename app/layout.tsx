import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedphilippines.com'), title: { default: 'Outsourced Philippines | Offshore outsourcing guides', template: '%s | Outsourced Philippines' }, description: 'Stealth Agents-style guides for outsourced Philippines staffing: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Philippines', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedphilippines.com', siteName: 'Outsourced Philippines', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
