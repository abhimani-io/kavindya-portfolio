import Link from 'next/link';

export const metadata = {
  title: 'About — Kavindya | IT & Software Engineering Student',
  description: 'Learn about Kavindya — an IT and Software Engineering student from Sri Lanka, driven by curiosity and grounded in CS fundamentals.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="about-page-heading">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label" style={{justifyContent:'center'}}>My Story</span>
          <h1 className="page-hero__title animate-fade-in-up" id="about-page-heading">
            Driven by creativity.<br />
            <span className="text-gradient">Grounded in code.</span>
          </h1>
        </div>
      </section>

      {/* Bio + Sidebar */}
      <section className="section section--white" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about-layout">

            {/* ── Main Bio ── */}
            <div>
              <span className="section-label">About Me</span>
              <h2 className="section__title" id="bio-heading" style={{textAlign:'left',marginBottom:'2rem'}}>
                The person behind the code
              </h2>

              <p className="about-bio__para">
                I am currently completing my Higher National Diploma in Information Technology (HNDIT) at SLIATE, built on
                a strong foundation from my A/L Technological Stream in ICT. While my coursework gives me a solid
                grounding in core IT principles, my best learning happens hands-on — building full-stack apps, designing
                interfaces, and exploring new development tools.
              </p>
              <p className="about-bio__para">
                My interest in technology grew alongside my passion for fine arts. Combining creative visual thinking with
                technical problem-solving naturally led me to explore UI/UX design, web and mobile development, and system
                logic. I believe in being adaptable — skilled enough to contribute across software development, quality
                assurance, business analysis, or design.
              </p>
              <p className="about-bio__para">
                Outside of formal studies, I enjoy drawing and painting, exploring new design trends in Figma, testing new
                developer tools, and documenting my learning process to share with others.
              </p>

              <div style={{marginTop:'3rem'}}>
                <span className="section-label">Certifications</span>
                <h3 className="section__title" style={{fontSize:'1.5rem',textAlign:'left',marginBottom:'1.5rem'}}>What I&apos;ve earned</h3>
                {[
                  { title:'Introduction to Cybersecurity', org:'Cisco Networking Academy', year:'2024', badge:'badge--blue' },
                  { title:'Introduction to Data Science',  org:'Cisco Networking Academy', year:'2024', badge:'badge--teal' },
                  { title:'Introduction to IoT',           org:'Cisco Networking Academy', year:'2024', badge:'badge--purple' },
                ].map(c => (
                  <div key={c.title} style={{display:'flex',alignItems:'center',gap:'1rem',padding:'1rem',background:'var(--color-bg)',borderRadius:'0.75rem',border:'1px solid var(--color-border)',marginBottom:'0.75rem'}}>
                    <div style={{width:'40px',height:'40px',borderRadius:'0.5rem',background:'#EFF6FF',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                    <div style={{flex:1}}>
                      <p style={{fontWeight:700,color:'var(--color-primary)',fontSize:'var(--text-sm)'}}>{c.title}</p>
                      <p style={{fontSize:'var(--text-xs)',color:'var(--color-muted)'}}>{c.org}</p>
                    </div>
                    <span className={`badge ${c.badge}`}>{c.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="about-sidebar">

              {/* Quick Facts */}
              <div className="about-sidebar-card">
                <p className="about-sidebar-card__title">Quick Facts</p>
                {[
                  { label:'Location', value:'Sri Lanka 🇱🇰', icon:'📍' },
                  { label:'Degree',   value:'HNDIT — SLIATE', icon:'🎓' },
                  { label:'Focus',    value:'Software Eng. & UI/UX', icon:'💻' },
                  { label:'Available', value:'Internship Ready',     icon:'✅' },
                  { label:'Email',    value:'kavyaabhimani@gmail.com', icon:'📧' },
                ].map(f => (
                  <div key={f.label} className="about-quick-fact">
                    <div className="about-quick-fact__icon" style={{fontSize:'1.1em',background:'transparent'}}>{f.icon}</div>
                    <div className="about-quick-fact__text">
                      <strong>{f.label}</strong>
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="about-sidebar-card">
                <p className="about-sidebar-card__title">Education</p>
                {[
                  { degree:'Higher National Diploma in IT (HNDIT)', school:'SLIATE, Sri Lanka', year:'2023 – Present' },
                  { degree:'A/L Technological Stream (ICT)', school:'Sri Lanka', year:'2020 – 2022' },
                ].map(e => (
                  <div key={e.degree} className="edu-item">
                    <p className="edu-item__degree">{e.degree}</p>
                    <p className="edu-item__school">{e.school}</p>
                    <p className="edu-item__year">{e.year}</p>
                  </div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="about-sidebar-card">
                <p className="about-sidebar-card__title">Core Skills</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                  {['Full-Stack Dev','UI/UX Design','Mobile (Flutter)','Quality Assurance','Git & GitHub','Firebase','React','Node.js'].map(s => (
                    <span key={s} className="badge badge--slate">{s}</span>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn btn--primary" style={{width:'100%',justifyContent:'center',padding:'1rem'}} id="about-contact-cta">
                Get in Touch →
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
