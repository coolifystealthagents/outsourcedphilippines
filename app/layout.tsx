import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './article.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcedphilippines.com'),
  title: { default: 'Outsourced Philippines | Plan roles for Filipino talent', template: '%s | Outsourced Philippines' },
  description: 'Independent role-planning guides for companies hiring Filipino talent from the Philippines. Map tasks, access, working hours, and quality checks before you hire.',
  openGraph: {
    title: 'Outsourced Philippines',
    description: 'Practical role planning for companies hiring Filipino talent from the Philippines.',
    url: 'https://outsourcedphilippines.com',
    siteName: 'Outsourced Philippines',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'outsourced-philippines',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
