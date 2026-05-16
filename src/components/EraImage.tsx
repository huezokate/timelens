import { useState, useEffect } from 'react';
import type { Era } from '../data/locations';
import { ERA_GRADIENTS } from '../data/locations';

interface Props {
  era: Era;
  locationName?: string;
}

export default function EraImage({ era, locationName }: Props) {
  const [displayedEra, setDisplayedEra] = useState<Era>(era);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (era.year === displayedEra.year) return;
    // Fade out → swap → fade in
    setVisible(false);
    const t = setTimeout(() => {
      setDisplayedEra(era);
      setVisible(true);
    }, 250);
    return () => clearTimeout(t);
  }, [era.year]);

  const gradient = ERA_GRADIENTS[displayedEra.gradientKey] ?? ERA_GRADIENTS['1850s'];

  return (
    <div className="era-image" role="img" aria-label={`${locationName ?? ''} — ${displayedEra.label}`}>
      {/* Gradient layer with crossfade */}
      <div
        className="era-image__layer"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="era-image__gradient" style={{ background: gradient }} />
        <div className="era-image__grain" />
        <div className="era-image__vignette" />
        <div className="era-image__scanlines" />

        {/* Year stamp — archival / film-burn style */}
        <div className="era-image__year-stamp" aria-hidden="true">
          {displayedEra.year}
        </div>

        {/* Era label badge */}
        <div className="era-image__label-badge">
          {displayedEra.label}
        </div>
      </div>
    </div>
  );
}
