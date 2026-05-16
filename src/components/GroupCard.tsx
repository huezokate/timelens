import { Link } from 'react-router-dom';
import type { Group } from '../data/locations';

interface Props {
  group: Group;
}

// Each group gets a unique cinematic gradient for its card background
const GROUP_GRADIENTS: Record<string, string> = {
  waterfront: 'linear-gradient(160deg, #0a1220 0%, #0d1f35 40%, #091522 100%)',
  cultural:   'linear-gradient(160deg, #1a1208 0%, #2e1e08 40%, #1a0f05 100%)',
  parks:      'linear-gradient(160deg, #0a160e 0%, #0d2014 40%, #071009 100%)',
  civic:      'linear-gradient(160deg, #1a0808 0%, #2e1010 40%, #120606 100%)',
};

export default function GroupCard({ group }: Props) {
  const gradient = GROUP_GRADIENTS[group.id] ?? GROUP_GRADIENTS['waterfront'];

  return (
    <Link to={`/group/${group.id}`} className="group-card">
      {/* Background layers */}
      <div className="group-card__bg">
        <div
          className="group-card__gradient"
          style={{ background: gradient }}
        />
        <div className="group-card__grain-overlay" />
        <div className="group-card__overlay" />
      </div>

      {/* Content */}
      <div className="group-card__content">
        <div className="group-card__name">{group.name}</div>
        <div className="group-card__tagline">{group.tagline}</div>
        <div className="group-card__meta">
          <span
            className="group-card__meta-pill"
            style={{ color: group.accentColor, borderColor: group.accentColor }}
          >
            {group.eraRange[0]}–{group.eraRange[1]}
          </span>
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {group.locationCount} locations
        </div>
      </div>

      {/* Accent color bar */}
      <div
        className="group-card__era-bar"
        style={{ background: group.accentColor }}
      />
    </Link>
  );
}
