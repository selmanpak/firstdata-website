import { HomeHeroSection } from "../sections/home/HomeHeroSection";
import { HomeIntroSection } from "../sections/home/HomeIntroSection";
import { HomeWhyTokenizationSection } from "../sections/home/HomeWhyTokenizationSection";
import { HomePlatformFlowSection } from "../sections/home/HomePlatformFlowSection";
import { HomeWhyFirstDataSection } from "../sections/home/HomeWhyFirstDataSection";
import { HomeUseCasesSection } from "../sections/home/HomeUseCasesSection";
import { HomeCtaSection } from "../sections/home/HomeCtaSection";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <HomeIntroSection />
      <HomeWhyTokenizationSection />
      <HomePlatformFlowSection />
      <HomeWhyFirstDataSection />
      <HomeUseCasesSection />
      <HomeCtaSection />
    </main>
  );
}
