'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kavyaabhimani@gmail.com');
    } catch {
      const el = document.createElement('textarea');
      el.value = 'kavyaabhimani@gmail.com';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    const mailto = `mailto:kavyaabhimani@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
          <h1 className="page-hero__title animate-fade-in-up" id="contact-heading">
            Have an open<br />
            <span className="text-gradient">intern role?</span><br />
            Let&apos;s talk.
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section--white" aria-label="Contact information and form">
        <div className="container">
          <div className="contact-layout">

            {/* ── Left Info ── */}
            <div className="contact-info">
              <span className="section-label">Reach Out</span>
              <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', lineHeight: 1.75 }}>
                I&apos;m actively looking for internship opportunities in software engineering, UI/UX, or QA.
                I respond to all messages within 24 hours.
              </p>

              {/* Email Box */}
              <div className="contact-email-box" id="email-section">
                <p className="contact-email-box__label">Direct Email</p>
                <div className="contact-email-box__row">
                  <span className="contact-email-box__address" id="email-display">kavyaabhimani@gmail.com</span>
                  <button
                    className={`copy-btn${copied ? ' copied' : ''}`}
                    id="copy-email-btn"
                    onClick={copyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>✓ Copied!</>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials" aria-label="Social media links">
                {[
                  {
                    href: 'https://wa.me/94764547973',
                    label: 'WhatsApp', sublabel: 'Message on',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" /></svg>,
                  },
                  {
                    href: 'mailto:kavyaabhimani@gmail.com',
                    label: 'Email', sublabel: 'Send',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                  },
                  {
                    href: 'https://www.linkedin.com/in/kavindya-abhimani-10a155405/',
                    label: 'LinkedIn', sublabel: 'Connect on',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
                  },
                  {
                    href: 'https://github.com/abhimani-io',
                    label: 'GitHub', sublabel: 'Follow on',
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>,
                  },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label={s.label}>
                    <span className="contact-social-link__icon">{s.icon}</span>
                    <span>
                      <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontWeight: 500 }}>{s.sublabel}</span>
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right Form ── */}
            <div className="contact-form">
              <h2 className="contact-form__title">Send me a message</h2>
              {sent && (
                <div style={{ padding: '1rem', background: '#DCFCE7', border: '1px solid #BBF7D0', borderRadius: '0.75rem', marginBottom: '1.5rem', color: '#166534', fontWeight: 600 }}>
                  ✓ Your email client should open shortly!
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input id="name" className="form-input" type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input id="subject" className="form-input" type="text" placeholder="Internship Opportunity / Collaboration..." value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Tell me about the opportunity or what you'd like to discuss..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={6} />
                </div>
                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
