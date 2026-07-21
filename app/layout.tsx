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
  return <html lang="en"><body>{children}</body></html>;
}
