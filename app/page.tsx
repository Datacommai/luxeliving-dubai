import { Navigation } from "./components/navigation/navigation";
import { FeaturedHeader } from "./components/featured-header/featured-header";
import { PropertySelection } from "./components/property-selection/property-selection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navigation />
      <FeaturedHeader />
      <PropertySelection />
    </main>
  );
}
