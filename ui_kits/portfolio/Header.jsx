/* global React */
const Navbar = ({ name, sections, activeId, onNav }) => (
  <header className="nav">
    <div className="nav-inner">
      <button className="nav-logo" type="button" onClick={() => onNav('top')}>
        <img className="brand-mark" src="../../assets/favicon.svg" alt="" />
        <span className="brand-block">
          <span className="name">{name}</span>
          <span className="meta">SOFTWARE ENGINEER</span>
        </span>
      </button>
      <nav className="nav-links">
        {sections.map(s => (
          <button key={s.id} className={"nav-link" + (activeId === s.id ? " active" : "")} onClick={() => onNav(s.id)}>{s.label}</button>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = ({ resume }) => {
  const parts = resume.name.split(' ');
  const primary = parts[0];
  const secondary = parts.slice(1).join(' ');
  return (
    <section id="top" className="section hero">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-glow hero-glow-a"></div>
        <div className="hero-glow hero-glow-b"></div>
        <div className="hero-gridlines"></div>
      </div>
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <p className="hero-overline">{resume.location} · {resume.contact.authorization}</p>
          <h1 className="hero-title">
            <span className="hero-title-name">
              <span className="hero-name-line">{primary}</span>
              {secondary && <span className="hero-name-line hero-name-line-secondary">{secondary}</span>}
            </span>
            <span className="hero-title-line">Secure products. Polished interfaces. Grounded engineering.</span>
          </h1>
          <p className="hero-role">{resume.role}</p>
          <p className="hero-summary">{resume.summary}</p>
          <div className="hero-actions">
            <a className="btn primary" href={`mailto:${resume.contact.email}`}>Email Vikas</a>
            {resume.links.map(l => <a key={l.label} className="btn ghost" href={l.href}>{l.label}</a>)}
          </div>
          <ul className="hero-focus">
            {resume.currentFocus.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="hero-stage">
          <div className="portrait-stage">
            <div className="portrait-orbit" aria-hidden="true"></div>
            <picture className="portrait-frame">
              <img className="portrait-image" src={resume.portrait.src} srcSet={resume.portrait.srcSet} alt={resume.portrait.alt} style={{ objectPosition: resume.portrait.objectPosition }} />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = ({ resume }) => (
  <section id="about" className="section">
    <div className="section-inner about-shell">
      <div className="about-intro">
        <p className="section-label">Current trajectory</p>
        <h2>Experienced engineer now building the next chapter through an M.S. in Computer Science at Arizona State University.</h2>
      </div>
      <div className="about-content">
        <p className="about-main">{resume.profileStatement}</p>
        <div className="about-facts">
          <div className="about-fact"><h3>Location</h3><p>{resume.location}</p></div>
          <div className="about-fact"><h3>Work authorization</h3><p>{resume.contact.authorization}</p></div>
          <div className="about-fact"><h3>Coursework</h3><p>{resume.coursework.join(' · ')}</p></div>
        </div>
        <div className="education-stack">
          {resume.education.map(edu => (
            <article key={edu.school} className="education-item">
              <div className="education-heading">
                <div>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-school">{edu.school}</p>
                </div>
                <div className="edu-meta">
                  <span>{edu.period}</span><span>{edu.location}</span>
                  {edu.gpa && <span>{edu.gpa} GPA</span>}
                </div>
              </div>
              {edu.highlights && (
                <ul className="edu-highlights">{edu.highlights.map(h => <li key={h}>{h}</li>)}</ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Navbar, Hero, About });
