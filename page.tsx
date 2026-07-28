import Link from "next/link";
import { MapPin, Heart, TrendingUp } from "lucide-react";
import { CoverArt, PlayFab, SectionHeader, Eyebrow } from "@/components/Ui";
import { ARTISTS, ALBUMS } from "@/lib/data";

const TRENDING_SONGS = [
  { title: "Ouaga Freestyle", artist: "Ismaël Traoré", plays: "2.1M", dur: "3:12" },
  { title: "Sahel Nights (feat. Nafi)", artist: "Aïcha Konaté", plays: "1.8M", dur: "3:45" },
  { title: "Golden Hour", artist: "Fatou Zerbo", plays: "980K", dur: "2:58" },
];

const EVENTS = [
  { day: "14", month: "AOÛT", title: "VMG Live Night", city: "Ouagadougou, BF" },
  { day: "22", month: "AOÛT", title: "Tournée Harmattan", city: "Bobo-Dioulasso, BF" },
  { day: "05", month: "SEPT", title: "Festival Sahel Sons", city: "Abidjan, CI" },
];

export default function HomePage() {
  const heroAlbum = ALBUMS[0];

  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-12">
        <div className="max-w-[1240px] mx-auto rounded-3xl border border-gold overflow-hidden relative p-8 md:p-16 flex items-center gap-12 flex-wrap"
          style={{ background: "linear-gradient(120deg, #1a1712 0%, #0d0d0d 55%, #14110a 100%)" }}>
          <div className="flex-1 min-w-[320px] relative z-10">
            <Eyebrow>Nouvelle sortie · VMG Records</Eyebrow>
            <h1 className="font-display text-[clamp(34px,5.5vw,58px)] font-medium leading-[1.05] tracking-tight mb-4">
              {heroAlbum.title}
            </h1>
            <p className="text-white/65 max-w-[460px] leading-relaxed mb-7">
              Le nouvel album d&apos;<strong className="text-white font-semibold">{heroAlbum.artist}</strong> —
              douze titres entre afropop et soul du Sahel, produit à Ouagadougou.
            </p>
            <div className="flex items-center gap-5">
              <Link href={`/albums/${heroAlbum.slug}`} className="flex items-center gap-3">
                <PlayFab />
                <span className="text-sm font-semibold">Écouter l&apos;album</span>
              </Link>
              <Link
                href={`/albums/${heroAlbum.slug}`}
                className="text-sm font-semibold px-5 py-3 rounded-full border border-white/15 text-white/65"
              >
                Voir le tracklist
              </Link>
            </div>
          </div>
          <CoverArt size={220} radius={18} seed={0} />
        </div>
      </section>

      {/* Featured artist */}
      <section className="max-w-[1240px] mx-auto px-6 py-14">
        <SectionHeader eyebrow="Artiste à la une" title={ARTISTS[0].name} />
        <div className="glass rounded-2xl p-8 flex gap-9 items-center flex-wrap">
          <div
            className="w-[140px] h-[140px] rounded-full flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #E3C077, #4a3a18)" }}
          />
          <div className="flex-1 min-w-[320px]">
            <h3 className="font-display text-2xl font-medium mb-2">{ARTISTS[0].name}</h3>
            <p className="text-white/65 text-sm leading-relaxed max-w-[560px] mb-4">{ARTISTS[0].bio}</p>
            <div className="flex gap-7 flex-wrap">
              {[
                [ARTISTS[0].streams, "Streams"],
                [ARTISTS[0].followers, "Abonnés"],
                [ARTISTS[0].country, "Pays"],
                [ARTISTS[0].genres.join(", "), "Genres"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-lg font-medium">{v}</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/40">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <Link
            href={`/artists/${ARTISTS[0].slug}`}
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-b from-gold-light to-gold text-[#1A1405]"
          >
            Voir le profil
          </Link>
        </div>
      </section>

      {/* Latest releases */}
      <section className="max-w-[1240px] mx-auto px-6 py-8">
        <SectionHeader eyebrow="Nouveautés" title="Dernières sorties" cta="Tout voir" />
        <div className="hscroll">
          {ALBUMS.map((a, i) => (
            <Link key={a.id} href={`/albums/${a.slug}`} className="w-[168px] flex-shrink-0">
              <div className="relative">
                <CoverArt size={168} seed={i} />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-ink/75 text-gold-light px-2 py-1 rounded-full">
                  {a.type}
                </span>
              </div>
              <div className="text-sm font-semibold mt-2.5">{a.title}</div>
              <div className="text-xs text-white/40 mt-0.5">{a.artist}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending songs */}
      <section className="max-w-[1240px] mx-auto px-6 py-8">
        <SectionHeader eyebrow="Chart" title="Titres tendance" cta="Playlist complète" />
        <div className="glass rounded-2xl overflow-hidden">
          {TRENDING_SONGS.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-center gap-4 px-5 py-3.5 ${i < TRENDING_SONGS.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <span className="font-display text-sm text-white/40 w-5">{i + 1}</span>
              <CoverArt size={44} radius={8} seed={i} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{s.title}</div>
                <div className="text-xs text-white/40">{s.artist}</div>
              </div>
              <div className="flex items-center gap-1.5 text-white/40">
                <TrendingUp size={12} />
                <span className="text-[11.5px]">{s.plays}</span>
              </div>
              <span className="text-xs text-white/40 w-9 text-right">{s.dur}</span>
              <Heart size={15} className="text-white/40 cursor-pointer" />
              <PlayFab size={32} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="max-w-[1240px] mx-auto px-6 py-8">
        <SectionHeader eyebrow="Live" title="Événements à venir" cta="Billetterie" />
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {EVENTS.map((e) => (
            <div key={e.title} className="glass rounded-2xl p-5 flex gap-4 items-center">
              <div className="w-14 h-14 rounded-xl bg-gold-dim flex flex-col items-center justify-center flex-shrink-0">
                <div className="font-display text-lg font-semibold text-gold leading-none">{e.day}</div>
                <div className="text-[9.5px] text-gold-light tracking-wide">{e.month}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">{e.title}</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <MapPin size={12} className="text-white/40" />
                  <span className="text-xs text-white/40">{e.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[1240px] mx-auto px-6 py-14">
        <div
          className="rounded-3xl border border-gold p-8 md:p-14 flex justify-between items-center gap-6 flex-wrap"
          style={{ background: "linear-gradient(120deg, rgba(200,160,69,0.09), rgba(13,13,13,0))" }}
        >
          <div className="max-w-[420px]">
            <h3 className="font-display text-2xl font-medium mb-2">Restez connecté à VMG</h3>
            <p className="text-sm text-white/65 leading-relaxed">
              Recevez les sorties, tournées et actualités de nos artistes directement par email.
            </p>
          </div>
          <form className="flex gap-2.5 flex-1 max-w-[420px] min-w-[280px]">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm outline-none"
            />
            <button className="text-sm font-semibold px-5 py-3 rounded-full bg-gradient-to-b from-gold-light to-gold text-[#1A1405] whitespace-nowrap">
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
