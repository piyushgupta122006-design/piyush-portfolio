import React from 'react';
import { IntroPreloader } from './components/ui/intro-preloader';
import { ScrollExpandHero } from './components/sections/ScrollExpandHero';
import StatementSection from './components/sections/StatementSection';
import TechStackSection from './components/sections/TechStackSection';
import EthosSection from './components/sections/EthosSection';
import ProjectsSection from './components/sections/ProjectsSection';
import StatsBentoSection from './components/sections/StatsBentoSection';
import ContactSection from './components/sections/ContactSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll synced with GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <>
      <IntroPreloader />
      <main className="w-full min-h-screen bg-black text-cream selection:bg-cream selection:text-black">
        <ScrollExpandHero />
        <StatementSection />
        <TechStackSection />
        <EthosSection />
        <ProjectsSection />
        <StatsBentoSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
