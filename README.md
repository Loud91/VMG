# VMG — Voomle Music Group

Écosystème digital officiel du label VMG. Next.js 14 (App Router) + Tailwind CSS + Firebase.

## Pages incluses dans ce squelette

- `/` — Accueil publique (hero, artiste à la une, sorties, chart, événements, newsletter)
- `/artists` — Liste des artistes
- `/artists/[slug]` — Profil artiste (bio, discographie)
- `/albums/[slug]` — Page album (tracklist, ISRC/UPC, liens streaming)
- `/dashboard` — Dashboard label (vue d'ensemble, artistes, catalogue)

Les données viennent pour l'instant de `lib/data.ts` (mock). Elles sont structurées pour
correspondre 1:1 au schéma Firestore ci-dessous — il suffit de remplacer chaque export par
une requête Firestore (exemple fourni dans le fichier).

## 1. Installer et lancer en local

```bash
npm install
cp .env.example .env.local   # renseigner vos clés Firebase (étape 2)
npm run dev
```

Le site tourne sur http://localhost:3000

## 2. Configurer Firebase

1. Va sur https://console.firebase.google.com → **Créer un projet**
2. Dans le projet, ajoute une **application Web** (icône `</>`) → copie la config
3. Colle les valeurs dans `.env.local` (voir `.env.example`)
4. Active dans la console Firebase :
   - **Authentication** → Email/Password + Google
   - **Firestore Database** → mode production
   - **Storage** (pour les covers, photos, vidéos)

### Schéma Firestore recommandé

```
artists/{artistId}
  name, slug, bio, country, languages[], genres[],
  socials{ instagram, twitter, tiktok }, verified: boolean,
  streams, followers, vmgArtistId, profilePictureUrl

albums/{albumId}
  title, slug, artistId, type: "Album"|"EP"|"Single",
  coverUrl, isrc, upc, releaseDate, credits{ producers[], songwriters[] },
  streamingLinks{ spotify, appleMusic, tiktok, youtube, amazonMusic, deezer, boomplay }

songs/{songId}
  title, albumId, artistId, duration, lyrics, isrc, audioUrl

videos/{videoId}
  title, artistId, type: "Official"|"Live"|"BTS"|"Interview", url, thumbnailUrl

events/{eventId}
  title, artistId, date, venue, city, country, ticketUrl

news/{articleId}
  title, body, category, publishedAt, coverUrl

contracts/{contractId}
  artistId, type: "360"|"Distribution"|"Licence", startDate, durationYears

royaltyPayouts/{payoutId}
  artistId, amount, period, status, paidAt

users/{uid}   (fans)
  displayName, email, favorites[], playlists[], subscriptions[]
```

## 3. Déployer

### Option A — Vercel (recommandé pour Next.js)

```bash
npm install -g vercel
vercel
```

Suis les instructions, puis ajoute tes variables d'environnement Firebase dans
**Vercel → Project Settings → Environment Variables**. Chaque `git push` redéploie
automatiquement si tu connectes un repo GitHub.

### Option B — Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choisir "Use an existing project", output dir: .next (avec adaptateur) ou "out" en export statique
npm run build
firebase deploy
```

Pour du contenu 100% dynamique (App Router, API routes), Vercel est plus simple.
Firebase Hosting convient bien si le site est exporté en statique (`next export`)
ou combiné avec Cloud Functions/Cloud Run.

## 4. Prochaines étapes suggérées

- Brancher l'authentification Firebase (Email, Google, Apple) sur `/dashboard` et l'espace fan
- Remplacer `lib/data.ts` par de vraies requêtes Firestore
- Ajouter l'upload de covers/audio vers Firebase Storage
- Ajouter Stripe/PayPal pour la boutique et les abonnements
- Ajouter next-intl ou i18next pour le multilingue (FR, EN, Mooré, Dioula, Fulfulde, Bissa...)
