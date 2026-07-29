"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/artists", label: "Artistes" },
  { href: "/albums", label: "Albums" },
  { href: "/dashboard", label: "Dashboard" },
];

function Mark() {
  return (
    <div className="flex items-end gap-[2px] h-6">
      {[0.5, 1, 0.7, 1, 0.4].map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded bg-gradient-to-b from-gold-light to-gold"
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-ink/75 border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex items-center gap-2">
            <Mark />
            <span className="font-display text-lg font-semibold tracking-wide">VMG</span>
          </Link>
          <nav className="hidden md:flex gap-7">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-white/65 hover:text-white transition">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Search size={18} className="text-white/60 cursor-pointer" />
          <button className="hidden md:block text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-b from-gold-light to-gold text-[#1A1405]">
            Connexion
          </button>
          <Menu size={20} className="md:hidden cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink">
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="font-display text-lg font-semibold">VMG</span>
            <X size={22} onClick={() => setOpen(false)} className="cursor-pointer" />
          </div>
          <div className="flex flex-col p-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl py-4 border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
