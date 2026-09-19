import { useId } from "react";

// The swoosh from the logo, used to flow one section into the next.
type Props = { top: string; bottom: string; flip?: boolean };

export default function Wave({ top, bottom, flip = false }: Props) {
  const gid = `swoosh-${useId().replace(/:/g, "")}`;
  return (
    <svg
      className="wave"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: top, transform: flip ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1d5a99" stopOpacity="0" />
          <stop offset="0.35" stopColor="#0e8f8d" />
          <stop offset="0.75" stopColor="#19b3ae" />
          <stop offset="1" stopColor="#0e8f8d" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M0,96 C260,40 520,34 760,62 C1000,90 1220,70 1440,20 L1440,140 L0,140 Z" fill={bottom} />
      <path
        d="M0,92 C260,36 520,30 760,58 C1000,86 1220,66 1440,16"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M360,118 C620,84 900,96 1120,86 C1260,80 1360,62 1440,44"
        fill="none"
        stroke="#19b3ae"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
