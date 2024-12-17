import { Navigation } from '../components/navigation/navigation';
import PropertyListingHeroWithDelay from '../components/property-listing-components/property-listing-hero/property-listing-hero';
import { FeatureEnabled } from '../feature-enabled/feature-enabled';

export default function MockPropertyListing() {
 return (
  <FeatureEnabled featureFlag="DEMO_FEATURE">
   <main className="flex flex-col justify-center items-center">
    <Navigation />
    <PropertyListingHeroWithDelay />
   </main>
  </FeatureEnabled>
 );
}
