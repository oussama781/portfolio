import { motion } from "framer-motion";
import { experiences, education, certifications, languages, profileDescription, personalInfo } from "../data/cvData";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLanguage } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 text-gray-900 dark:text-gray-200">
      {/* PROFILE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex justify-center"
          >
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 opacity-0 hover:opacity-100 transition-opacity pointer-events-none w-64 h-64 mx-auto"></div>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-cyan-400 dark:text-cyan-400 mb-6"
            >
              {personalInfo.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
            >
              {profileDescription}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCES TIMELINE */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <FaBriefcase className="text-cyan-400 text-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">Expériences Professionnelles</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0a0e13] dark:border-[#0a0e13] z-10 shadow-lg shadow-cyan-400/50"></div>

                <div className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0">{exp.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.location}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <FaGraduationCap className="text-cyan-400 text-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">Formations</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.location} • {edu.date}</p>
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <FaCertificate className="text-cyan-400 text-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-white/10 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 hover:scale-105"
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{cert.title}</h4>
              <p className="text-cyan-400 dark:text-cyan-400 text-sm mb-2">{cert.issuer}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</span>
                <span className="text-xs text-cyan-400 dark:text-cyan-400 font-mono">ID: {cert.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* LANGUAGES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <FaLanguage className="text-cyan-400 text-2xl" />
          <h2 className="text-3xl sm:text-4xl font-bold">Langues</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
