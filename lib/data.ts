export type Artist = {
  id: string;
  slug: string;
  name: string;
  genres: string[];
  country: string;
  verified: boolean;
  bio: string;
  streams: string;
  followers: string;
};

export type Album = {
  id: string;
  slug: string;
  title: string;
  artistSlug: string;
  artist: string;
  type: "Album" | "EP" | "Single";
  isrc: string;
  upc: string;
  releaseDate: string;
  tracklist: { title: string; duration: string }[];
};

export const ARTISTS: Artist[] = [
  {
    id: "VMG-A014",
    slug: "aicha-konate",
    name: "Aïcha Konaté",
    genres: ["Afropop", "Soul"],
    country: "Burkina Faso",
    verified: true,
    bio: "Figure montante de l'afropop ouest-africaine, Aïcha Konaté mêle rythmes traditionnels burkinabè et productions modernes. Signée VMG depuis 2024.",
    streams: "4.2M",
    followers: "312K",
  },
  {
    id: "VMG-A027",
    slug: "ismael-traore",
    name: "Ismaël Traoré",
    genres: ["Hip-Hop"],
    country: "Mali",
    verified: true,
    bio: "Rappeur et parolier malien connu pour ses freestyles incisifs et sa plume engagée.",
    streams: "2.8M",
    followers: "198K",
  },
  {
    id: "VMG-A031",
    slug: "nafi-sawadogo",
    name: "Nafi Sawadogo",
    genres: ["R&B"],
    country: "Burkina Faso",
    verified: false,
    bio: "Voix R&B émergente, Nafi Sawadogo explore les thèmes de l'amour et de l'exil.",
    streams: "1.6M",
    followers: "94K",
  },
];

export const ALBUMS: Album[] = [
  {
    id: "AL-001",
    slug: "sahel-nights",
    title: "Sahel Nights",
    artistSlug: "aicha-konate",
    artist: "Aïcha Konaté",
    type: "Album",
    isrc: "BF-VMG-26-00114",
    upc: "6 12345 78912 3",
    releaseDate: "2026-06-12",
    tracklist: [
      { title: "Sahel Nights (Intro)", duration: "1:42" },
      { title: "Harmattan Wind", duration: "3:21" },
      { title: "Ouaga la belle", duration: "3:05" },
      { title: "Golden Hour", duration: "2:58" },
      { title: "Sahel Nights (feat. Nafi)", duration: "3:45" },
    ],
  },
  {
    id: "AL-002",
    slug: "harmattan",
    title: "Harmattan",
    artistSlug: "nafi-sawadogo",
    artist: "Nafi Sawadogo",
    type: "EP",
    isrc: "BF-VMG-26-00098",
    upc: "6 12345 78905 5",
    releaseDate: "2026-05-19",
    tracklist: [
      { title: "Harmattan Intro", duration: "4:01" },
      { title: "Loin de toi", duration: "3:12" },
      { title: "Retour", duration: "3:40" },
    ],
  },
];
