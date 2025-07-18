import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Draw App',
      description: 'A collaborative drawing application similar to Exalidraw but with enhanced collaborative writing features. Users can create, edit, and collaborate on drawings and documents in real-time with multiple participants.',
      image: '/draw_app.png',
      technologies: ['Next.js', 'Canvas', 'WebSockets', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma','TypeScript','Turborepo'],
      github: 'https://github.com/smartsood/draw_app',
      live: 'https://draw.smarthsood.com',
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 2,
      title: 'Invest IQ',
      description: 'A comprehensive financial education and portfolio assistance application that helps users learn about investing, track their portfolios, and make informed financial decisions with educational content and real-time market data.',
      image: '/invest_iq.png',
      technologies: ['React', 'JavaScript', 'Chart.js', 'Financial APIs', 'O Auth', 'Tailwind CSS','MongoDB','Google Cloud API'],
      github: 'https://github.com/SmartSood/Invest-IQ-Finance-Demo',
      live: 'https://invest-iq.smarthsood.com',
      featured: true, 
      gradient: 'from-green-500 to-blue-500',
    },
    {
      id: 3,
      title: 'Anonymous Chat App',
      description: 'A secure anonymous chat application where users can engage in conversations without revealing their identity. Features include private rooms, message encryption, and real-time messaging with complete privacy protection.',
      image: '/chat_app.png',
      technologies: ['Next.js', 'WebSockets', 'End-to-End Encryption', 'PostgreSQL','Tailwind CSS','TypeScript'],
      github: 'https://github.com/smartsood/chat_app',
      live: 'https://chat.smarthsood.com',
      featured: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Second Brain',
      description: 'A personal knowledge management app where users can store thoughts, ideas, and insights in various formats including previewable YouTube/Twitter links, notes, and shareable content with the world.',
      image: '/second_brain.png',
      technologies: ['React', 'Node.js', 'YouTube API', 'Twitter API', 'MongoDB', 'AWS S3','Tailwind CSS','TypeScript'],
      github: 'https://github.com/smartsood/second_brain_frontend',
      live: 'https://second-brain.smarthsood.com',
      featured: true,
      gradient: 'from-orange-500 to-red-500', 
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-dark-800 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm">
                  <div className="pl-2 relative overflow-hidden">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-primary-500 fill-current" />
                      <span className="text-primary-500 font-semibold text-sm">Featured Project</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentProject].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={projects[currentProject].github}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-lg"
                      >
                        <Github size={20} />
                        Code
                      </motion.a>
                      <motion.a
                        href={projects[currentProject].live}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-purple-lg"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full shadow-lg hover:shadow-purple transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-primary-500" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full shadow-lg hover:shadow-purple transition-all duration-200"
            >
              <ChevronRight size={24} className="text-primary-500" />
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject
                    ? 'bg-primary-500 shadow-glow-purple'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, _index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-hover bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 glass rounded-full text-white hover:text-primary-300 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 glass rounded-full text-white hover:text-primary-300 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-gray-100 to-purple-100 dark:from-gray-600 dark:to-purple-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-purple-100 dark:from-gray-600 dark:to-purple-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
