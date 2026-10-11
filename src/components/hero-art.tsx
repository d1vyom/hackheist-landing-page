export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-top mono">
        <span>IDEAS IN. POSSIBILITIES OUT.</span>
        <span>↗</span>
      </div>
      <svg className="vault-art" viewBox="0 0 460 440" fill="none">
        <defs>
          <pattern
            id="dot-grid"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#c9c8c0" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="460" height="440" fill="url(#dot-grid)" />
        <path
          d="M22 60V24h36m344 36V24h-36M22 380v36h36m344-36v36h-36"
          stroke="#21231f"
          strokeWidth="2"
        />
        <path
          d="M230 70v300M80 220h300"
          stroke="#d4d4cb"
          strokeDasharray="5 6"
        />
        <g transform="translate(230 220)">
          <circle r="151" fill="#efeee8" stroke="#262820" strokeWidth="2" />
          <circle r="133" stroke="#d0d0c6" strokeWidth="1" />
          <circle r="114" fill="#faf9f5" stroke="#262820" strokeWidth="2" />
          <path
            d="M-95-84A127 127 0 0 1 94-84"
            stroke="#ea4335"
            strokeWidth="14"
          />
          <path
            d="M95 84A127 127 0 0 1-94 84"
            stroke="#34a853"
            strokeWidth="14"
          />
          <path
            d="M-149-36h37v72h-37M112-36h37v72h-37"
            fill="#fbbc04"
            stroke="#262820"
            strokeWidth="2"
          />
          <g className="vault-core" data-decorative-motion="true">
            <rect
              x="-69"
              y="-69"
              width="138"
              height="138"
              rx="9"
              transform="rotate(-12)"
              fill="#2457ed"
              stroke="#262820"
              strokeWidth="2"
            />
            <rect
              x="-58"
              y="-58"
              width="116"
              height="116"
              rx="5"
              transform="rotate(-12)"
              stroke="#92b2ff"
            />
            <path
              d="m-33-19-19 19 19 19m66-38L52 0 33 19M11-34l-22 68"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </g>
          <circle cx="0" cy="-151" r="5" fill="#262820" />
          <circle cx="0" cy="151" r="5" fill="#262820" />
        </g>
        <g transform="translate(353 68) rotate(10)">
          <rect
            x="-38"
            y="-22"
            width="76"
            height="44"
            rx="2"
            fill="#fbbc04"
            stroke="#262820"
            strokeWidth="2"
          />
          <path d="M-14 0h28M6-8l8 8-8 8" stroke="#262820" strokeWidth="2" />
        </g>
        <g transform="translate(84 349) rotate(-9)">
          <rect
            x="-50"
            y="-23"
            width="100"
            height="46"
            rx="2"
            fill="#faf9f5"
            stroke="#262820"
            strokeWidth="2"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#262820"
            fontSize="13"
            fontFamily="monospace"
          >
            &lt;let’s go/&gt;
          </text>
        </g>
        <path
          d="m366 355 8 16 17 3-12 12 2 17-15-8-15 8 2-17-12-12 17-3Z"
          fill="#34a853"
          stroke="#262820"
          strokeWidth="2"
        />
      </svg>
      <div className="art-bottom mono">
        <span>
          <span className="status-dot" />
          OPEN YOUR NEXT POSSIBILITY
        </span>
        <span>HH / 26</span>
      </div>
    </div>
  );
}
