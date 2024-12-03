import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navigation/navigation";
import { TrustedSection } from "../components/trusted-section/trusted-section";
import { AboutHeader } from "../components/about-header/about-header";
import { AboutUsSection } from "../components/about-us-section/about-us-section";
import { AboutExpertsSection } from "../components/about-experts-section/about-experts-section";
import { AboutValuesSection } from "../components/about-values-section/about-values-section";

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navigation />
      <AboutHeader />
      <AboutUsSection />
      <TrustedSection />
      <AboutExpertsSection />
      <AboutValuesSection />
      <Footer />
    </main>
  );
}
