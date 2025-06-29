import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-primary-500 to-primary-600' },
        { name: 'TypeScript', level: 90, color: 'from-secondary-500 to-secondary-600' },
        { name: 'Next.js', level: 85, color: 'from-accent-500 to-accent-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-primary-600 to-accent-500' },
        { name: 'Framer Motion', level: 88, color: 'from-accent-600 to-primary-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-primary-500 to-secondary-500' },
        { name: 'Python', level: 85, color: 'from-secondary-500 to-accent-500' },
        { name: 'PostgreSQL', level: 88, color: 'from-accent-500 to-primary-500' },
        { name: 'MongoDB', level: 82, color: 'from-primary-600 to-secondary-600' },
        { name: 'GraphQL', level: 80, color: 'from-secondary-600 to-accent-600' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, color: 'from-primary-500 to-accent-500' },
        { name: 'Docker', level: 85, color: 'from-accent-500 to-secondary-500' },
        { name: 'AWS', level: 80, color: 'from-secondary-500 to-primary-500' },
        { name: 'Figma', level: 88, color: 'from-primary-600 to-accent-600' },
        { name: 'Kubernetes', level: 85, color: 'from-accent-600 to-secondary-600' },
      ],
    },
  ];

  // Technology stack with individual colors and improved styling
  const techStack = [
    { name: 'React', color: 'from-blue-500 to-cyan-500', textColor: 'text-blue-700 dark:text-blue-300' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700', textColor: 'text-blue-800 dark:text-blue-200' },
    { name: 'Node.js', color: 'from-green-500 to-green-600', textColor: 'text-green-700 dark:text-green-300' },
    { name: 'Python', color: 'from-yellow-500 to-blue-500', textColor: 'text-yellow-700 dark:text-yellow-300' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600', textColor: 'text-blue-700 dark:text-blue-300' },
    { name: 'MongoDB', color: 'from-green-600 to-green-700', textColor: 'text-green-700 dark:text-green-300' },
    { name: 'AWS', color: 'from-orange-500 to-orange-600', textColor: 'text-orange-700 dark:text-orange-300' },
    { name: 'Docker', color: 'from-blue-500 to-blue-600', textColor: 'text-blue-700 dark:text-blue-300' },
    { name: 'GraphQL', color: 'from-pink-500 to-purple-500', textColor: 'text-pink-700 dark:text-pink-300' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900', textColor: 'text-gray-700 dark:text-gray-300' },
    { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500', textColor: 'text-teal-700 dark:text-teal-300' },
    { name: 'Framer Motion', color: 'from-purple-500 to-pink-500', textColor: 'text-purple-700 dark:text-purple-300' },
    { name: 'Jest', color: 'from-red-500 to-orange-500', textColor: 'text-red-700 dark:text-red-300' },
    { name: 'Git', color: 'from-orange-600 to-red-600', textColor: 'text-orange-700 dark:text-orange-300' },
    { name: 'Figma', color: 'from-purple-500 to-pink-500', textColor: 'text-purple-700 dark:text-purple-300' },
    { name: 'Redux', color: 'from-purple-600 to-purple-700', textColor: 'text-purple-700 dark:text-purple-300' },
    { name: 'Express.js', color: 'from-gray-600 to-gray-700', textColor: 'text-gray-700 dark:text-gray-300' },
    { name: 'Websockets', color: 'from-gray-800 to-black', textColor: 'text-gray-700 dark:text-gray-300' },
  ];

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

  const techItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
      
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-hover bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-500 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Skill Cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white"
          >
            Technology Stack
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {techStack.map((tech, _index) => (
              <motion.div
                key={tech.name}
                variants={techItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}>
                  <span className={`font-medium text-sm ${tech.textColor.includes('dark:text-') ? 'text-white' : tech.textColor} group-hover:text-white transition-colors duration-300`}>
                    {tech.name}
                  </span>
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50"
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Always Learning
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and staying up-to-date with the latest trends in web development. 
              Currently diving deeper into AI/ML integration, Web3 technologies, and advanced cloud architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML', 'Web3', 'Blockchain', 'Kubernetes', 'Microservices', 'Serverless'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-800 dark:to-accent-800 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700 hover:shadow-lg transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;