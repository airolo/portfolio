import { useEffect, useMemo, useRef, useState } from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OutsideIDE from './components/OutsideIDE';
import Projects from './components/Projects';
import Skills from './components/Skills';
import useActiveSection from './hooks/useActiveSection';
import { navigationLinks } from './data/portfolioData';

export default function App() {
  const sectionIds = useMemo(() => navigationLinks.map((link) => link.href.slice(1)), []);
  const observedSection = useActiveSection(sectionIds);
  const pendingSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!observedSection) {
      return;
    }

    if (pendingSectionRef.current) {
      if (pendingSectionRef.current === observedSection) {
        pendingSectionRef.current = null;
        setActiveSection(observedSection);
      }

      return;
    }

    setActiveSection(observedSection);
  }, [observedSection]);

  const handleSectionClick = (sectionId) => {
    pendingSectionRef.current = sectionId;
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar
        links={navigationLinks}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <OutsideIDE />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}