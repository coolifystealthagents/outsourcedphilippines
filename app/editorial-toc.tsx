'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type TocItem = { id: string; label: string };
export type EditorialFamily = 'Blog' | 'Research';
export type SidebarLink = { href: string; label: string };
export type EditorialSidebarData = {
  service: SidebarLink;
  resources: SidebarLink[];
  sources: SidebarLink;
  cta: SidebarLink;
};

const topicSidebars: Record<string, EditorialSidebarData> = {
  security: {
    service: { href: '/services/reporting-and-qa', label: 'Reporting and QA controls' },
    resources: [
      { href: '/blog/philippines-remote-staff-data-access-checklist', label: 'Remote staff access checklist' },
      { href: '/blog/philippines-outsourced-support-incident-response-checklist', label: 'Incident response checklist' },
    ],
    sources: { href: '#sources-title', label: 'Review this article’s sources' },
    cta: { href: '/contact-us?topic=security-role', label: 'Plan a controlled role' },
  },
  finance: {
    service: { href: '/services/bookkeeping-support', label: 'Bookkeeping support' },
    resources: [
      { href: '/blog/philippines-outsourced-staff-payment-change-verification-checklist', label: 'Payment change verification' },
      { href: '/research', label: 'Finance operations research' },
    ],
    sources: { href: '#sources-title', label: 'Check the financial sources' },
    cta: { href: '/contact-us?topic=finance-role', label: 'Scope a finance role' },
  },
  customer: {
    service: { href: '/services/customer-support', label: 'Customer support' },
    resources: [
      { href: '/blog/philippines-outsourced-customer-support-account-recovery-checklist', label: 'Account recovery checklist' },
      { href: '/blog/philippines-customer-complaint-escalation-packet', label: 'Complaint escalation packet' },
    ],
    sources: { href: '#sources-title', label: 'Review the support sources' },
    cta: { href: '/contact-us?topic=customer-support', label: 'Plan a support team' },
  },
  people: {
    service: { href: '/services/admin-support', label: 'Admin support' },
    resources: [
      { href: '/blog/top-50-virtual-assistant-companies', label: 'Compare virtual assistant companies' },
      { href: '/blog/outsourced-Philippines-staffing-onboarding-checklist', label: 'Staff onboarding checklist' },
    ],
    sources: { href: '#source-note-title', label: 'See the comparison notes' },
    cta: { href: '/contact-us?topic=assistant-role', label: 'Plan an assistant role' },
  },
  operations: {
    service: { href: '/services/operations-support', label: 'Operations support' },
    resources: [
      { href: '/blog/philippines-remote-team-business-continuity-checklist', label: 'Business continuity checklist' },
      { href: '/blog/philippines-remote-team-quality-assurance-scorecard', label: 'Remote team QA scorecard' },
    ],
    sources: { href: '#sources-title', label: 'Review this guide’s sources' },
    cta: { href: '/contact-us?topic=operations-role', label: 'Plan an operations role' },
  },
  research: {
    service: { href: '/services/reporting-and-qa', label: 'Reporting and QA' },
    resources: [
      { href: '/research', label: 'Browse related research' },
      { href: '/blog', label: 'Use a practical implementation guide' },
    ],
    sources: { href: '#sources', label: 'Inspect the study sources' },
    cta: { href: '/contact-us?topic=research', label: 'Apply this research' },
  },
};

export function resolveEditorialSidebar(title: string, slug: string, family: EditorialFamily): EditorialSidebarData {
  const value = `${title} ${slug}`.toLowerCase();
  const topic = family === 'Research' ? 'research'
    : /payment|invoice|bookkeep|payroll|finance|bank|chargeback/.test(value) ? 'finance'
    : /customer|support|account-recovery|complaint|service/.test(value) ? 'customer'
    : /access|identity|security|password|incident|recovery/.test(value) ? 'security'
    : /assistant|recruit|candidate|training|onboard|executive|admin/.test(value) ? 'people'
    : 'operations';
  return topicSidebars[topic];
}

function TocLinks({ items, active }: { items: TocItem[]; active: string }) {
  return <ol className="editorial-toc-list">{items.map((item) => <li key={item.id}>
    <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>
  </li>)}</ol>;
}

function safeDisplayDate(value?: string) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) return null;
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
}

type EditorialTocProps = {
  items?: TocItem[];
  auto?: boolean;
  title: string;
  slug: string;
  family: EditorialFamily;
  published: string;
  readMinutes: number;
  sidebar?: EditorialSidebarData;
};

export function EditorialToc({ items, auto = false, title, slug, family, published, readMinutes, sidebar }: EditorialTocProps) {
  const [sections, setSections] = useState<TocItem[]>(items ?? []);
  const [active, setActive] = useState(items?.[0]?.id ?? '');

  useEffect(() => {
    const article = document.querySelector('main article');
    if (!article) return;
    const headings = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2'));
    const seen = new Set<string>();
    const discovered = headings.map((heading, index) => {
      let id = heading.id || `article-section-${index + 1}`;
      while (seen.has(id)) id = `${id}-${index + 1}`;
      seen.add(id);
      heading.id = id;
      return { id, label: heading.textContent?.trim() || `Section ${index + 1}` };
    });
    const navigation = auto || !items?.length ? discovered : items;
    if (auto || !items?.length) setSections(discovered);
    setActive(navigation[0]?.id ?? '');
    const ids = new Set(navigation.map((entry) => entry.id));
    const observed = headings.filter((heading) => ids.has(heading.id));

    // Keep a stable first item above the article, the last passed heading while
    // reading, and the final item at the document bottom.
    const updateActive = () => {
      if (!observed.length) return;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActive(observed[observed.length - 1].id);
        return;
      }
      const activationLine = 132;
      let current = observed[0];
      for (const heading of observed) {
        if (heading.getBoundingClientRect().top <= activationLine) current = heading;
        else break;
      }
      setActive(current.id);
    };
    updateActive();
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const heading = visible[0]?.target as HTMLHeadingElement | undefined;
      if (heading?.id) setActive(heading.id);
    }, { rootMargin: '-112px 0px -68% 0px', threshold: [0, 1] });
    observed.forEach((heading) => observer.observe(heading));
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [auto, items]);

  if (!sections.length) return null;
  const date = safeDisplayDate(published);
  const links = sidebar ?? resolveEditorialSidebar(title, slug, family);
  return <>
    <details className="editorial-mobile-toc">
      <summary>On this page <span aria-hidden="true">+</span></summary>
      <nav aria-label="Table of contents"><TocLinks items={sections} active={active} /></nav>
      <p className="editorial-mobile-meta">Outsourced Philippines{date ? ` · ${date}` : ''} · {readMinutes} min read</p>
    </details>
    <aside className="editorial-sidebar" aria-label={`Article information for ${title}`}>
      <div className="editorial-sidebar-scroll">
        <p className="editorial-sidebar-label">On this page</p>
        <nav aria-label="Table of contents"><TocLinks items={sections} active={active} /></nav>
        <div className="editorial-sidebar-block">
          <b>Published by Outsourced Philippines</b>
          {date && <time dateTime={published}>{date}</time>}
          <span>{readMinutes} min read</span>
          <p>Resources selected for “{title}”.</p>
        </div>
        <div className="editorial-sidebar-block">
          <b>Related service</b>
          <a href={links.service.href}>{links.service.label}</a>
          <b>Related resources</b>
          {links.resources.map((resource) => <a href={resource.href} key={resource.href}>{resource.label}</a>)}
          <b>Sources</b>
          <a href={links.sources.href}>{links.sources.label}</a>
        </div>
        <a className="editorial-sidebar-cta" href={links.cta.href}>{links.cta.label}</a>
      </div>
    </aside>
  </>;
}

export function EditorialAutoNavigator({ title, slug, family = 'Blog', published, readMinutes, sidebar }: Omit<EditorialTocProps, 'items' | 'auto'>) {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;
    const mount = document.createElement('div');
    mount.className = 'editorial-nav-mount';
    main.classList.add('editorial-enhanced');
    main.insertBefore(mount, main.querySelector('article'));
    setTarget(mount);
    return () => { mount.remove(); main.classList.remove('editorial-enhanced'); };
  }, []);
  return target ? createPortal(<div className="editorial-auto-nav"><EditorialToc auto title={title} slug={slug} family={family} published={published} readMinutes={readMinutes} sidebar={sidebar} /></div>, target) : null;
}
