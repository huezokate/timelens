import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import Location from './pages/Location';
import Scan from './pages/Scan';

// SVG grain filter — defined once here, referenced throughout the app via url(#grain)
function GrainFilter() {
  return (
    <svg
      className="grain-filter-host"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <GrainFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </div>
  );
}
