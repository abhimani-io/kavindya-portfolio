'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/',         label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about',    label: 'About' },
    { href: '/contact',  label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav__inner">
          <Link href="/" className="nav__logo">Kavindya Abhimani</Link>

          <ul className="nav__links" role="list">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={`nav__link${isActive(l.href) ? ' active' : ''}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="nav__resume-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume (PDF)
            </a>
            <button
              className={`nav__hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav__mobile${menuOpen ? ' open' : ''}`} role="menu">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav__mobile-link${isActive(l.href) ? ' active' : ''}`}
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener" className="nav__mobile-resume" role="menuitem">
          ↓ Download Resume (PDF)
        </a>
      </div>
    </header>
  );
}
