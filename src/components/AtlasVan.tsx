const LUG_ANGLES = [0, 72, 144, 216, 288]

function Wheel({ cx, cy, r = 50 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      {/* Tyre */}
      <circle cx={cx} cy={cy} r={r} fill="#0f172a" />
      {/* Rim */}
      <circle cx={cx} cy={cy} r={r * 0.68} fill="#1e293b" />
      {/* Hub */}
      <circle cx={cx} cy={cy} r={r * 0.32} fill="#334155" />
      {/* Centre cap */}
      <circle cx={cx} cy={cy} r={r * 0.14} fill="#64748b" />
      {/* Lug nuts */}
      {LUG_ANGLES.map((deg) => (
        <circle
          key={deg}
          cx={cx + r * 0.48 * Math.cos(((deg - 90) * Math.PI) / 180)}
          cy={cy + r * 0.48 * Math.sin(((deg - 90) * Math.PI) / 180)}
          r={r * 0.08}
          fill="#64748b"
        />
      ))}
    </g>
  )
}

export default function AtlasVan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 920 430"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Atlas Plumbing branded service van"
    >
      {/* ── Ground shadow ── */}
      <ellipse cx="462" cy="416" rx="418" ry="11" fill="rgba(0,0,0,0.22)" />

      {/* ── Wheels (drawn first so van body overlaps wheel tops) ── */}
      <Wheel cx={680} cy={370} />
      <Wheel cx={230} cy={370} />

      {/* ── Cargo box ── */}
      <rect x="180" y="140" width="618" height="215" rx="5" fill="#0D1929" />

      {/* Rear door seam */}
      <line x1="755" y1="145" x2="755" y2="350" stroke="#071016" strokeWidth="3" />
      {/* Rear door handle */}
      <rect x="771" y="244" width="14" height="4" rx="2" fill="#374151" />

      {/* ── Front cab body ── */}
      <path
        d="M 180,140 L 180,355 L 135,355 L 110,338
           Q 84,316 84,290 L 84,222 Q 84,196 96,178
           L 125,157 L 158,145 Z"
        fill="#0c1b2b"
      />

      {/* Windshield glass */}
      <path
        d="M 100,182 L 126,162 L 158,149 L 176,145 L 176,230 L 92,230
           Q 90,204 100,182 Z"
        fill="#1e3a5f"
        opacity="0.72"
      />
      {/* Windshield glare */}
      <path
        d="M 114,187 L 140,168 L 160,157 L 160,182 L 124,216 Z"
        fill="white"
        opacity="0.09"
      />

      {/* Cab side window */}
      <rect x="180" y="152" width="60" height="70" rx="3" fill="#1d4ed8" opacity="0.45" />
      {/* Window glare */}
      <rect x="184" y="156" width="18" height="26" rx="2" fill="white" opacity="0.09" />

      {/* Side mirror arm + glass */}
      <line x1="180" y1="182" x2="157" y2="182" stroke="#1B2A4A" strokeWidth="3" />
      <rect x="149" y="176" width="12" height="9" rx="2" fill="#1B2A4A" />

      {/* Cab-to-cargo vertical post */}
      <rect x="238" y="140" width="5" height="215" fill="#071016" />

      {/* Front bumper */}
      <rect x="78" y="318" width="14" height="37" rx="3" fill="#2d3748" />
      {/* Rear bumper */}
      <rect x="793" y="326" width="14" height="29" rx="3" fill="#2d3748" />

      {/* Headlights */}
      <rect x="80" y="258" width="11" height="18" rx="2" fill="#fef9c3" />
      <rect x="80" y="258" width="11" height="18" rx="2" fill="white" opacity="0.55" />
      {/* Headlight lens shine */}
      <rect x="82" y="260" width="4" height="5" rx="1" fill="white" opacity="0.4" />

      {/* Rear tail-light strip */}
      <rect x="795" y="170" width="4" height="110" rx="2" fill="#dc2626" opacity="0.8" />

      {/* ── Orange accent stripe ── */}
      <rect x="180" y="248" width="618" height="24" fill="#F97316" />
      {/* Stripe sheen */}
      <rect x="180" y="248" width="120" height="24" fill="white" opacity="0.07" />

      {/* ── Branding ─────────────────────────────────── */}

      {/* Wrench + water-drop icon mark (left of text) */}
      <g transform="translate(287, 198)">
        {/* Wrench handle */}
        <rect x="-4" y="-20" width="8" height="26" rx="3" fill="#F97316" />
        {/* Wrench head (oval) */}
        <ellipse cx="0" cy="-20" rx="9" ry="6" fill="none" stroke="#F97316" strokeWidth="3.5" />
        {/* Wrench foot */}
        <rect x="-5" y="4" width="10" height="5" rx="2" fill="#F97316" />
        {/* Water droplet */}
        <path
          d="M 24,-24 Q 24,-35 16,-40 Q 8,-35 8,-24 Q 8,-14 16,-11 Q 24,-14 24,-24 Z"
          fill="#60a5fa"
          opacity="0.85"
        />
      </g>

      {/* ── ATLAS PLUMBING headline ── */}
      <text
        x="528"
        y="210"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize="44"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        ATLAS PLUMBING
      </text>

      {/* Tagline */}
      <text
        x="528"
        y="238"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fill="#94a3b8"
        textAnchor="middle"
        letterSpacing="5"
      >
        FAST · HONEST · RELIABLE
      </text>

      {/* ── Below stripe ── */}

      {/* Phone */}
      <text
        x="528"
        y="305"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        (555) 123-4567
      </text>

      {/* Five-star rating */}
      <text x="438" y="330" fontSize="14" fill="#fbbf24">
        ★★★★★
      </text>
      <text
        x="522"
        y="330"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fill="#fbbf24"
        fontWeight="bold"
      >
        5.0 RATED
      </text>

      {/* Licence / location */}
      <text
        x="528"
        y="350"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fill="#475569"
        textAnchor="middle"
        letterSpacing="2.5"
      >
        LICENSED · INSURED · NEW JERSEY
      </text>
    </svg>
  )
}
