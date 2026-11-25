/** Architecture sketch of the stack described in About: browser → Next.js → Django REST API → data and cloud. */
export function AboutIllustration({ className }: { className?: string }) {
  const line = { stroke: "hsl(var(--brand))", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" as const };
  const node = { fill: "hsl(var(--card))", stroke: "hsl(var(--border))", strokeWidth: 1.5 };
  const title = { fill: "hsl(var(--foreground))", fontSize: 12.5, fontWeight: 600 };
  const sub = { fill: "hsl(var(--muted-foreground))", fontSize: 10.5 };

  return (
    <div className={className}>
      <svg
        viewBox="0 0 360 320"
        role="img"
        aria-label="Architecture diagram: browser to Next.js, to a Django REST API, to databases and AWS or Heroku hosting"
        className="h-auto w-full"
      >
        <defs>
          <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="hsl(var(--brand))" stopOpacity="0.18" />
            <stop offset="1" stopColor="hsl(var(--brand))" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="180" cy="160" r="150" fill="url(#about-glow)" />

        {/* Connectors with a moving dash to suggest request flow */}
        {["M140 50 H220", "M250 76 L200 134", "M110 186 L90 244", "M250 186 L270 244"].map((d) => (
          <path key={d} d={d} style={line} strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.4s" repeatCount="indefinite" />
          </path>
        ))}

        {/* Browser */}
        <rect x="20" y="24" width="120" height="52" rx="12" style={node} />
        <rect x="34" y="40" width="16" height="12" rx="2" style={{ fill: "hsl(var(--brand))", opacity: 0.8 }} />
        <text x="82" y="50" textAnchor="middle" style={title}>
          Browser
        </text>
        <text x="82" y="66" textAnchor="middle" style={sub}>
          Visitors
        </text>

        {/* Next.js */}
        <rect x="220" y="24" width="120" height="52" rx="12" style={node} />
        <text x="280" y="50" textAnchor="middle" style={title}>
          Next.js
        </text>
        <text x="280" y="66" textAnchor="middle" style={sub}>
          Front end
        </text>

        {/* Django REST API (highlighted) */}
        <rect
          x="120"
          y="134"
          width="120"
          height="52"
          rx="12"
          style={{ fill: "hsl(var(--brand))", stroke: "hsl(var(--brand))", strokeWidth: 1.5 }}
        />
        <text
          x="180"
          y="160"
          textAnchor="middle"
          style={{ fill: "hsl(var(--background))", fontSize: 12.5, fontWeight: 600 }}
        >
          Django REST
        </text>
        <text
          x="180"
          y="176"
          textAnchor="middle"
          style={{ fill: "hsl(var(--background))", fontSize: 10.5, opacity: 0.85 }}
        >
          APIs · CRON jobs
        </text>

        {/* Databases */}
        <rect x="20" y="244" width="120" height="52" rx="12" style={node} />
        <text x="80" y="270" textAnchor="middle" style={title}>
          Databases
        </text>
        <text x="80" y="286" textAnchor="middle" style={sub}>
          Postgres · MongoDB
        </text>

        {/* Cloud */}
        <rect x="220" y="244" width="120" height="52" rx="12" style={node} />
        <text x="280" y="270" textAnchor="middle" style={title}>
          AWS &amp; Heroku
        </text>
        <text x="280" y="286" textAnchor="middle" style={sub}>
          EC2 · S3 · SES
        </text>
      </svg>
    </div>
  );
}
