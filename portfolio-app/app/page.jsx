import Hero from './components/Hero';
import Link from 'next/link';

const toolkit = [
  {
    icon: 'blue',
    title: 'Languages',
    svgD: 'M16 18 22 12 16 6M8 6 2 12 8 18',
    type: 'polylines',
    badges: [
      { text: 'Java',       cls: 'badge--orange' },
      { text: 'C#',         cls: 'badge--purple' },
      { text: 'Python',     cls: 'badge--blue' },
      { text: 'JavaScript', cls: 'badge--orange' },
      { text: 'Dart',       cls: 'badge--teal' },
      { text: 'SQL',        cls: 'badge--slate' },
    ],
  },
  {
    icon: 'teal',
    title: 'Frontend',
    type: 'rect-line',
    badges: [
      { text: 'HTML5',      cls: 'badge--orange' },
      { text: 'CSS3',       cls: 'badge--blue' },
      { text: 'React',      cls: 'badge--teal' },
    ],
  },
  {
    icon: 'slate',
    title: 'Backend',
    type: 'server',
    badges: [
      { text: 'Node.js',    cls: 'badge--green' },
      { text: 'Firebase',   cls: 'badge--orange' },
    ],
  },
  {
    icon: 'blue',
    title: 'Mobile',
    type: 'mobile',
    badges: [
      { text: 'Flutter',    cls: 'badge--blue' },
    ],
  },
  {
    icon: 'teal',
    title: 'Database',
    type: 'db',
    badges: [
      { text: 'MySQL',              cls: 'badge--teal' },
      { text: 'Firebase Firestore', cls: 'badge--orange' },
    ],
  },
  {
    icon: 'slate',
    title: 'Tools',
    type: 'tools',
    badges: [
      { text: 'Git',            cls: 'badge--slate' },
      { text: 'GitHub',         cls: 'badge--slate' },
      { text: 'VS Code',        cls: 'badge--purple' },
      { text: 'Android Studio', cls: 'badge--green' },
      { text: 'Figma',          cls: 'badge--purple' },
      { text: 'WordPress',      cls: 'badge--blue' },
    ],
  },
];

function ToolkitIcon({ type }) {
  switch (type) {
    case 'polylines':
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
    case 'rect-line':
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>;
    case 'server':
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>;
    case 'mobile':
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>;
    case 'db':
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
    default:
      return <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>;
  }
}

const projects = [
  {
    id: 'project-1',
    num: '01',
    title: 'AR Art Visualization and Marketplace App',
    badges: ['Flutter','Dart','Firebase','Android','AR'],
    badgeCls: 'badge--blue',
    summary: 'A mobile application that enables users to visualize artwork in their own space before purchase, while providing sellers with a complete set of tools to manage an online art business.',
    impact: 'Implemented image-based AR visualization overlaying artwork onto a live camera feed for realistic previewing on real walls.',
    detail: '/projects#project-1',
    source: 'https://github.com/abhimani-io/ArtSpace-Preview',
  },
  {
    id: 'project-2',
    num: '02',
    title: 'Personal Art Portfolio & Business Website',
    badges: ['HTML5','CSS3','JavaScript','Netlify'],
    badgeCls: 'badge--blue',
    summary: 'Developed and deployed a custom portfolio website on Netlify to showcase personal artwork, providing a centralized platform for customers to explore pieces and contact me directly.',
    impact: 'Established a professional online presence to attract potential clients and streamline commission requests.',
    demo: 'https://startling-alfajores-4783ea.netlify.app/',
    source: 'https://github.com/abhimani-io/art-portfolio',
  },
  {
    id: 'project-3',
    num: '03',
    title: 'Study Planner & Productivity Web App',
    badges: ['React','Node.js','PostgreSQL','Docker'],
    badgeCls: 'badge--blue',
    summary: 'A web-based study planner targeting university students — features task scheduling, Pomodoro timer, progress tracking, and calendar view.',
    impact: 'Maintained >80% code coverage across 40+ automated tests using Jest and Supertest.',
    detail: '/projects#project-3',
    source: '#',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── TOOLKIT ── */}
      <section className="section" id="toolkit" aria-labelledby="toolkit-heading">
        <div className="container">
          <div className="toolkit-banner reveal">
            <div className="toolkit-banner__bg"><div className="toolkit-banner__glow" /></div>
            <div className="toolkit-banner__content">
              <div className="toolkit-banner__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
                  <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
                </svg>
              </div>
              <div className="toolkit-banner__text">
                <span className="toolkit-banner__label">System Capabilities</span>
                <h2 className="toolkit-banner__title" id="toolkit-heading">Technical Toolkit</h2>
              </div>
              <div className="toolkit-banner__visual">
                {[100,60,90,40,80].map((h,i)=>(
                  <div key={i} className="toolkit-banner__bar" style={{height:`${h}%`,animationDelay:`${i*0.15}s`}} />
                ))}
              </div>
            </div>

            <div className="toolkit__grid" style={{marginTop:'40px',position:'relative',zIndex:2}}>
              {toolkit.map((cat, i) => (
                <div key={cat.title} className={`toolkit__category reveal${i%3===1?' reveal--delay-1':i%3===2?' reveal--delay-2':''}`}>
                  <div className={`toolkit__cat-icon toolkit__cat-icon--${cat.icon}`}>
                    <ToolkitIcon type={cat.type} />
                  </div>
                  <p className="toolkit__cat-title">{cat.title}</p>
                  <div className="toolkit__badges">
                    {cat.badges.map(b => <span key={b.text} className={`badge ${b.cls}`}>{b.text}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section section--alt" id="projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="projects-banner reveal">
            <div className="projects-banner__bg"><div className="projects-banner__glow" /></div>
            <div className="projects-banner__content" style={{justifyContent:'center',textAlign:'center'}}>
              <div className="projects-banner__text" style={{flexGrow:0}}>
                <h2 className="projects-banner__title" id="projects-heading">Things I&apos;ve Built</h2>
              </div>
            </div>

            <div style={{marginTop:'40px',position:'relative',zIndex:2}}>
              <div className="projects-grid">
                {projects.map((p, i) => (
                  <article key={p.id} className={`project-card reveal${i===1?' reveal--delay-1':i===2?' reveal--delay-2':''}`} aria-label={p.title}>
                    <div className="project-card__header">
                      <div className="project-card__icon">
                        {p.id === 'project-1'
                          ? <img src="/images/ar-project-icon.png" alt="AR Project Icon" className="project-icon-img" />
                          : <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        }
                      </div>
                      <span className="project-card__number">{p.num}</span>
                    </div>
                    <div className="project-card__body">
                      <h3 className="project-card__title">{p.title}</h3>
                      <div className="project-card__badges">
                        {p.badges.map(b => <span key={b} className={`badge ${p.badgeCls}`}>{b}</span>)}
                      </div>
                      <p className="project-card__summary">{p.summary}</p>
                      <div className="project-card__impact">
                        <span className="project-card__impact-icon">
                          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </span>
                        <p className="project-card__impact-text">{p.impact}</p>
                      </div>
                    </div>
                    <div className="project-card__footer">
                      {p.detail && <Link href={p.detail} className="btn btn--primary" id={`proj${p.num}-detail`}>View Details ↗</Link>}
                      {p.demo   && <a href={p.demo}   target="_blank" rel="noopener" className="btn btn--primary"   id={`proj${p.num}-demo`}>Live Demo ↗</a>}
                      {p.source && <a href={p.source} target="_blank" rel="noopener" className="btn btn--secondary" id={`proj${p.num}-github`}>Source Code ↗</a>}
                    </div>
                  </article>
                ))}
              </div>
              <div style={{textAlign:'center',marginTop:'3rem'}} className="reveal">
                <Link href="/projects" className="btn btn--primary btn--lg" id="home-view-all">View All Projects →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY HIRE ME ── */}
      <section className="why" id="value" aria-labelledby="why-heading">
        <div className="why__glow why__glow--blue" /><div className="why__glow why__glow--teal" />
        <div className="container">
          <div className="section__header">
            <h2 className="section__title" id="why-heading">What I bring to your engineering team</h2>
            <p className="section__subtitle" style={{color:'#94A3B8'}}>Skills and habits that make me a low-friction, high-value internship hire.</p>
          </div>
          <div className="why__grid">
            {[
              { icon:'blue', title:'Fast Learner, Low Friction', text:"Reads docs carefully, asks smart questions, and picks up new stacks quickly. I've independently learned React, Docker, and PostgreSQL outside of coursework — and shipped projects with them within weeks." },
              { icon:'teal', title:'Production-Minded Habits', text:'Writes self-documenting code, uses Git branching strategies (feature → dev → main), and maintains clean commit histories. Every project ships with a proper README and setup guide.' },
              { icon:'white', title:'Strong Team Communicator', text:'Communicates clearly during standups, values constructive code reviews, and documents decisions so the whole team stays aligned. Comfortable with async communication tools like Slack, Notion, and Linear.' },
            ].map((c,i) => (
              <div key={c.title} className={`why__card reveal${i===1?' reveal--delay-1':i===2?' reveal--delay-2':''}`}>
                <div className={`why__icon why__icon--${c.icon}`}>
                  {i===0 && <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                  {i===1 && <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>}
                  {i===2 && <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
                </div>
                <h3 className="why__card-title">{c.title}</h3>
                <p className="why__card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container" style={{textAlign:'center',maxWidth:'640px'}}>
          <span className="section-label" style={{justifyContent:'center'}}>Let&apos;s Connect</span>
          <h2 className="section__title" id="cta-heading">Have an open intern role?</h2>
          <p className="section__subtitle" style={{marginBottom:'2rem'}}>
            I&apos;m actively interviewing for upcoming internship opportunities. Reach out — I respond within 24 hours.
          </p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary btn--lg" id="home-contact-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Get in Touch
            </Link>
            <Link href="/projects" className="btn btn--secondary btn--lg" id="home-projects-cta">See My Work →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
