import { profile } from '../data/resumeData';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <span className="comment">// 05</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-block">
        <div className="contact-line">
          <span className="kw">email</span> → <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="contact-line">
          <span className="kw">phone</span> → <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>
        <div className="contact-line">
          <span className="kw">linkedin</span> → <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin.replace('https://www.', '')}</a>
        </div>
        <div className="contact-line">
          <span className="kw">github</span> → <a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace('https://', '')}</a>
        </div>
      </div>
    </section>
  );
}
