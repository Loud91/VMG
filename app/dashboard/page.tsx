"use client";

import { useState } from "react";
import { LayoutDashboard, Users, Disc3, DollarSign, BarChart3 } from "lucide-react";
import { ARTISTS, ALBUMS } from "@/lib/data";
import { Eyebrow } from "@/components/Ui";

const TABS = [
  { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: "artists", label: "Artistes", icon: Users },
  { id: "catalog", label: "Catalogue", icon: Disc3 },
  { id: "royalties", label: "Royalties", icon: DollarSign },
  { id: "analytics", label: "Statistiques", icon: BarChart3 },
];

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wide text-white/40 mb-3">{label}</div>
      <div className="font-display text-2xl font-medium">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  const [tab, setTab] = useState("overview");

  return (
    <main className="max-w-[1240px] mx-auto px-6 py-10">
      <Eyebrow>Accès restreint · Label Manager</Eyebrow>
      <h1 className="font-display text-3xl font-medium mb-8">Dashboard VMG</h1>

      <div className="flex gap-2 mb-8 flex-wrap">
        {TABS.map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition ${
                active ? "border-gold text-gold-light bg-gold-dim" : "border-white/10 text-white/50"
              }`}
            >
              <Icon size={14} /> {t.label}
            </button>
          );
        })}
      </div>

      {tab === "overview" && (
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <Kpi label="Revenu (mois)" value="$138,240" />
          <Kpi label="Streams totaux" value="10.2M" />
          <Kpi label="Artistes actifs" value={String(ARTISTS.length)} />
          <Kpi label="Royalties en attente" value="$35,365" />
        </div>
      )}

      {tab === "artists" && (
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left">
                {["Artiste", "ID VMG", "Genres", "Pays", "Streams"].map((h) => (
                  <th key={h} className="px-5 py-3 text-[11px] uppercase tracking-wide text-white/40 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ARTISTS.map((a) => (
                <tr key={a.id} className="border-b border-white/10">
                  <td className="px-5 py-3.5 text-sm font-medium">{a.name}</td>
                  <td className="px-5 py-3.5 text-xs font-mono text-white/50">{a.id}</td>
                  <td className="px-5 py-3.5 text-sm text-white/60">{a.genres.join(", ")}</td>
                  <td className="px-5 py-3.5 text-sm text-white/60">{a.country}</td>
                  <td className="px-5 py-3.5 text-sm">{a.streams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "catalog" && (
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-left">
                {["Titre", "Artiste", "Type", "ISRC", "UPC", "Sortie"].map((h) => (
                  <th key={h} className="px-5 py-3 text-[11px] uppercase tracking-wide text-white/40 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALBUMS.map((al) => (
                <tr key={al.id} className="border-b border-white/10">
                  <td className="px-5 py-3.5 text-sm font-medium">{al.title}</td>
                  <td className="px-5 py-3.5 text-sm text-white/60">{al.artist}</td>
                  <td className="px-5 py-3.5 text-sm text-white/60">{al.type}</td>
                  <td className="px-5 py-3.5 text-xs font-mono text-white/50">{al.isrc}</td>
                  <td className="px-5 py-3.5 text-xs font-mono text-white/50">{al.upc}</td>
                  <td className="px-5 py-3.5 text-sm text-white/60">{al.releaseDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "royalties" && (
        <div className="glass rounded-2xl p-6 text-sm text-white/60">
          Connectez Firestore (collection <code className="text-gold-light">royaltyPayouts</code>) pour afficher les
          soldes et historiques de paiement en temps réel.
        </div>
      )}

      {tab === "analytics" && (
        <div className="glass rounded-2xl p-6 text-sm text-white/60">
          Branchez Firebase Analytics ou BigQuery ici pour les statistiques par pays et par plateforme.
        </div>
      )}
    </main>
  );
}
