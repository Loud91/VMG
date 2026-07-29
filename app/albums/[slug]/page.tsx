import { notFound } from "next/navigation";
import { ALBUMS } from "@/lib/data";
import { CoverArt, PlayFab, Eyebrow } from "@/components/Ui";

const STREAMING = ["Spotify", "Apple Music", "TikTok", "YouTube", "Amazon Music", "Deezer", "Boomplay"];

export function generateStaticParams() {
  return ALBUMS.map((a) => ({ slug: a.slug }));
}

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const album = ALBUMS.find((a) => a.slug === params.slug);
  if (!album) return notFound();

  return (
    <main className="max-w-[1240px] mx-auto px-6 py-14">
      <div className="flex gap-9 items-start flex-wrap mb-12">
        <CoverArt size={220} radius={18} seed={0} src={album.coverUrl} />
        <div className="flex-1 min-w-[320px]">
          <Eyebrow>{album.type} · Sortie le {album.releaseDate}</Eyebrow>
          <h1 className="font-display text-4xl font-medium mb-2">{album.title}</h1>
          <p className="text-white/65 text-sm mb-6">{album.artist}</p>
          <div className="flex items-center gap-3 mb-8">
            <PlayFab size={48} />
            <span className="text-sm font-semibold">Écouter maintenant</span>
          </div>
          <div className="text-xs text-white/40 font-mono space-y-1">
            <div>ISRC : {album.isrc}</div>
            <div>UPC : {album.upc}</div>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-display text-xl font-medium mb-4">Tracklist</h2>
        <div className="glass rounded-2xl overflow-hidden">
          {album.tracklist.map((t, i) => (
            <div
              key={t.title}
              className={`flex items-center gap-4 px-5 py-3.5 ${i < album.tracklist.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <span className="font-display text-sm text-white/40 w-5">{i + 1}</span>
              <span className="flex-1 text-sm font-medium">{t.title}</span>
              <span className="text-xs text-white/40">{t.duration}</span>
              <PlayFab size={30} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-medium mb-4">Écouter sur</h2>
        <div className="flex gap-3 flex-wrap">
          {STREAMING.map((s) => (
            <button
              key={s}
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold transition"
            >
              {s}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
