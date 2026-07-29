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
  coverUrl?: string;
  tracklist: { title: string; duration: string }[];
};

export const ARTISTS: Artist[] = [
  {
    id: "VMG-A001",
    slug: "roddy-bg",
    name: "Roddy BG",
    genres: ["Afropop"],
    country: "Burkina Faso",
    verified: true,
    bio: "Roddy BG est un artiste burkinabè passionné par la musique, qui porte les couleurs de VMG avec un son afropop moderne et authentique.",
    streams: "0",
    followers: "0",
  },
];

export const ALBUMS: Album[] = [
  {
    id: "AL-001",
    slug: "moove",
    title: "Moove",
    artistSlug: "roddy-bg",
    artist: "Roddy BG",
    type: "Single",
    isrc: "BF-VMG-26-00001",
    upc: "6 12345 00001 1",
    releaseDate: "2026-07-29",
    coverUrl: "/covers/IMG_3792.jpeg",
    tracklist: [
      { title: "Moove", duration: "3:00" },
    ],
  },
];
