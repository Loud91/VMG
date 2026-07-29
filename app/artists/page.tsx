import Link from "next/link";
import { Verified } from "lucide-react";
import { ARTISTS } from "@/lib/data";
import { Eyebrow } from "@/components/Ui";

export default function ArtistsPage() {
  return (
    <main className="max-w-[1240px] mx-auto px-6 py-14">
      <Eyebrow>Roster</Eyebrow>
      <h1 className="font-display text-4xl font-medium mb-8">Nos artistes</h1>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {ARTISTS.map((a) => (
          <Link key={a.id} href={`/artists/${a.slug}`} className="glass rounded-2xl p-6 block hover:border-gold transition">
            <div
              className="w-16 h-16 rounded-full mb-4"
              style={{ background: "linear-gradient(135deg, #E3C077, #4a3a18)" }}
            />
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-lg font-medium">{a.name}</span>
              {a.verified && <Verified size={15} className="text-gold" />}
            </div>
            <div className="text-xs text-white/40 mb-3">{a.genres.join(", ")} · {a.country}</div>
            <div className="flex gap-5">
              <div>
                <div className="font-display text-sm font-medium">{a.streams}</div>
                <div className="text-[10px] uppercase text-white/40">Streams</div>
              </div>
              <div>
                <div className="font-display text-sm font-medium">{a.followers}</div>
                <div className="text-[10px] uppercase text-white/40">Abonnés</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
