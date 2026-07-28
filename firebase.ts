// Firebase setup for VMG — Voomle Music Group
// 1. Create a project at https://console.firebase.google.com
// 2. Enable: Authentication (Email + Google), Firestore, Storage
// 3. Copy your web app config into .env.local (see .env.example)

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;

/*
  Suggested Firestore collections (see README.md for full schema):
  - artists/{artistId}
  - albums/{albumId}
  - songs/{songId}
  - videos/{videoId}
  - events/{eventId}
  - news/{articleId}
  - users/{uid}            (fans)
  - contracts/{contractId}
  - royaltyPayouts/{payoutId}
*/
