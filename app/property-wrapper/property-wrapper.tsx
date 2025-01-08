import PropertyListingHeroWithDelay from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import PropertyListingGalleryWithDelay from '../components/property-listing-components/property-listing-gallery/property-listing-gallery';
import PropertyAmenitiesWithDelay from '../components/property-listing-components/property-listing-amenities/property-listing-amenities';
import PropertyListingDetailsWithDelay from '../components/property-listing-components/property-listing-details/property-listing-details';
import PropertyListingNearbyDestinationsWithDelay from '../components/property-listing-components/property-listing-nearby-destinations/property-listing-nearby-destinations';
import PropertyListingAboutWithDelay from '../components/property-listing-components/property-listing-about/property-listing-about';
import { PropertyListingTabbedGalleryWithDelay } from '../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery';
import { PropertyListingFloorplanShowcaseWithDelay } from '../components/property-listing-components/property-listing-floorplan-showcase/property-listing-floorplan-showcase';
import PropertyListingPaymentWithDelay from '../components/property-listing-components/property-listing-payment/property-listing-payment';
import { PropertyListingDiscoverPropertiesWithDelay } from '../components/property-listing-components/property-listing-discover-properties/property-listing-discover-properties';
import PropertyListingFaqWithDelay from '../components/property-listing-components/property-listing-faq/property-listing-faq';
import PropertyListingContactWithDelay from '../components/property-listing-components/property-listing-contact/property-listing-contact';
import { TrustedSection } from '../components/trusted-section/trusted-section';
import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';

export type PropertyWrapperProps = {
 queryId: string;
};

export const PropertyWrapper = (props: PropertyWrapperProps) => {
 const { queryId } = props;

 console.log('queryId', queryId);

 return (
  <main className="flex flex-col justify-center items-cente">
   <Navigation />
   <PropertyListingHeroWithDelay />
   <PropertyListingGalleryWithDelay />
   <PropertyAmenitiesWithDelay />
   <PropertyListingDetailsWithDelay />
   <PropertyListingNearbyDestinationsWithDelay />
   <PropertyListingAboutWithDelay />
   <PropertyListingTabbedGalleryWithDelay />
   <PropertyListingFloorplanShowcaseWithDelay />
   <PropertyListingPaymentWithDelay />
   <PropertyListingDiscoverPropertiesWithDelay />
   <PropertyListingFaqWithDelay />
   <PropertyListingContactWithDelay />
   <TrustedSection />
   <Footer />
  </main>
 );
};
