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
import Cursor from './components/Cursor';
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
        <Cursor />
        <ScrollProgress />
        
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-900"
              style={{ cursor: 'none' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
                style={{ cursor: 'none' }}
              />
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