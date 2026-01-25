import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/cvData";

export default function TypographicHeader() {
  // Split name: "TAIDI Oussama" -> firstName: "Oussama", lastName: "TAIDI"
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[nameParts.length - 1] || "";
  const lastName = nameParts.slice(0, -1).join(" ") || "";
  
  // Get role and convert to uppercase
  const role = personalInfo.role.toUpperCase();

  // Animation variants for letters
  const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Component to render name with gradient on first letter
  const renderName = (name, delayOffset = 0) => {
    if (!name) return null;
    const firstLetter = name[0];
    const rest = name.slice(1);

    return (
      <motion.span
        className="flex items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.span
          custom={delayOffset}
          variants={letterVariants}
          className="font-bold text-2xl sm:text-3xl md:text-4xl"
          style={{
            background: "linear-gradient(to right, #60a5fa, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}
        >
          {firstLetter}
        </motion.span>
        {rest.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={delayOffset + index + 1}
            variants={letterVariants}
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <Link to="/" className="group">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center sm:items-start"
      >
        {/* Name with gradient first letters and separator */}
        <div className="flex items-center gap-3 mb-2">
          {renderName(firstName, 0)}
          
          {/* Vertical separator line with gradient */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: firstName.length * 0.05 + 0.2, duration: 0.4 }}
            className="w-[1px] h-8 sm:h-10 md:h-12"
            style={{
              background: "linear-gradient(to bottom, #60a5fa, #3b82f6)"
            }}
          />
          
          {renderName(lastName, firstName.length + 1)}
        </div>
        
        {/* Role - monospace/pixelated style */}
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (firstName.length + lastName.length) * 0.05 + 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base text-blue-500 dark:text-blue-400 tracking-wider"
          style={{
            fontFamily: "'Courier New', 'Monaco', 'Menlo', monospace",
            letterSpacing: "0.15em",
            textShadow: "0 0 10px rgba(59, 130, 246, 0.3)"
          }}
        >
          {role}
        </motion.p>
      </motion.div>
    </Link>
  );
}
