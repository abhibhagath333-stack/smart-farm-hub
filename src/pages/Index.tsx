import BlogNavbar from "@/components/BlogNavbar";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import IntroSection from "@/components/IntroSection";
import InfographicSection from "@/components/InfographicSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import TechStackSection from "@/components/TechStackSection";
import MediaSection from "@/components/MediaSection";
import TeamSection from "@/components/TeamSection";
import ConclusionSection from "@/components/ConclusionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BlogNavbar />
      <main>
        <HeroSection />
        <AbstractSection />
        <IntroSection />
        <InfographicSection />
        <FeaturesSection />
        <ModulesSection />
        <TechStackSection />
        <MediaSection />
        <TeamSection />
        <ConclusionSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
