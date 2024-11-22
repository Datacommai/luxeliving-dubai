import { Navigation } from "./components/navigation/navigation";
import { TrustedSection } from "./components/trusted-section/trusted-section";
import { FeaturedHeader } from "./components/featured-header/featured-header";
import { PropertySelection } from "./components/property-selection/property-selection";
import { Footer } from "./components/footer/footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navigation />
      <PropertySelection />
      <FeaturedHeader />
      <TrustedSection />
      <Footer />
    </main>
  );
}
