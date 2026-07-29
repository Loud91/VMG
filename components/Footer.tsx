import { Instagram, Twitter, Youtube } from "lucide-react";

const COLS = [
  { h: "Découvrir", items: ["Artistes", "Albums", "Vidéos", "Playlists"] },
  { h: "Business", items: ["Booking", "Licensing", "Press Kit", "Investisseurs"] },
  { h: "Support", items: ["Aide", "Contact", "Confidentialité", "Conditions"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16 px-6 py-12">
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between gap-10">
        <div className="max-w-[260px]">
          <span className="font-display text-lg font-semibold">VMG</span>
          <p className="text-xs text-white/40 leading-relaxed mt-3">
            Voomle Music Group — label indépendant, écosystème digital officiel de nos artistes.
          </p>
          <div className="flex gap-4 mt-4">
            <Instagram size={16} className="text-white/60" />
            <Twitter size={16} className="text-white/60" />
            <Youtube size={16} className="text-white/60" />
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-3">{c.h}</div>
            <div className="flex flex-col gap-2">
              {c.items.map((i) => (
                <a key={i} href="#" className="text-sm text-white/65 hover:text-white">
                  {i}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 pt-5 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-2">
        <span>© 2026 Voomle Music Group. Tous droits réservés.</span>
        <span>Ouagadougou · Abidjan · Bamako</span>
      </div>
    </footer>
  );
}
