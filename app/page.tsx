import { Navigation } from './components/navigation/navigation';
import { TrustedSection } from './components/trusted-section/trusted-section';
import { FeaturedHeader } from './components/featured-header/featured-header';
import { HeroSection } from './components/hero-section/hero-section';

export default function Home() {
 return (
  <main className="flex flex-col justify-center items-center">
   <Navigation />
   <HeroSection />
   <FeaturedHeader />
   <TrustedSection />
  </main>
 );
}
