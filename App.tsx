
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FooterSection } from './components/sections/FooterSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen font-['Kanit',sans-serif] text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}

export default App;
