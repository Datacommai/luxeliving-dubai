import { Navigation } from '../components/navigation/navigation';
import PropertyListingHeroWithDelay from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import { FeatureEnabled } from '../feature-enabled/feature-enabled';
import { PropertyListingTabbedGalleryWithDelay } from '../components/property-listing-components/property-listing-tabbed-gallery/property-listing-tabbed-gallery';
import { Footer } from '../components/footer/footer';
import PropertyListingGalleryWithDelay from '../components/property-listing-components/property-listing-gallery/property-listing-gallery';
import PropertyAmenitiesWithDelay from '../components/property-listing-components/property-listing-amenities/property-listing-amenities';
import PropertyListingDetailsWithDelay from '../components/property-listing-components/property-listing-details/property-listing-details';
import PropertyListingAboutWithDelay from '../components/property-listing-components/property-listing-about/property-listing-about';

export default function MockPropertyListing() {
 return (
  <FeatureEnabled featureFlag="DEMO_FEATURE">
   <main className="flex flex-col justify-center items-center">
    <Navigation />
    <PropertyListingHeroWithDelay />
    <PropertyListingGalleryWithDelay />
    <PropertyAmenitiesWithDelay />
    <PropertyListingDetailsWithDelay />
    <PropertyListingAboutWithDelay />
    <PropertyListingTabbedGalleryWithDelay />
    <Footer />
   </main>
  </FeatureEnabled>
 );
}
