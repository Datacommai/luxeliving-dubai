export type ContactsType = {
 fullname: string;
 tel: number;
 email: string;
 socials: {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  x: string;
 };
 address: string;
 city: string;
};

export enum AmenityTypes {
 AIR_CONDITIONING = 'Air Conditioning',
 POOL = 'Pool',
 GYM = 'Gym',
 PARKING = 'Parking',
 ELEVATOR = 'Elevator',
 SPA = 'Spa',
 GARDEN = 'Garden',
 CONCIERGE = 'Concierge',
 SECURITY = 'Security',
 DEFAULT = 'Default',
}

export enum DestinationTypes {
 MALL = 'Mall',
 PARK = 'Park',
 RESTAURANT = 'Restaurant',
 SCHOOL = 'School',
 AIRPORT = 'Airport',
 DEFAULT = 'Default',
}
