import { notFound } from "next/navigation";
import Link from "next/link";
import { Verified } from "lucide-react";
import { ARTISTS, ALBUMS } from "@/lib/data";
import { CoverArt, Eyebrow } from "@/components/Ui";

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ slug: a.slug }));
}

export default function ArtistProfilePage({ params }: { params: { slug: string } }) {
  const artist = ARTISTS.find((a) => a.slug === params.slug);
  if (!artist) return notFound();

  const discography = ALBUMS.filter((al) => al.artistSlug === artist.slug);

  return (
    <main className="max-w-[1240px] mx-auto px-6 py-14">
      <div className="glass rounded-2xl p-8 flex gap-9 items-center flex-wrap mb-12">
        <div
          className="w-[140px] h-[140px] rounded-full flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #E3C077, #4a3a18)" }}
        />
        <div className="flex-1 min-w-[320px]">
          <Eyebrow>{artist.country} · VMG Artist ID {artist.id}</Eyebrow>
          <div className="flex items-center gap-2 mb-3">
            <h1 className="font-display text-3xl font-medium">{artist.name}</h1>
            {artist.verified && <Verified size={19} className="text-gold" />}
          </div>
          <p className="text-white/65 text-sm leading-relaxed max-w-[560px] mb-4">{artist.bio}</p>
          <div className="flex gap-7 flex-wrap">
            {[
              [artist.streams, "Streams"],
              [artist.followers, "Abonnés"],
              [artist.genres.join(", "), "Genres"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-lg font-medium">{v}</div>
                <div className="text-[11px] uppercase tracking-wide text-white/40">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <h2 className="font-display text-2xl font-medium mb-6">Discographie</h2>
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {discography.map((al, i) => (
            <Link key={al.id} href={`/albums/${al.slug}`} className="glass rounded-2xl p-4 flex gap-4 items-center">
              <CoverArt size={64} radius={10} seed={i} />
              <div>
                <div className="text-sm font-semibold">{al.title}</div>
                <div className="text-xs text-white/40 mt-0.5">{al.type} · {al.releaseDate}</div>
              </div>
            </Link>
          ))}
          {discography.length === 0 && (
            <p className="text-white/40 text-sm">Aucune sortie enregistrée pour le moment.</p>
          )}
        </div>
      </section>
    </main>
  );
}
