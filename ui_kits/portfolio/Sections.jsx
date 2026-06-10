/* global React */
const Experience = ({ items }) => (
  <section id="experience" className="section">
    <div className="section-inner experience-shell">
      <header className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Six years building secure, business-critical software.</h2>
        <p>From telecom messaging infrastructure to enterprise data masking, the through-line has been reliability, user trust, and execution under real product pressure.</p>
      </header>
      <div className="experience-list">
        {items.map(item => (
          <article key={item.company + item.period} className="experience-item">
            <div className="experience-period"><p>{item.period}</p></div>
            <div className="experience-body">
              <header className="experience-header">
                <p className="company">{item.company}</p>
                <h3>{item.role}</h3>
                {item.location && <p className="location">{item.location}</p>}
              </header>
              <p className="description">{item.description}</p>
              {item.impact && <p className="impact">{item.impact}</p>}
              <ul className="highlights">{item.highlights.map(h => <li key={h}>{h}</li>)}</ul>
              {item.technologies && (
                <p className="tech"><span>Tech:</span> {item.technologies.join(' · ')}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ projects, onSelect, selectedIdx }) => (
  <section id="projects" className="section">
    <div className="section-inner projects-shell">
      <header className="section-heading">
        <p className="section-label">Selected projects</p>
        <h2>Projects that show range, curiosity, and product taste.</h2>
        <p>From AI-assisted tooling to coursework and public-facing Angular work, each project reflects a slightly different engineering mode.</p>
      </header>
      <div className="project-list">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className={"project-feature" + (selectedIdx === i ? " active" : "")}
            onClick={() => onSelect && onSelect(i)}
            style={{ cursor: onSelect ? 'pointer' : 'default' }}
          >
            <div className="project-index">0{i + 1}</div>
            <div className="project-copy">
              <p className="project-meta">{project.type}{project.period && <span> · {project.period}</span>}</p>
              <h3>{project.name}</h3>
              <p className="tagline">{project.tagline}</p>
              <p className="description">{project.description}</p>
            </div>
            <div className="project-panel">
              <div className="project-panel-inner">
                <p className="panel-label">Focus</p>
                <ul>
                  {(project.technologies || []).slice(0, 4).map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Skills = ({ skills }) => (
  <section id="skills" className="section">
    <div className="section-inner skills-shell">
      <header className="section-heading">
        <p className="section-label">Operating system</p>
        <h2>Angular first, backend fluent, and comfortable with AI-adjacent tooling.</h2>
        <p>The strongest through-line is full-stack product delivery: shaping frontends, wiring APIs, debugging production systems, and keeping releases moving.</p>
      </header>
      <div className="skill-groups">
        {skills.map(s => (
          <article key={s.category} className="skill-group">
            <h3>{s.category}</h3>
            <div className="skill-list">{s.items.map(it => <span key={it}>{it}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = ({ contact, links }) => (
  <section id="contact" className="section contact">
    <div className="contact-background" aria-hidden="true"></div>
    <div className="section-inner contact-inner">
      <header className="section-heading center">
        <p className="section-label">Contact</p>
        <h2>Open to thoughtful software engineering work with good teams.</h2>
        <p>{contact.availability}</p>
      </header>
      <div className="contact-card">
        <div className="primary">
          <p className="label">Email</p>
          <a className="email" href={`mailto:${contact.email}`}>{contact.email}</a>
          {contact.phone && <p className="phone">{contact.phone}</p>}
          <p className="location">{contact.location}</p>
          {contact.authorization && <p className="authorization">{contact.authorization}</p>}
        </div>
        <div className="links">
          <p className="label">Elsewhere</p>
          <div className="link-list">
            {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Experience, Projects, Skills, Contact });
