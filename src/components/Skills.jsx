import { skills } from '../data/resumeData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="comment">// 02</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.file}>
            <div className="skill-card-head">
              <span className="sq">▪</span> {group.file}
            </div>
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
