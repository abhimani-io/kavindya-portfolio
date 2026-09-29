import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <Link href="/" className="footer__logo">Kavindya Abhimani</Link>

        <nav className="footer__links" aria-label="Footer navigation">
          <Link href="/"         className="footer__link">Home</Link>
          <Link href="/projects" className="footer__link">Projects</Link>
          <Link href="/about"    className="footer__link">About</Link>
          <Link href="/contact"  className="footer__link">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="footer__link">Resume ↗</a>
        </nav>

        <div className="footer__social" aria-label="Social links">
          <a href="mailto:kavyaabhimani@gmail.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Email" id="footer-email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/kavindya-abhimani-10a155405/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn" id="footer-linkedin">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://github.com/abhimani-io" className="footer__social-link" aria-label="GitHub" id="footer-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
        </div>

        <div className="footer__divider" />
        <p className="footer__copy">Designed &amp; Built by Kavindya © 2026</p>
      </div>
    </footer>
  );
}
