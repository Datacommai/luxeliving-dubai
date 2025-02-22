import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Firebase } from './firebase/firebase';
import { ChatbotWrapper } from './components/ai-widget/chatbot-wrapper';
import { HOST_URL, PREVIEW_LOGO_URL } from '@/lib/constants/contstants';

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
 openGraph: {
  title: 'Luxeliving Dubai',
  description:
   'Experience Luxury Living with Our Exclusive Property Selections. Discover Elegance, Sophisticated Design, and Unparalleled Amenities for the Discerning Buyer',
  url: HOST_URL,
  siteName: 'Luxeliving Dubai',
  images: [
   {
    url: PREVIEW_LOGO_URL,
    width: 1200,
    height: 630,
    alt: 'Easebot logo',
   },
  ],
 },
 twitter: {
  title: 'Luxeliving Dubai',
  description:
   'Experience Luxury Living with Our Exclusive Property Selections. Discover Elegance, Sophisticated Design, and Unparalleled Amenities for the Discerning Buyer.',
  creator: '@luxelivingdubai',
  images: [PREVIEW_LOGO_URL],
 },
 robots: {
  index: true,
  follow: true,
 },
 keywords: [
  'Dubai Luxury Real Estate',
  'Villas for Sale in Palm Jebel Ali',
  'Luxury Homes for Sale in Dubai',
  'High-End Properties in Nad Al Sheba Gardens',
  'Townhouses for Sale in Villanova, Dubai',
  'Dubai Real Estate for Canadian Investors',
  'Premium Villas with Private Lagoons in Dubai',
  'Standalone Villas by Emaar in Dubai',
  'Waterfront Properties in Palm Jebel Ali',
  'Exclusive Gated Community Homes in Dubai',
 ],
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
    <ChatbotWrapper />
   </body>
  </html>
 );
}
