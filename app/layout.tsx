import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Firebase } from './firebase/firebase';

const boska = localFont({
 src: [
  {
   path: './fonts/Boska-Light.woff2',
   weight: '300',
   style: 'normal',
  },
  {
   path: './fonts/Boska-Regular.woff2',
   weight: '400',
   style: 'normal',
  },
  {
   path: './fonts/Boska-Bold.woff2',
   weight: '700',
   style: 'normal',
  },
  {
   path: './fonts/Boska-Medium.woff2',
   weight: '500',
   style: 'normal',
  },
 ],
});

export const metadata: Metadata = {
 title: 'Luxeliving Dubai',
 description:
  'Experience Luxury Living with Our Exclusive Property Selections. Discover Elegance, Sophisticated Design, and Unparalleled Amenities for the Discerning Buyer.',
 icons: {
  icon: '/favicon.ico',
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={boska.className}>
    <Firebase />
    {children}
   </body>
  </html>
 );
}
