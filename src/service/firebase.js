import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
