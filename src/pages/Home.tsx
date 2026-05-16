import { Link } from 'react-router-dom';
import { groups } from '../data/locations';
import GroupCard from '../components/GroupCard';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="page">
      {/* Hero header */}
      <header className="home-hero">
        <div className="home-hero__grain" aria-hidden="true" />

        <div className="home-hero__wordmark">
          TIME<span>LENS</span>
        </div>
        <div className="home-hero__subtitle">San Francisco through time</div>

        {/* Non-functional search hint */}
        <div className="home-hero__search" role="search" aria-label="Search locations (decorative)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          Search a landmark or address…
        </div>

        {/* QR scan CTA */}
        <Link to="/scan" className="home-hero__scan-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3M17 17h3v3M14 20h3" />
          </svg>
          Scan a QR code
        </Link>
      </header>

      {/* Section heading */}
      <div style={{ padding: '20px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="section-label">Explore Districts</span>
        <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          {groups.length} groups
        </span>
      </div>

      {/* Group grid */}
      <div className="home-grid">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{
        padding: '24px 16px 0',
        textAlign: 'center',
        fontSize: 11,
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        lineHeight: 1.6,
      }}>
        Scan QR codes at any SF landmark<br />to unlock historical eras in AR
      </div>

      <BottomNav />
    </div>
  );
}
