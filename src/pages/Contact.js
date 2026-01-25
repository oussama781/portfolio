import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/cvData";
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "../config/emailjs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Vérifier que les configurations EmailJS sont définies
      if (
        emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ||
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' ||
        emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error('Veuillez configurer EmailJS dans le fichier .env ou src/config/emailjs.js');
      }

      // Préparer les paramètres du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalInfo.name || 'Portfolio Owner'
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // Succès
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
      setIsSubmitting(false);
      setError(
        err.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      );
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-cyan-400"
    },
    {
      icon: FaPhone,
      label: "Téléphone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-green-400"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "oussa-ma-taidi",
      href: personalInfo.linkedin,
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Contactez-<span className="text-cyan-400 dark:text-cyan-400">moi</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-8">Informations de Contact</h2>
          
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-6 bg-white/5 dark:bg-white/5 bg-gray-50 dark:border-cyan-500/20 border border-gray-200 dark:border-cyan-500/20 rounded-xl hover:border-cyan-400/50 transition-all hover:bg-white/10 dark:hover:bg-white/10 group backdrop-blur-sm"
              >
                <div className={`w-12 h-12 ${method.color} bg-current/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent className={method.color} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{method.label}</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{method.value}</p>
                </div>
              </motion.a>
            );
          })}

          {/* Download Resume */}
          <motion.a
            href={personalInfo.resume}
            download
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center gap-3 p-6 bg-cyan-500/20 border-2 border-cyan-400 rounded-xl hover:bg-cyan-500/30 transition-all group backdrop-blur-sm"
          >
            <FaDownload className="text-cyan-400 group-hover:translate-y-1 transition-transform" />
            <span className="font-semibold text-cyan-400">Télécharger mon CV</span>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8">Envoyer un Message</h2>
          
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-400" />
              <p className="text-green-400">Message envoyé avec succès !</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
            >
              <FaExclamationCircle className="text-red-400" />
              <p className="text-red-400">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-gray-200 transition"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-gray-200 transition"
                placeholder="votre.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-gray-900 dark:text-gray-200 transition"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-gray-200 transition resize-none"
                placeholder="Votre message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-cyan-400 text-[#0a0e13] rounded-lg font-semibold hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-400/20"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
