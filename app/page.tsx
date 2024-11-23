import { Navigation } from './components/navigation/navigation';
import { TrustedSection } from './components/trusted-section/trusted-section';
import { FeaturedHeader } from './components/featured-header/featured-header';
import { HeroSection } from './components/hero-section/hero-section';
import { FeaturedPropertiesSection } from './components/featured-properties-section/featured-properties-section';
import { Footer } from './components/footer/footer';

export default function Home() {
 return (
  <main className="flex flex-col justify-center items-center">
   <Navigation />
   <HeroSection />
   <FeaturedHeader />
   <FeaturedPropertiesSection />
   <TrustedSection />
   <Footer />
  </main>
 );
}
