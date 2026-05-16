import type { Partner } from '../data/locations';

interface Props {
  partner: Partner;
}

const TYPE_ICONS: Record<Partner['type'], string> = {
  cafe:       '☕',
  museum:     '🏛',
  shop:       '🛍',
  attraction: '⛵',
};

export default function PartnerChip({ partner }: Props) {
  const icon = TYPE_ICONS[partner.type];

  return (
    <div className="partner-chip">
      <div className="partner-chip__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="partner-chip__info">
        <div className="partner-chip__name">{partner.name}</div>
        <div className="partner-chip__tagline">{partner.tagline}</div>
        {partner.since && (
          <div className="partner-chip__since">Est. {partner.since}</div>
        )}
      </div>
    </div>
  );
}
