export function GdgMark() {
  return (
    <svg
      viewBox="0 0 48 28"
      width="44"
      height="28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m17 5-12 9"
        stroke="#ea4335"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="m5 14 12 9"
        stroke="#4285f4"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="m31 5 12 9"
        stroke="#34a853"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="m43 14-12 9"
        stroke="#fbbc04"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a
        className="brand"
        href="#hero"
        aria-label="GDG on Campus MIET — back to top"
      >
        <GdgMark />
        <span>
          GDG on Campus <span className="brand-campus">MIET</span>
        </span>
      </a>
      <nav aria-label="Main">
        <a href="#about">About</a>
        <a href="#highlights">Highlights</a>
        <a href="#event-details">Event Details</a>
      </nav>
      <span className="header-edition mono">HACKHEIST 2026</span>
    </header>
  );
}
