'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
] as const;

export function PrimaryNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a,button:not([disabled])');
    focusable?.[0]?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function closeAndRestore() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return <>
    <nav className="links primary-links" aria-label="Primary navigation">
      {navItems.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
    </nav>
    <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-primary-navigation" onClick={() => setOpen(value => !value)}>
      <span aria-hidden="true">{open ? '×' : '☰'}</span><span>{open ? 'Close' : 'Menu'}</span>
    </button>
    <div ref={panelRef} id="mobile-primary-navigation" className="mobile-nav-panel" hidden={!open}>
      <nav aria-label="Mobile primary navigation">
        {navItems.map(item => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <button type="button" onClick={closeAndRestore}>Close menu</button>
      </nav>
    </div>
  </>;
}
