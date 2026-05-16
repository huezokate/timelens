import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Scan() {
  return (
    <div className="scan-page">
      <div className="scan-page__title">TimeLens · QR Scanner</div>

      {/* Viewfinder */}
      <div className="scan-viewfinder">
        <div className="scan-viewfinder__inner">
          <div className="scan-viewfinder__corner scan-viewfinder__corner--tl" />
          <div className="scan-viewfinder__corner scan-viewfinder__corner--tr" />
          <div className="scan-viewfinder__corner scan-viewfinder__corner--bl" />
          <div className="scan-viewfinder__corner scan-viewfinder__corner--br" />
          <div className="scan-viewfinder__scan-line" />
        </div>

        {/* Camera icon centered */}
        <div className="scan-viewfinder__camera-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      </div>

      <p className="scan-page__instruction">
        Position a TimeLens QR code in the frame<br />
        to reveal its historical eras
      </p>

      <Link to="/" className="scan-page__browse-link">
        Or browse all locations →
      </Link>

      {/* Decorative corner film-strip marks */}
      <div style={{
        position: 'fixed',
        bottom: 80,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 6,
        alignItems: 'center',
      }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: i === 2 ? 6 : 4,
              height: i === 2 ? 6 : 4,
              borderRadius: '50%',
              background: i === 2 ? 'var(--accent-rust)' : 'var(--border)',
            }}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
