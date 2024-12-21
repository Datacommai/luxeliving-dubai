import { Navigation } from '../components/navigation/navigation';
import PropertyListingHeroWithDelay from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import { FeatureEnabled } from '../feature-enabled/feature-enabled';
import PropertyListingGalleryWithDelay from '../components/property-listing-gallery/property-listing-gallery';
import PropertyListingDetailsWithDelay from '../components/property-listing-details/property-listing-details';
import PropertyAmenitiesWithDelay from '../components/property-amenities/property-amenities';
import { PropertyListingTabbedGalleryWithDelay } from '../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery';
import { Footer } from '../components/footer/footer';
import { PropertyListingFloorplanShowcaseWithDelay } from '../components/property-listing-components/property-listing-floorplan-showcase/property-listing-floorplan-showcase';

export default function MockPropertyListing() {
 return (
  <FeatureEnabled featureFlag="DEMO_FEATURE">
   <main className="flex flex-col justify-center items-center">
    <Navigation />
    <PropertyListingHeroWithDelay />
    <PropertyListingGalleryWithDelay />
    <PropertyAmenitiesWithDelay />
    <PropertyListingDetailsWithDelay />
    <PropertyListingTabbedGalleryWithDelay />
    <PropertyListingFloorplanShowcaseWithDelay />
    <Footer />
   </main>
  </FeatureEnabled>
 );
}
