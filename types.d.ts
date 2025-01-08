// types.d.ts

// PropertyType for Firebase data
export type PropertyType = {
 name: string;
 deprecated: boolean;
 projectStatus: string;
 completionDate: string;
 projectGeneralFacts: string;
 summaryDescription: string;
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
 facelities: string[];
 contactInfo: {
  fullname: string;
  telephone: string;
  email: string;
  whatsapp: string;
 };
};
