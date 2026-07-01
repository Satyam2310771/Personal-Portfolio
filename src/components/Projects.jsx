import { projects } from '../data/resumeData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="comment">// 04</span>
        <h2>Projects</h2>
      </div>

      {projects.map((project) => (
        <div className="project-card" key={project.name}>
          <div className="project-image">
            {/* Replace the image path in src/data/resumeData.js to swap this screenshot */}
            <img src={project.image} alt={project.name} />
          </div>

          <div className="project-body">
            <div className="project-head">
              <h3>{project.name}</h3>
              <span className="project-year">{project.year}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">↗ Source Code</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">↗ Live Demo</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
