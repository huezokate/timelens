import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      {/* Route tab */}
      <Link
        to="/"
        className={`bottom-nav__tab ${isActive('/') && !isActive('/scan') ? 'active' : ''}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
        Route
      </Link>

      {/* Lens tab */}
      <Link
        to="/scan"
        className={`bottom-nav__tab ${isActive('/scan') ? 'active' : ''}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <circle cx="18.5" cy="5.5" r="2.5" />
        </svg>
        Lens
      </Link>

      {/* Menu tab */}
      <button className="bottom-nav__tab">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        Menu
      </button>
    </nav>
  );
}
