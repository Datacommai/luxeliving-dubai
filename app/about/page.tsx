import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navigation/navigation";
import { TrustedSection } from "../components/trusted-section/trusted-section";
import { AboutHeader } from "../components/about-header/about-header";
import { AboutUsSection } from "../components/about-us-section/about-us-section";
import { AboutExpertsSection } from "../components/about-experts-section/about-experts-section";
import { AboutPurposeSection } from "../components/about-purpose-section/about-purpose-section";

export default function About() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navigation />
      <AboutHeader />
      <AboutUsSection />
      <AboutPurposeSection />
      <AboutExpertsSection />
      <AboutPurposeSection />
      <TrustedSection />

      <Footer />
    </main>
  );
}
