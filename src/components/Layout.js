import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { personalInfo } from "../data/cvData";
import { useDarkMode } from "../contexts/DarkModeContext";
import TypographicHeader from "./TypographicHeader";
import AnimatedCodeLines from "./AnimatedCodeLines";
import CodingBackground from "./CodingBackground";

export default function Layout({ children }) {
  const location = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/work", label: "Work" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0a0e13] dark:via-[#0d1117] dark:to-[#0a0e13] dark:text-gray-100 text-gray-900 min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* ANIMATED CODE BACKGROUND */}
      <CodingBackground />
      <AnimatedCodeLines />
      
      {/* GRID BACKGROUND - Enhanced */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      
      {/* GRADIENT OVERLAY */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/50 dark:to-[#0a0e13]/50 pointer-events-none z-0" />

      {/* NAVBAR - FIXED AND TRANSPARENT */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#0a0e13]/90 border-b border-gray-200/50 dark:border-cyan-500/10 transition-all duration-300 shadow-lg dark:shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex justify-between items-center">
          <TypographicHeader />

          <nav className="hidden md:flex gap-6 lg:gap-10 text-sm uppercase">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition hover:text-cyan-400 dark:hover:text-cyan-400 ${
                  isActive(item.path) 
                    ? "text-cyan-400 dark:text-cyan-400" 
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 dark:bg-cyan-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* DARK MODE TOGGLE BUTTON */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              href={personalInfo.resume}
              download
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border border-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-[#0a0e13] dark:hover:text-[#0a0e13] transition whitespace-nowrap text-cyan-400 dark:text-cyan-400 font-medium"
            >
              Resume
            </motion.a>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <nav className="md:hidden fixed top-[73px] left-0 right-0 z-50 px-4 py-4 border-b border-gray-200/50 dark:border-white/5 bg-white/80 dark:bg-[#0B0F14]/80 backdrop-blur-md transition-all duration-300">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded text-sm whitespace-nowrap transition ${
                isActive(item.path)
                  ? "bg-cyan-500/20 text-cyan-400 dark:text-cyan-400 border border-cyan-500/30"
                  : "text-gray-600 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT - ADD PADDING TOP FOR FIXED HEADER */}
      <main className="relative z-10 pt-24 md:pt-20">{children}</main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-gray-200/50 dark:border-cyan-500/10 py-12 text-center text-gray-500 dark:text-gray-400 mt-20">
        <p>© 2025 — {personalInfo.name}</p>
      </footer>
    </div>
  );
}
