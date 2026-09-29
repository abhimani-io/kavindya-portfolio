'use client';
import { useState } from 'react';
import Link from 'next/link';

const allProjects = [
  {
    id: 'project-1',
    tags: ['flutter','dart','firebase'],
    title: 'AR Art Visualization and Marketplace App',
    badges: [
      { text:'Flutter',  cls:'badge--blue' },{ text:'Dart',     cls:'badge--blue' },
      { text:'Firebase', cls:'badge--blue' },{ text:'Android',  cls:'badge--blue' },
      { text:'AR',       cls:'badge--blue' },
    ],
    status: 'Live',
    type: 'Academic + Personal',
    overview: 'A mobile application that enables users to visualize artwork in their own space before purchase, while providing sellers with a complete set of tools to manage an online art business. Built for Android using Flutter and powered by Firebase services.',
    highlights: [
      'Implemented image-based AR visualization overlaying artwork onto a live camera feed for realistic previewing on real walls.',
      'Built a role-based system supporting General Consumers, Art Sellers (Go Creator), and unauthenticated Guest Users with tailored permissions.',
      'Integrated a complete marketplace with wishlist, cart management, and secure checkout via the PayHere payment gateway.',
      'Developed a dedicated Art Seller workspace for inventory management, order tracking, and customer communication.',
      'Utilized Firebase Authentication, Cloud Firestore, and Cloud Storage for a scalable, real-time backend architecture.',
    ],
    source: 'https://github.com/abhimani-io/ArtSpace-Preview',
    hasIcon: true,
  },
  {
    id: 'project-2',
    tags: ['javascript','html','css'],
    title: 'Personal Art Portfolio & Business Website',
    badges: [
      { text:'HTML5',      cls:'badge--orange' },{ text:'CSS3',    cls:'badge--blue' },
      { text:'JavaScript', cls:'badge--orange' },{ text:'Netlify', cls:'badge--teal' },
    ],
    status: 'Live',
    type: 'Personal',
    overview: 'Developed and deployed a custom portfolio website on Netlify to showcase personal artwork, providing a centralized platform for customers to explore pieces and contact me directly for business inquiries.',
    highlights: [
      'Established a professional online presence to attract potential clients and streamline commission requests.',
      'Fully responsive design with smooth animations and gallery layout.',
      'Deployed via Netlify CI/CD pipeline with zero-downtime deployments.',
    ],
    demo: 'https://startling-alfajores-4783ea.netlify.app/',
    source: 'https://github.com/abhimani-io/art-portfolio',
  },
  {
    id: 'project-3',
    tags: ['react','node','javascript'],
    title: 'Study Planner & Productivity Web App',
    badges: [
      { text:'React',      cls:'badge--teal' },{ text:'Node.js',    cls:'badge--green' },
      { text:'PostgreSQL', cls:'badge--blue' },{ text:'Docker',     cls:'badge--slate' },
    ],
    status: 'In Progress',
    type: 'Personal',
    overview: 'A web-based study planner targeting university students — features task scheduling, Pomodoro timer, progress tracking, and calendar view.',
    highlights: [
      'Maintained >80% code coverage across 40+ automated tests using Jest and Supertest.',
      'Containerized with Docker for consistent local and production environments.',
      'RESTful API backend with JWT authentication and PostgreSQL persistence.',
    ],
    source: '#',
  },
];

const filterOptions = [
  { id: 'all',        label: 'All Projects' },
  { id: 'react',      label: 'React' },
  { id: 'flutter',    label: 'Flutter' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'node',       label: 'Node.js' },
  { id: 'firebase',   label: 'Firebase' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const filtered = allProjects.filter(p =>
    active === 'all' || p.tags.includes(active)
  );

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="projects-page-heading">
        <div className="container" style={{textAlign:'center'}}>
          <span className="section-label" style={{justifyContent:'center'}}>Portfolio</span>
          <h1 className="page-hero__title animate-fade-in-up" id="projects-page-heading">
            Projects &amp; <span className="text-gradient">Case Studies</span>
          </h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="section section--white" aria-label="Project filter and listings">
        <div className="container">

          {/* Filter Tabs */}
          <div className="filter-tabs" role="group" aria-label="Filter projects by technology">
            {filterOptions.map(f => (
              <button
                key={f.id}
                id={`filter-${f.id}`}
                className={`filter-tab${active === f.id ? ' active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Full Cards */}
          {filtered.map(p => (
            <article key={p.id} id={p.id} className="project-full reveal" data-tags={p.tags.join(' ')}>
              <div className="project-full__header">
                <div className="project-full__icon">
                  {p.hasIcon
                    ? <img src="/images/ar-project-icon.png" alt="AR Project Icon" className="project-icon-img" width={32} height={32} />
                    : <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  }
                </div>
                <div className="project-full__meta">
                  <h2 className="project-full__title">{p.title}</h2>
                  <div className="project-full__badges">
                    {p.badges.map(b => <span key={b.text} className={`badge ${b.cls}`}>{b.text}</span>)}
                  </div>
                </div>
                <div className="project-full__status">
                  <span className="status-dot">{p.status}</span>
                  <span className="badge badge--blue">{p.type}</span>
                </div>
              </div>

              <div className="project-full__body">
                <div className="project-full__main">
                  <p className="project-full__section-title">Overview</p>
                  <p className="project-full__description">{p.overview}</p>

                  <p className="project-full__section-title">Technical Highlights</p>
                  <ul className="project-full__highlights">
                    {p.highlights.map((h,i) => (
                      <li key={i} className="project-full__highlight">
                        <span className="project-full__highlight-icon">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="project-full__actions">
                    {p.demo && <a href={p.demo} target="_blank" rel="noopener" className="btn btn--primary">Live Demo ↗</a>}
                    {p.source && p.source !== '#' && <a href={p.source} target="_blank" rel="noopener" className="btn btn--secondary">Source Code ↗</a>}
                  </div>
                </div>

                <div className="project-full__side">
                  <p className="project-full__side-label">Tech Stack</p>
                  <div className="project-full__side-tags">
                    {p.badges.map(b => <span key={b.text} className={`badge ${b.cls}`}>{b.text}</span>)}
                  </div>
                  <p className="project-full__side-label">Links</p>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener" className="project-full__link">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      Live Demo
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source !== '#' ? p.source : undefined} className="project-full__link">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>
    </>
  );
}
