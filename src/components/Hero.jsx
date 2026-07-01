import { profile } from '../data/resumeData';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="blink" />
            {profile.status} · {profile.location}
          </div>

          <div className="hero-code">
            <span className="kw">const</span> <span className="name">satyam</span> = {'{'}<br />
            &nbsp;&nbsp;role: <span className="str">"{profile.role}"</span>,<br />
            &nbsp;&nbsp;stack: <span className="str">"{profile.stack}"</span>,<br />
            &nbsp;&nbsp;location: <span className="str">"{profile.location}"</span>,<br />
            {'}'}<span className="hero-cursor" />
          </div>

          <p className="hero-sub">
            I build responsive, full-stack web applications — clean front-ends,
            solid back-ends, and databases that hold it all together.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          {/* Replace profile.photo in src/data/resumeData.js with your real image path */}
          <img src="/images/projects/satyam.png" alt="Satyam Pandey" />
        </div>
      </div>
    </section>
  );
}
