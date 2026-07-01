import { profile } from '../data/resumeData';

const links = [
  { id: 'hero', label: 'Hero.jsx' },
  { id: 'about', label: 'About.jsx' },
  { id: 'skills', label: 'Skills.json' },
  { id: 'experience', label: 'Experience.js' },
  { id: 'projects', label: 'Projects/' },
  { id: 'contact', label: 'Contact.js' },
];

export default function Sidebar({ active, onNavigate, open, onClose }) {
  return (
    <>
      <div
        className={`sidebar-backdrop ${open ? 'open' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="name">{profile.name}</div>
          <div className="role">{profile.role} · {profile.stack}</div>
        </div>

        <div className="explorer-label">Explorer</div>
        <nav className="file-tree">
          <div className="file-tree-root">▾ portfolio</div>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <button
                  className={`file-item ${active === link.id ? 'active' : ''}`}
                  onClick={() => onNavigate(link.id)}
                >
                  <span className="dot" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">↗ GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">↗ LinkedIn</a>
          <a href={`mailto:${profile.email}`}>↗ Email</a>
        </div>
      </aside>
    </>
  );
}
