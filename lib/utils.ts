import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AmenityTypes, DestinationTypes } from './contacts/types';

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const openLink = (url: string) => {
 window.open(url, '_blank');
};

export const capitalizeFirstLetter = (str: string) => {
 return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatPrice = (price: string) => {
 const cleanedPrice = price.replace(/,/g, '');
 console.log(cleanedPrice);
 if (cleanedPrice.endsWith('M') || cleanedPrice.endsWith('K')) {
  return cleanedPrice;
 }

 const value = Number(cleanedPrice);

 if (value >= 1000000) {
  return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
 } else if (value >= 1000) {
  return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
 }
 return value.toString();
};

export const sendEmail = (recipient: string, subject: string, body: string) => {
 window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
  subject
 )}&body=${encodeURIComponent(body)}`;
};

export const getRandomMockServerDelay = () => {
 const maxDelay: number = 2500;
 return Math.floor(Math.random() * maxDelay);
};

export const extractRouteId = (id: string) => {
 return id.split('-').join(' ');
};

export const createRouteId = (id: string) => {
 return id.split(' ').join('-');
};

export const getAmenityIcon = (type: string) => {
 let url = '';
 switch (type) {
  case AmenityTypes.AIR_CONDITIONING:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fair-conditioning.svg?alt=media&token=fda540fd-9878-429f-868c-281b2fd657ff';
   break;
  case AmenityTypes.POOL:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fswimming.svg?alt=media&token=c088e7cf-bd00-4255-a68a-a2c9c3b5195d';
   break;
  case AmenityTypes.GYM:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fbarbell.svg?alt=media&token=892d824e-c64a-4e71-be85-828e8c4d34d8';
   break;
  case AmenityTypes.PARKING:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fparking.svg?alt=media&token=9713bf0b-eddc-49d8-82d2-6cd1930d7a44';
   break;
  case AmenityTypes.ELEVATOR:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Felevator.svg?alt=media&token=0d027822-6722-4898-8ff6-5fd520c8a31e';
   break;
  case AmenityTypes.SPA:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fmood-spark.svg?alt=media&token=e86ca0ac-c93b-4f17-b280-ef61f8503419';
   break;
  case AmenityTypes.GARDEN:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fleaf-2.svg?alt=media&token=57e027a3-8235-470c-9fdf-5863cedf71ea';
   break;
  case AmenityTypes.CONCIERGE:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fcongruent-to.svg?alt=media&token=ceb3f629-4ea6-4b9b-bb87-f14a0f91e594';
   break;
  case AmenityTypes.SECURITY:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fshield-half.svg?alt=media&token=0f1d8061-0370-40d9-a310-a1de8b409086';
   break;
  case AmenityTypes.DEFAULT:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fhome-2.svg?alt=media&token=03ea5cec-edc0-4223-b356-23b3907f35a4';
   break;
 }

 return url;
};

export const getLocationIcon = (type: string) => {
 let url = '';

 switch (type) {
  case DestinationTypes.MALL:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fshopping-cart-heart.svg?alt=media&token=5785a774-f994-416c-b01e-78bfc69d39cf';
   break;
  case DestinationTypes.PARK:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fleaf-2.svg?alt=media&token=57e027a3-8235-470c-9fdf-5863cedf71ea';
   break;
  case DestinationTypes.RESTAURANT:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fburger.svg?alt=media&token=00dd189d-021e-4b44-8411-7ed54930ad8b';
   break;
  case DestinationTypes.SCHOOL:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fschool.svg?alt=media&token=0d3c6b41-df01-46a2-8f71-2ea68fcec499';
   break;
  case DestinationTypes.AIRPORT:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fplane.svg?alt=media&token=566ebd43-5d1e-423c-8411-27a17115de20';
   break;
  case DestinationTypes.DEFAULT:
   url =
    'https://firebasestorage.googleapis.com/v0/b/luxelivingdubai-9fb8b.firebasestorage.app/o/icons%2Fflag-pin.svg?alt=media&token=88b3f893-0253-4e8a-9abd-cc57e9555c91';
   break;
 }

 return url;
};
