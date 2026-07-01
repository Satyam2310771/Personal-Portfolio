import { experience, education, certifications } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="comment">// 03</span>
        <h2>Experience &amp; Education</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role}>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-title">{item.role}</div>
            <div className="timeline-org">{item.org}</div>
            <ul className="timeline-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {certifications.map((cert) => (
          <div className="timeline-item" key={cert.title}>
            <div className="timeline-period">{cert.period}</div>
            <div className="timeline-title">{cert.title}</div>
            <div className="timeline-org">{cert.org}</div>
            <div className="timeline-detail">{cert.detail}</div>
          </div>
        ))}

        {education.map((edu) => (
          <div className="timeline-item" key={edu.degree}>
            <div className="timeline-period">{edu.period}</div>
            <div className="timeline-title">{edu.degree}</div>
            <div className="timeline-org">{edu.school}</div>
            {edu.detail && <div className="timeline-detail">{edu.detail}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
