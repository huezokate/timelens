import type { Era } from '../data/locations';

interface Props {
  eras: Era[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function EraStrip({ eras, activeIndex, onSelect }: Props) {
  return (
    <div className="era-strip">
      <div className="era-strip__track">
        {eras.map((era, i) => (
          <div key={era.year} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <div className="era-strip__connector" />}
            <button
              className={`era-strip__pill ${i === activeIndex ? 'active' : ''}`}
              onClick={() => onSelect(i)}
              aria-pressed={i === activeIndex}
            >
              {era.year}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
