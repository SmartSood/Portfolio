import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import ParticleText from './components/ParticleText';
import ScrollProgress from './components/ScrollProgress';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide native cursor immediately
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    // Add global style to hide cursor
    const style = document.createElement('style');
    style.textContent = `
      * { cursor: none !important; }
      html, body { cursor: none !important; }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative" style={{ cursor: 'none' }}>
        <SplashCursor />
        <ScrollProgress />
        
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#030912]"
              style={{ cursor: 'none' }}
            >
              <div className="flex flex-col items-center gap-5">
                <ParticleText />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400"
                >
                  Building useful things
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300" style={{ cursor: 'none' }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;