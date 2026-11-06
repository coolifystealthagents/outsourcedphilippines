/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Content-Security-Policy', value: [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self' https://leads.stealthagents.com",
    "script-src https://databull.stealthagents.us 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https:",
    "connect-src https://databull.stealthagents.us 'self' https://acrtracking.stealthagents.us https://leads.stealthagents.com https://cloudflareinsights.com",
    "frame-src 'self' https://go.oncehub.com",
    "upgrade-insecure-requests",
  ].join('; ') },
];

const nextConfig = {
  async redirects() {
    return [
      { source: '/pricing', destination: '/contact-us', permanent: true },
      {"source": "/research/oph02-cross-team-escalation-01", "destination": "/research/oph02-cross-team-escalation-research-01", "permanent": true},
      {"source": "/research/oph02-vendor-onboarding-02", "destination": "/research/oph02-vendor-onboarding-research-02", "permanent": true},
      {"source": "/research/oph02-capacity-plan-03", "destination": "/research/oph02-capacity-plan-research-03", "permanent": true},
      {"source": "/services/philippines-outsourcing", "destination": "/services", "permanent": true},
      {"source": "/services/reporting-and-qa", "destination": "/services/operations-support", "permanent": true},
    ];
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
export default nextConfig;
