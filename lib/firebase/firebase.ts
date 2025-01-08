import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { PropertyType } from '@/types';
import { PROPERTY_DB_ID } from './types';

const firebaseConfig = {
 apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
 authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
 storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
 measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

export const initializeAnalytics = () => {
 if (typeof window !== 'undefined') {
  getAnalytics(app);
  console.log('Firebase Analytics initialized');
 }
};

export const getProperties = async () => {
 try {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, PROPERTY_DB_ID));
  const data = querySnapshot.docs.map((doc) => ({
   ...doc.data(),
  })) as PropertyType[];

  return data;
 } catch (error) {
  console.error('Error getting user data:', (error as Error).message);
 }
};

export const getProperty = async (id: string) => {
 try {
  const db = getFirestore();
  const docRef = await getDocs(collection(db, PROPERTY_DB_ID));
  const data = docRef.docs.map((doc) => ({
   ...doc.data(),
  })) as PropertyType[];

  return data.find((property) => property.name === id);
 } catch (error) {
  console.error('Error getting user data:', (error as Error).message);
 }
};
