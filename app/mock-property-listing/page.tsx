import { Navigation } from '../components/navigation/navigation';
import PropertyListingHeroServerComponent from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import { FeatureEnabled } from '../feature-enabled/feature-enabled';
import PropertyListingGalleryServerComponent from '../components/property-listing-components/property-listing-gallery/property-listing-gallery';
import PropertyListingDetailsServerComponent from '../components/property-listing-components/property-listing-details/property-listing-details';
import PropertyAmenitiesServerComponent from '../components/property-listing-components/property-listing-amenities/property-listing-amenities';
import PropertyListingAboutServerComponent from '../components/property-listing-components/property-listing-about/property-listing-about';
import { PropertyListingTabbedGalleryServerComponent } from '../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery';
import { Footer } from '../components/footer/footer';
import PropertyListingNearbyDestinationsServerComponent from '../components/property-listing-components/property-listing-nearby-destinations/property-listing-nearby-destinations';
import { PropertyListingFloorplanShowcaseServerComponent } from '../components/property-listing-components/property-listing-floorplan-showcase/property-listing-floorplan-showcase';
import { TrustedSection } from '../components/trusted-section/trusted-section';
import { PropertyListingDiscoverPropertiesServerComponent } from '../components/property-listing-components/property-listing-discover-properties/property-listing-discover-properties';
import PropertyListingPaymentServerComponent from '../components/property-listing-components/property-listing-payment/property-listing-payment';
import PropertyListingContactServerComponent from '../components/property-listing-components/property-listing-contact/property-listing-contact';
import PropertyListingFaqServerComponent from '../components/property-listing-components/property-listing-faq/property-listing-faq';

export default function MockPropertyListing() {
 return (
  <FeatureEnabled featureFlag="DEMO_FEATURE">
   <main className="flex flex-col justify-center items-center">
    <Navigation />
    <PropertyListingHeroServerComponent useMockData={true} queryId="" />
    <PropertyListingGalleryServerComponent useMockData={true} queryId="" />
    <PropertyAmenitiesServerComponent useMockData={true} queryId="" />
    <PropertyListingDetailsServerComponent useMockData={true} queryId="" />
    <PropertyListingNearbyDestinationsServerComponent
     useMockData={true}
     queryId=""
    />
    <PropertyListingAboutServerComponent useMockData={true} queryId="" />
    <PropertyListingTabbedGalleryServerComponent
     useMockData={true}
     queryId=""
    />
    <PropertyListingFloorplanShowcaseServerComponent
     useMockData={true}
     queryId=""
    />
    <PropertyListingPaymentServerComponent useMockData={true} queryId="" />
    <PropertyListingDiscoverPropertiesServerComponent
     useMockData={true}
     queryId=""
    />
    <PropertyListingFaqServerComponent useMockData={true} queryId="" />
    <PropertyListingContactServerComponent useMockData={true} queryId="" />
    <TrustedSection />
    <Footer />
   </main>
  </FeatureEnabled>
 );
}
