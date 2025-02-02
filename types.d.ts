// types.d.ts

// PropertyType for Firebase data

enum PropertyTypeEnum {
 SINGLE_FAMILY = 'Single Family',
 MULTI_FAMILY = 'Multi Family',
 CONDOMINIUM = 'Condominium',
 APARTMENT = 'Apartment',
 VILLA = 'Villa',
}

enum Lifestyle {
 LUXURY = 'Luxury',
 MINIMALISM = 'Minimalism',
 MODERN = 'Modern',
 URBAN = 'Urban',
}

type FAQ = {
 question: string;
 answer: string;
};

type Facelity = {
 name: string;
 icon: string;
};

type KeyNearByDestination = {
 minutesFromDestination: string;
 name: string;
 icon: string;
};

type NearByDestinations = {
 description: string;
 keyBenefis: string[];
 keyNearByDestinations: KeyNearByDestination[];
};

type PropertyType = {
 name: string;
 deprecated: boolean;
 projectStatus: string;
 completionDate: string;
 projectGeneralFacts: string;
 information: {
  mainDescription: string;
  smallDescription: string;
  summaryDescription: string;
 };
 furnishing: boolean;
 parking: boolean;
 floors: number[];
 paymentPlan: {
  onBooking: string;
  onCompletion: string;
  uponHandover: string;
 };
 generalInfo: {
  numberOfBedrooms: string[];
  numberOfBathrooms: string[];
 };
 propertySqFt: string[];
 propertyPrice: string[];
 location: string;
 facilities: Facelity[];
 contactInfo: {
  fullname: string;
  telephone: string;
  email: string;
  whatsapp: string;
 };
 media: {
  propertyImages: string[];
 };
 filters: {
  propertyType: PropertyTypeEnum;
  lifestyle: Lifestyle;
  city: string;
  developer: string;
 };
 nearByDestinations: NearByDestinations;
 propertyFAQs?: FAQ[];
};
