import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Heart, Award, Users, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const leftSlideVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.4,
      },
    },
  };

  const rightSlideVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.4,
      },
    },
  };

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, readable, and efficient codes.',
      gradient: 'from-blue-500 to-blue-600',
      side: 'left',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive interfaces that provide exceptional user experiences.',
      gradient: 'from-purple-500 to-purple-600',
      side: 'right',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user interactions.',
      gradient: 'from-cyan-500 to-cyan-600',
      side: 'left',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Bringing enthusiasm and dedication to every project, big or small.',
      gradient: 'from-pink-500 to-pink-600',
      side: 'right',
    },
  ];

  const stats = [
    { icon: Award, number: '2+', label: 'Years Experience', gradient: 'from-blue-500 to-purple-500' },
    { icon: Users, number: '20+', label: 'Projects ', gradient: 'from-purple-500 to-pink-500' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Lightbulb, number: '∞', label: 'Ideas Generated', gradient: 'from-pink-500 to-purple-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-orbit-smooth"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-wave-smooth" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-orbit-smooth" style={{ animationDelay: '6s' }}></div>
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
            variants={leftSlideVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={rightSlideVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer with over 1 year of experience creating
            digital solutions that make a difference. I love turning complex problems into
            simple, beautiful, and intuitive designs. My favorite work lies at the intersection of designing and building stong backend frameworks, creating experiences that not only look great but are meticulously built for performance and usability.
          </motion.p>
        </motion.div>

        {/* Main Content - Full Width Layout */}
        <div className="space-y-12 mb-16">
          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={leftSlideVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-400 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-all duration-200`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-400"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
              Technologies I Love
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Next.js'].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={rightSlideVariants}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-blue-200/50 dark:border-blue-700/50"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Framer Motion */}
        <section id="features" className="py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={featuresRef}
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="text-center mb-20"
            >
              <motion.h2
                variants={leftSlideVariants}
                className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
              >
                What I <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">integrate?</span>
              </motion.h2>
              <motion.p
                variants={rightSlideVariants}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                Everything you need to bring your ideas to life with beautiful, intuitive, and performant applications
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={leftSlideVariants}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-400"
                >
                  <div className="text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-105 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-200">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={leftSlideVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
          >
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Create Something Amazing Together
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects.
              Whether you have a clear vision or just an idea, let's bring it to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
              <Heart className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;