// Lightweight inline brand wordmarks rendered as SVG. Monochrome / current-color so
// they sit comfortably in the trust strip and the press band. No external assets,
// no layout shift.

type LogoProps = { className?: string };

export function GoogleMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" className={className} fill="currentColor" aria-label="Google">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="24" letterSpacing="-0.02em">
        Google
      </text>
    </svg>
  );
}

export function StripeMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 90 36" className={className} fill="currentColor" aria-label="Stripe">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.04em">
        stripe
      </text>
    </svg>
  );
}

export function AirbnbMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" className={className} fill="currentColor" aria-label="Airbnb">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.03em">
        airbnb
      </text>
    </svg>
  );
}

export function NotionMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" className={className} fill="currentColor" aria-label="Notion">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.03em">
        Notion
      </text>
    </svg>
  );
}

export function SpotifyMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" className={className} fill="currentColor" aria-label="Spotify">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.03em">
        Spotify
      </text>
    </svg>
  );
}

export function ForbesMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 110 36" className={className} fill="currentColor" aria-label="Forbes">
      <text x="0" y="26" fontFamily="Georgia, serif" fontWeight="700" fontSize="24" letterSpacing="-0.02em">
        Forbes
      </text>
    </svg>
  );
}

export function TechCrunchMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 150 36" className={className} fill="currentColor" aria-label="TechCrunch">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.02em">
        TechCrunch
      </text>
    </svg>
  );
}

export function WSJMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 60 36" className={className} fill="currentColor" aria-label="The Wall Street Journal">
      <text x="0" y="26" fontFamily="Georgia, serif" fontWeight="700" fontSize="24" letterSpacing="-0.04em">
        WSJ
      </text>
    </svg>
  );
}

export function WiredMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 90 36" className={className} fill="currentColor" aria-label="Wired">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.04em">
        WIRED
      </text>
    </svg>
  );
}

export function FastCoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 130 36" className={className} fill="currentColor" aria-label="Fast Company">
      <text x="0" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.03em">
        FastCo
      </text>
    </svg>
  );
}
