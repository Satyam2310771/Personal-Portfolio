const tabs = [
  { id: 'hero', label: 'Hero.jsx' },
  { id: 'about', label: 'About.jsx' },
  { id: 'skills', label: 'Skills.json' },
  { id: 'experience', label: 'Experience.js' },
  { id: 'projects', label: 'Projects/' },
  { id: 'contact', label: 'Contact.js' },
];

export default function TabBar({ active, onNavigate }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${active === tab.id ? 'active' : ''}`}
          onClick={() => onNavigate(tab.id)}
        >
          <span className="dot" />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
