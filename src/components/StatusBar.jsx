import { profile } from '../data/resumeData';

export default function StatusBar() {
  return (
    <footer className="status-bar">
      <div className="left">
        <span>⎇ {profile.branch}</span>
        <span className="pulse" />
        <span>{profile.status}</span>
      </div>
      <div className="right">
        <span>{profile.location}</span>
        <span>UTF-8</span>
      </div>
    </footer>
  );
}
