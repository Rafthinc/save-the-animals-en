import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { EducationalBenefitsSection } from "./components/EducationalBenefitsSection";
import { GameFeaturesSection } from "./components/GameFeaturesSection";
import { HabitatInfoSection } from "./components/HabitatInfoSection";
import { EducatorsSection } from "./components/EducatorsSection";
import { ScreenshotsSection } from "./components/ScreenshotsSection";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <EducationalBenefitsSection />
        <GameFeaturesSection />
        <HabitatInfoSection />
        <EducatorsSection />
        <ScreenshotsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
