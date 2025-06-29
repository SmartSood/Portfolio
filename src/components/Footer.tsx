import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Smarth Sood</h3>
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> and lots of coffee
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <p className="text-gray-400">
              © 2025 Smarth Sood. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>
            Designed and built with modern web technologies. 
            <span className="text-primary-400"> React</span>, 
            <span className="text-primary-400"> TypeScript</span>, 
            <span className="text-primary-400"> Tailwind CSS</span>, and 
            <span className="text-primary-400"> Framer Motion</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;