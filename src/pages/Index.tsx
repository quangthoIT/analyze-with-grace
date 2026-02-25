import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ValueProposition from "@/components/portfolio/ValueProposition";
import TechStack from "@/components/portfolio/TechStack";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import JourneyTimeline from "@/components/portfolio/JourneyTimeline";
import FooterContact from "@/components/portfolio/FooterContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <div id="toolkit">
        <TechStack />
      </div>
      <ProjectsSection />
      <JourneyTimeline />
      <FooterContact />
    </div>
  );
};

export default Index;
