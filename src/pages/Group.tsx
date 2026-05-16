import { useParams, Link } from 'react-router-dom';
import {
  getGroup,
  getLocationsByGroup,
  getAllPartnersForGroup,
} from '../data/locations';
import EraImage from '../components/EraImage';
import LocationCard from '../components/LocationCard';
import PartnerChip from '../components/PartnerChip';
import BottomNav from '../components/BottomNav';

export default function Group() {
  const { id } = useParams<{ id: string }>();
  const group = getGroup(id ?? '');
  const locations = getLocationsByGroup(id ?? '');
  const partners = getAllPartnersForGroup(id ?? '');

  if (!group) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <div>Group not found</div>
          <Link to="/" style={{ color: 'var(--accent-amber)', marginTop: 12, display: 'inline-block', fontSize: 13 }}>
            ← Back to home
          </Link>
        </div>
        <BottomNav />
      </div>
    );
  }

  // Use the first location's first era for the group hero
  const heroLocation = locations[0];
  const heroEra = heroLocation?.eras[0];

  return (
    <div className="page">
      {/* Sticky header */}
      <div className="page-header">
        <Link to="/" className="back-btn" aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="page-header__title">{group.name}</h1>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: group.accentColor,
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero era image */}
      {heroEra && heroLocation && (
        <EraImage era={heroEra} locationName={heroLocation.name} />
      )}

      {/* Group info block */}
      <div className="group-hero-info">
        <div className="group-hero-info__era-span">
          {group.eraRange[0]} — {group.eraRange[1]}
          {'  ·  '}
          {group.locationCount} locations
        </div>
        <p className="group-hero-info__desc">{group.tagline}</p>

        {/* QR scan CTA */}
        <div className="group-hero-info__scan-cta">
          <span style={{ fontSize: 18 }}>📱</span>
          <span>Scan QR Code at a location to explore eras in AR</span>
        </div>
      </div>

      <div className="divider" />

      {/* Locations list */}
      <div className="section-header">
        <span className="section-label">Locations</span>
        <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          {locations.length} sites
        </span>
      </div>

      <div className="locations-list">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>

      {/* Nearby partners */}
      {partners.length > 0 && (
        <>
          <div className="section-header" style={{ paddingTop: 24 }}>
            <span className="section-label">Nearby Partners</span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
              {partners.length} spots
            </span>
          </div>
          <div className="partner-strip">
            {partners.map((partner) => (
              <PartnerChip key={partner.id} partner={partner} />
            ))}
          </div>
        </>
      )}

      <BottomNav />
    </div>
  );
}
