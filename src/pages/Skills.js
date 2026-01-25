import { motion } from "framer-motion";
import { skillsByCategory } from "../data/skillsData";

export default function Skills() {
  const categoryNames = {
    backend: "Backend",
    frontend: "Frontend",
    database: "Bases de Données",
    tools: "Outils & DevOps"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Compétences <span className="text-cyan-400 dark:text-cyan-400">Techniques</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Maîtrise des technologies modernes pour le développement d'applications robustes et scalables
        </p>
      </motion.div>

      {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
        <motion.section
          key={category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-cyan-400">
            {categoryNames[category]}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className={`
                    bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-2xl p-6 
                    flex flex-col items-center gap-4 
                    hover:border-cyan-400/50 transition-all duration-300
                    cursor-pointer backdrop-blur-sm
                    ${skill.glow} hover:shadow-lg hover:shadow-cyan-400/20
                  `}>
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={skill.color}
                    >
                      <IconComponent size={48} />
                    </motion.div>
                    <span className="text-sm font-medium uppercase tracking-wider text-center">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                    transition-opacity duration-300 pointer-events-none blur-xl
                    ${skill.color.replace('text-', 'bg-')}
                  `}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
