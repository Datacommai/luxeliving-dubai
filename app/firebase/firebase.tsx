'use client';
import { initializeAnalytics } from '@/lib/firebase/firebase';
import { useEffect } from 'react';

export const Firebase = () => {
 useEffect(() => {
  initializeAnalytics();
  return () => {
   console.log('Firebase Analytics unmounted');
  };
 }, []);

 return <></>;
};
