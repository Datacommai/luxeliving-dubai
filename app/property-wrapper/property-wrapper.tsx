import PropertyListingHeroServerComponent from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import PropertyListingGalleryServerComponent from '../components/property-listing-components/property-listing-gallery/property-listing-gallery';
import PropertyAmenitiesServerComponent from '../components/property-listing-components/property-listing-amenities/property-listing-amenities';
import PropertyListingDetailsServerComponent from '../components/property-listing-components/property-listing-details/property-listing-details';
// import PropertyListingNearbyDestinationsServerComponent from '../components/property-listing-components/property-listing-nearby-destinations/property-listing-nearby-destinations';
import PropertyListingAboutServerComponent from '../components/property-listing-components/property-listing-about/property-listing-about';
import { PropertyListingTabbedGalleryServerComponent } from '../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery';
// import { PropertyListingFloorplanShowcaseServerComponent } from '../components/property-listing-components/property-listing-floorplan-showcase/property-listing-floorplan-showcase';
import PropertyListingPaymentServerComponent from '../components/property-listing-components/property-listing-payment/property-listing-payment';
import { PropertyListingDiscoverPropertiesServerComponent } from '../components/property-listing-components/property-listing-discover-properties/property-listing-discover-properties';
import PropertyListingFaqServerComponent from '../components/property-listing-components/property-listing-faq/property-listing-faq';
import PropertyListingContactServerComponent from '../components/property-listing-components/property-listing-contact/property-listing-contact';
import { TrustedSection } from '../components/trusted-section/trusted-section';
import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';

export type PropertyWrapperProps = {
 queryId: string;
};

export const PropertyWrapper = (props: PropertyWrapperProps) => {
 const { queryId } = props;

 const useMockData: boolean = false;

 return (
  <main className="flex flex-col justify-center items-cente">
   <Navigation />
   <PropertyListingHeroServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   <PropertyListingGalleryServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   <PropertyAmenitiesServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   <PropertyListingDetailsServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   {/* <PropertyListingNearbyDestinationsServerComponent
    useMockData={useMockData}
    queryId={queryId}
   /> */}
   <PropertyListingAboutServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   <PropertyListingTabbedGalleryServerComponent
    useMockData={useMockData}
    queryId={queryId}
   />
   {/* <PropertyListingFloorplanShowcaseServerComponent
    useMockData={useMockData}
    queryId={queryId}
   /> */}
   <PropertyListingPaymentServerComponent useMockData={useMockData} />
   <PropertyListingDiscoverPropertiesServerComponent
    useMockData={useMockData}
   />
   <PropertyListingFaqServerComponent useMockData={useMockData} />
   <PropertyListingContactServerComponent useMockData={useMockData} />
   <TrustedSection />
   <Footer />
  </main>
 );
};
