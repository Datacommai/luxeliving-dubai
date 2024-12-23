import { Navigation } from "../components/navigation/navigation";
import PropertyListingHeroWithDelay from "../components/property-listing-components/property-listing-hero/property-listing-hero";
import { FeatureEnabled } from "../feature-enabled/feature-enabled";
import PropertyListingGalleryWithDelay from "../components/property-listing-components/property-listing-gallery/property-listing-gallery";
import PropertyListingDetailsWithDelay from "../components/property-listing-components/property-listing-details/property-listing-details";
import PropertyAmenitiesWithDelay from "../components/property-listing-components/property-listing-amenities/property-listing-amenities";
import PropertyListingAboutWithDelay from "../components/property-listing-components/property-listing-about/property-listing-about";
import { PropertyListingTabbedGalleryWithDelay } from "../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery";
import { Footer } from "../components/footer/footer";
import PropertyListingNearbyDestinationsWithDelay from "../components/property-listing-components/property-listing-nearby-destinations/property-listing-nearby-destinations";
import { PropertyListingFloorplanShowcaseWithDelay } from "../components/property-listing-components/property-listing-floorplan-showcase/property-listing-floorplan-showcase";
import { TrustedSection } from "../components/trusted-section/trusted-section";
import { PropertyListingDiscoverPropertiesWithDelay } from "../components/property-listing-components/property-listing-discover-properties/property-listing-discover-properties";
import PropertyListingPaymentWithDelay from "../components/property-listing-components/property-listing-payment/property-listing-payment";
import PropertyListingContactWithDelay from "../components/property-listing-components/property-listing-contact/property-listing-contact";

export default function MockPropertyListing() {
  return (
    <FeatureEnabled featureFlag="DEMO_FEATURE">
      <main className="flex flex-col justify-center items-center">
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
        <TrustedSection />
        <PropertyListingContactWithDelay />
        <Footer />
      </main>
    </FeatureEnabled>
  );
}
