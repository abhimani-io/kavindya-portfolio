'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef(null);
  const roleRef = useRef(null);

  /* Network canvas animation */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    function init() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = [];
      const n = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#2563EB';
      ctx.strokeStyle = '#2563EB';
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.globalAlpha = 1 - dist / 100;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    const onResize = () => { init(); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    const roles = [
      'Software Engineer',
      'Full-Stack Developer',
      'UI/UX Designer',
      'Cloud Enthusiast',
    ];
    let ri = 0, ci = 0, deleting = false;
    let timerId;

    function type() {
      const cur = roles[ri];
      el.textContent = deleting ? cur.substring(0, ci--) : cur.substring(0, ci++);
      let delay = deleting ? 55 : 100;
      if (!deleting && ci === cur.length + 1) { delay = 2000; deleting = true; }
      else if (deleting && ci === 0)          { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      timerId = setTimeout(type, delay);
    }
    timerId = setTimeout(type, 800);
    return () => clearTimeout(timerId);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      {/* Background glows */}
      <div className="hero__glow hero__glow--blue"  />
      <div className="hero__glow hero__glow--teal"  />
      <div className="hero__glow hero__glow--purple"/>

      {/* Network canvas */}
      <canvas ref={canvasRef} id="network-canvas" aria-hidden="true" />

      {/* Right social sidebar */}
      <aside className="hero__social-sidebar" aria-label="Social links">
        <span className="hero__follow-label">Follow Me</span>
        <div className="hero__follow-line" />
        <a href="https://github.com/abhimani-io" target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/kavindya-abhimani-10a155405/" target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
        <a href="mailto:kavyaabhimani@gmail.com" className="hero__social-icon" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </a>
        <a href="https://wa.me/94764547973" target="_blank" rel="noopener noreferrer" className="hero__social-icon" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" /></svg>
        </a>
      </aside>

      {/* Centered hero content */}
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="hero__center">

          {/* — Hello — */}
          <div className="hero__greeting animate-fade-in-up">Hello</div>

          {/* Main heading */}
          <h1 className="hero__title animate-fade-in-up animate-delay-1" id="hero-heading">
            I&apos;m <span className="hero__name">Kavindya,</span>
          </h1>

          {/* Typewriter role */}
          <p className="hero__role animate-fade-in-up animate-delay-2">
            <span ref={roleRef} />
            <span className="typewriter-cursor">|</span>
          </p>

          {/* Status badge */}
          <div className="hero__status-badge animate-fade-in-up animate-delay-3">
            <span className="hero__status-dot" />
            Open to Internship Opportunities
          </div>

          {/* Profile photo with geometric shape */}
          <div className="hero__photo-wrap animate-fade-in-up animate-delay-3">
            {/* Geometric diamond SVG shape behind photo */}
            <svg className="hero__diamond" viewBox="0 0 260 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M130 10 L250 130 L130 270 L10 130 Z"
                fill="url(#diamondGrad)"
                opacity="0.85"
              />
              <path
                d="M130 10 L250 130 L130 270 L10 130 Z"
                fill="none"
                stroke="url(#diamondStroke)"
                strokeWidth="2"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#2563EB" stopOpacity="0.25" />
                  <stop offset="50%"  stopColor="#8B5CF6" stopOpacity="0.20" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="diamondStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>

            <Image
              src="/images/profile_transparent_v2.png"
              alt="Kavindya - Profile Photo"
              className="hero__photo"
              width={260}
              height={320}
              priority
            />
          </div>

          {/* CTA Buttons */}
          <div className="hero__ctas animate-fade-in-up animate-delay-4">
            <Link href="/contact" className="btn--hero-primary" id="hero-cta-contact">
              Contact Me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="btn--hero-secondary" id="hero-cta-resume">
              My Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero__stats animate-fade-in-up animate-delay-5">
            {[
              { num: '3+', label: 'Projects Built' },
              { num: '3+', label: 'Certifications' },
              { num: '2',  label: 'Years Coding' },
              { num: '100%', label: 'Remote Ready' },
            ].map(s => (
              <div key={s.label} className="hero__stat-card">
                <span className="hero__stat-number">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
