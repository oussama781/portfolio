import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/cvData";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
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
          Mes <span className="text-cyan-400 dark:text-cyan-400">Projets</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Réalisations concrètes démontrant mes compétences techniques et ma capacité à livrer des solutions fonctionnelles
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <FaCode className="text-cyan-400 text-xl" />
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Objective & Result */}
            {project.objective && (
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <FaRocket className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-cyan-400 mb-1">Objectif</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.objective}</p>
                  </div>
                </div>
                {project.result && (
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-green-500 dark:text-green-400 mb-1">Résultat</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.result}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 dark:text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition text-sm font-medium"
                >
                  <FaGithub className="text-sm" />
                  Code
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-400 rounded-lg hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition text-sm font-medium"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Pour plus de détails sur mes projets, n'hésitez pas à me contacter
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-cyan-400 text-[#0a0e13] rounded-lg font-semibold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20"
        >
          Me Contacter
        </Link>
      </motion.div>
    </div>
  );
}