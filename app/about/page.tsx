import { Footer } from '../components/footer/footer';
import { Navigation } from '../components/navigation/navigation';
import { TrustedSection } from '../components/trusted-section/trusted-section';

export default function About() {
 return (
  <main className="flex flex-col justify-center items-center">
   <Navigation />
   <TrustedSection />
   <Footer />
  </main>
 );
}
