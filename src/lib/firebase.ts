import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  projectId: "gen-lang-client-0323535464",
  appId: "1:334772954844:web:0dacf9a909fed8feec3619",
  apiKey: "AIzaSyCyQVXApRv5uF5Fh78jHg7AUc1NL88X508",
  authDomain: "gen-lang-client-0323535464.firebaseapp.com",
  storageBucket: "gen-lang-client-0323535464.firebasestorage.app",
  messagingSenderId: "334772954844"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with local persistence
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const FIRESTORE_DATABASE_ID = "ai-studio-teachergradecalc-6447d2c3-df66-49ca-848d-4a77fb64065a";
