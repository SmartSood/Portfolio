import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code2, Users, Flame, Star, Compass, Award } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const academicAndCompetitive = [
    {
      title: 'Codeforces Specialist (Rating: 1471)',
      description: 'Achieved max rating of 1471 with Global Rank 1111 in Codeforces Round 1034.',
      icon: Code2,
      badge: 'Competitive Programming',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Granted Software Copyright (DTI Platform)',
      description: 'Awarded official Software Copyright for the multi-modal DTI MLOps platform & selected for demonstration at 36th EFMI MIE 2026 in Genova, Italy.',
      icon: Award,
      badge: 'Intellectual Property',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Platinum Rank — Flipr Hackathon',
      description: 'Earned elite Platinum rank for developing scalable, production-ready full-stack applications.',
      icon: Trophy,
      badge: '1st Tier Performer',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: '2nd Rank — BNY Mellon Hackathon',
      description: 'Secured 2nd position nationwide in BNY Mellon engineering challenge.',
      icon: Trophy,
      badge: 'National Runner-Up',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Top-Performer — E6Data Hackathon',
      description: 'Recognized as top performer in big data systems and high-throughput query optimization challenge.',
      icon: Flame,
      badge: 'Top Performer',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  const leadershipAndExtracurriculars = [
    {
      role: 'Joint Secretary — Aavaran',
      tenure: '2024 – 2025',
      organization: 'IIT (BHU) Varanasi',
      description: 'Spearheaded department initiatives, cultural engagements, and academic welfare programs.',
      icon: Users,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      role: 'Member — DUGC & DPGC Committees',
      tenure: '2024 – Present',
      organization: 'IIT (BHU) Varanasi',
      description: 'Active student representative on the Department Undergraduate & Postgraduate Committees contributing to academic policies and curriculum review.',
      icon: Star,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      role: 'Contingent Leader — Inter IIT Meet',
      tenure: '2023, 2024, 2025',
      organization: 'IIT (BHU) Varanasi',
      description: 'Led a contingent of 50+ members across 3 consecutive Inter IIT Meets, coordinating logistics, strategy, and team representation.',
      icon: Compass,
      gradient: 'from-rose-500 to-red-600',
    },
    {
      role: 'Host & Organizer — IIT BHU MUN',
      tenure: 'Annual Conference',
      organization: 'Model United Nations, IIT BHU',
      description: 'Successfully hosted and managed operations for the IIT BHU MUN, coordinating across 200+ delegates from institutions across India.',
      icon: Users,
      gradient: 'from-teal-500 to-emerald-600',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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
    <section id="achievements" className="py-20 bg-white dark:bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 mb-4 border border-primary-200 dark:border-primary-800">
            <Trophy size={14} />
            Honours & Impact
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Honours, Achievements & Leadership
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Competitive coding milestones, hackathon accolades, university committees, and leadership positions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Academic & Competitive Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/60 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <Trophy size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Academic & Coding Honours
              </h3>
            </div>

            <div className="space-y-4">
              {academicAndCompetitive.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="p-5 bg-gray-50/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-2xl border border-gray-200/70 dark:border-gray-700/70 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <h4 className="font-bold text-gray-900 dark:text-white text-base">
                            {item.title}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Leadership & Extracurriculars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/60 flex items-center justify-center text-accent-600 dark:text-accent-400">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Leadership & Extracurriculars
              </h3>
            </div>

            <div className="space-y-4">
              {leadershipAndExtracurriculars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="p-5 bg-gray-50/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-2xl border border-gray-200/70 dark:border-gray-700/70 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <h4 className="font-bold text-gray-900 dark:text-white text-base">
                            {item.role}
                          </h4>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {item.tenure}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1.5">
                          {item.organization}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
