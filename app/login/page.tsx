"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { Eyebrow } from "@/components/Ui";

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: any) {
      setError("Connexion Google impossible. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-[440px] mx-auto px-6 py-20">
      <Eyebrow>Espace VMG</Eyebrow>
      <h1 className="font-display text-3xl font-medium mb-8">Connexion</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="text-sm font-semibold px-5 py-3 rounded-full bg-gradient-to-b from-gold-light to-gold text-[#1A1405] disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-white/40">ou</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <button
        onClick={handleGoogle}
        disabled={loading}
        className="w-full text-sm font-semibold px-5 py-3 rounded-full border border-white/15 text-white/80 disabled:opacity-50"
      >
        Continuer avec Google
      </button>

      <p className="text-sm text-white/40 mt-8 text-center">
        Pas encore de compte ?{" "}
        <Link href="/signup" className="text-gold-light font-medium">
          Créer un compte
        </Link>
      </p>
    </main>
  );
}
