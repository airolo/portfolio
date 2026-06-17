import { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
const FloatingChatbot = lazy(() => import('./components/FloatingChatbot'));
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import useActiveSection from './hooks/useActiveSection';
import { navigationLinks } from './data/portfolioData';

const THEME_STORAGE_KEY = 'portfolio-theme';

export default function App() {
  const sectionIds = useMemo(() => navigationLinks.map((link) => link.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),_transparent_34%),linear-gradient(to_bottom,_rgba(255,255,255,1),_rgba(245,245,245,1))] text-zinc-950 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_34%),linear-gradient(to_bottom,_rgba(9,9,11,1),_rgba(18,18,20,1))] dark:text-zinc-50">
      <Navbar links={navigationLinks} activeSection={activeSection} theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingChatbot />
      </Suspense>
    </div>
  );
}
