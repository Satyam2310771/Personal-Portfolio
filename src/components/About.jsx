import { about } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="comment">// 01</span>
        <h2>About</h2>
      </div>
      <p className="about-text">{about}</p>
    </section>
  );
}
