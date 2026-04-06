// ─────────────────────────────────────────────
// app/page.tsx
// ─────────────────────────────────────────────

import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950">
      {/* Subtle grid background */}
      <GridBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
