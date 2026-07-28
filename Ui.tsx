import { Music2, Play } from "lucide-react";

const SEEDS = [
  "linear-gradient(135deg, #E3C077, #6b5220)",
  "linear-gradient(135deg, #8a7040, #C8A045)",
  "linear-gradient(135deg, #3a3a3a, rgba(227,192,119,0.35))",
  "linear-gradient(135deg, #C8A045, #1c1c1c)",
];

export function CoverArt({
  size = 168,
  radius = 14,
  seed = 0,
}: {
  size?: number;
  radius?: number;
  seed?: number;
}) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: SEEDS[seed % SEEDS.length],
      }}
    >
      <Music2 size={size * 0.28} color="rgba(255,255,255,0.35)" />
    </div>
  );
}

export function PlayFab({ size = 44 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center cursor-pointer"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(180deg, #E3C077, #C8A045)",
        boxShadow: "0 8px 24px rgba(200,160,69,0.35)",
      }}
    >
      <Play size={size * 0.4} color="#1A1405" fill="#1A1405" style={{ marginLeft: 2 }} />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-body text-[11.5px] tracking-[2px] uppercase text-gold font-semibold mb-2">
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  cta,
}: {
  eyebrow: string;
  title: string;
  cta?: string;
}) {
  return (
    <div className="flex justify-between items-end gap-4 flex-wrap mb-6">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[clamp(22px,3vw,30px)] font-medium m-0">{title}</h2>
      </div>
      {cta && (
        <button className="flex items-center gap-1 text-sm font-semibold text-white/60">
          {cta} →
        </button>
      )}
    </div>
  );
}
