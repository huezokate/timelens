import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLocation, getLocationsByGroup, getGroup, ERA_GRADIENTS } from '../data/locations';
import EraImage from '../components/EraImage';
import EraStrip from '../components/EraStrip';
import PartnerChip from '../components/PartnerChip';
import BottomNav from '../components/BottomNav';

export default function Location() {
  const { id } = useParams<{ id: string }>();
  const location = getLocation(id ?? '');
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  if (!location) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <div>Location not found</div>
          <Link to="/" style={{ color: 'var(--accent-amber)', marginTop: 12, display: 'inline-block', fontSize: 13 }}>
            ← Back to home
          </Link>
        </div>
        <BottomNav />
      </div>
    );
  }

  const group = getGroup(location.groupId);
  const allGroupLocations = getLocationsByGroup(location.groupId);
  const otherLocations = allGroupLocations.filter((l) => l.id !== location.id).slice(0, 2);

  const activeEra = location.eras[activeEraIndex];

  return (
    <div className="page">
      {/* Sticky header */}
      <div className="page-header">
        <Link
          to={`/group/${location.groupId}`}
          className="back-btn"
          aria-label={`Back to ${group?.name ?? 'group'}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="page-header__title">{location.name}</h1>
        {group && (
          <div
            style={{
              fontSize: 9,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: group.accentColor,
              flexShrink: 0,
              paddingLeft: 4,
            }}
          >
            {group.name}
          </div>
        )}
      </div>

      {/* Era image — crossfades between eras */}
      <EraImage era={activeEra} locationName={location.name} />

      {/* Era selector strip */}
      <EraStrip
        eras={location.eras}
        activeIndex={activeEraIndex}
        onSelect={setActiveEraIndex}
      />

      <div className="divider" />

      {/* Era detail */}
      <div className="era-detail">
        <div className="era-detail__label">{activeEra.label}</div>
        <p className="era-detail__desc">{activeEra.description}</p>
      </div>

      {/* Nearby partners */}
      {location.partners.length > 0 && (
        <>
          <div className="section-header" style={{ paddingTop: 24 }}>
            <span className="section-label">Nearby Partners</span>
          </div>
          <div className="partner-strip">
            {location.partners.map((partner) => (
              <PartnerChip key={partner.id} partner={partner} />
            ))}
          </div>
        </>
      )}

      {/* More locations in same group */}
      {otherLocations.length > 0 && (
        <>
          <div className="section-header" style={{ paddingTop: 20 }}>
            <span className="section-label">More in {group?.name}</span>
          </div>
          <div className="more-locations">
            {otherLocations.map((loc) => {
              const firstEra = loc.eras[0];
              const lastEra = loc.eras[loc.eras.length - 1];
              const gradient = ERA_GRADIENTS[firstEra?.gradientKey ?? '1850s'] ?? ERA_GRADIENTS['1850s'];
              return (
                <Link key={loc.id} to={`/location/${loc.id}`} className="more-location-card">
                  {/* Thumbnail */}
                  <div
                    className="more-location-card__thumb"
                    style={{ background: gradient }}
                    aria-hidden="true"
                  />
                  <div className="more-location-card__info">
                    <div className="more-location-card__name">{loc.name}</div>
                    <div className="more-location-card__eras">
                      {firstEra?.year} – {lastEra?.year} · {loc.eras.length} eras
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </>
      )}

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  );
}
