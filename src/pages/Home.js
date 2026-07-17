import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { latestExperience, latestEducation, personalInfo } from "../data/cvData";

export default function Home() {
  return (
    <div className="relative z-10">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 pt-20 pb-40">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center sm:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
            >
              <span className="block">Full-Stack</span>
              <span className="block text-cyan-400 dark:text-cyan-400">Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 max-w-2xl text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link
                to="/work"
                className="group flex items-center justify-center gap-2 bg-cyan-400 text-[#0a0e13] px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg shadow-cyan-400/20"
              >
                View My Work
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
  href={personalInfo.resume}
  download="CV_TAIDI_Oussama.pdf" // 👈 Ajoute le nom exact ici pour forcer le bon format sur Vercel
  target="_blank"                 // 👈 Ouvre proprement pour éviter le conflit de routage
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 dark:text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"
>
  Download Resume
</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LATEST EXPERIENCE & EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Latest Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-cyan-400">Latest Experience</h3>
            </div>
            <h4 className="font-bold text-xl mb-2">{latestExperience.role}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{latestExperience.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{latestExperience.date} • {latestExperience.location}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{latestExperience.description}</p>
            <div className="flex flex-wrap gap-2">
              {latestExperience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Latest Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-cyan-400">Latest Education</h3>
            </div>
            <h4 className="font-bold text-xl mb-2">{latestEducation.degree}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{latestEducation.school}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{latestEducation.date} • {latestEducation.location}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{latestEducation.description}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
