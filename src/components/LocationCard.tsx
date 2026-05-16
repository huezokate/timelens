import { Link } from 'react-router-dom';
import type { Location } from '../data/locations';
import { ERA_GRADIENTS } from '../data/locations';

interface Props {
  location: Location;
}

export default function LocationCard({ location }: Props) {
  const firstEra = location.eras[0];
  const lastEra = location.eras[location.eras.length - 1];
  const gradientKey = firstEra?.gradientKey ?? '1850s';
  const gradient = ERA_GRADIENTS[gradientKey] ?? ERA_GRADIENTS['1850s'];

  return (
    <Link to={`/location/${location.id}`} className="location-card">
      {/* Era color thumbnail */}
      <div
        className="location-card__era-dot"
        style={{ background: gradient }}
        aria-hidden="true"
      >
        <span style={{ opacity: 0.7, fontSize: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {firstEra?.year}
        </span>
      </div>

      {/* Info */}
      <div className="location-card__info">
        <div className="location-card__name">{location.name}</div>
        <div className="location-card__meta">
          <span
            className="location-card__era-badge"
          >
            {firstEra?.year} – {lastEra?.year}
          </span>
          <span className="location-card__era-count">
            {location.eras.length} eras
          </span>
        </div>
      </div>

      {/* Arrow */}
      <svg
        className="location-card__arrow"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Link>
  );
}
