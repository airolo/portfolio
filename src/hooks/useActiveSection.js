import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const resolveActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.35;
      let currentSection = sectionIds[0] ?? '';

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (!element) {
          return;
        }

        const { top } = element.getBoundingClientRect();

        if (top <= triggerPoint) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    let frameId = 0;

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(resolveActiveSection);
    };

    resolveActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
