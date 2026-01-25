// Données centralisées du CV - Ne rien inventer, tout vient du CV
export const personalInfo = {
  name: "TAIDI Oussama",
  role: "Full-Stack Engineer",
  email: "oussamataidi2@gmail.com",
  phone: "+212 6 87 86 95 21",
  linkedin: "https://www.linkedin.com/in/oussama-taidi-a933b2245/",
  tagline: "I design and build secure, scalable web applications using Java, Spring Boot, FastAPI and React.",
  profileImage: "/profile.png",
  resume: "/cv.pdf"
};

export const latestExperience = {
  role: "Développeur Full Stack (PFE)",
  company: "SAHAM BANK (Société Générale)",
  location: "Casablanca",
  date: "Mars 2025 – Septembre 2025",
  description: "Développement d'un dashboard automatisé pour la gestion des vulnérabilités et de la capacité infrastructure. Centralisation des données et amélioration de la réactivité des équipes techniques.",
  technologies: ["FastAPI", "React.js", "PostgreSQL"]
};

export const latestEducation = {
  degree: "Ingénieur d'État en Informatique et Réseaux (option MIAGE)",
  school: "EMSI – École Marocaine des Sciences de l'Ingénieur",
  location: "Rabat",
  date: "2022 – 2025",
  description: "Formation complète en développement full-stack, automatisation et cybersécurité."
};

export const experiences = [
  {
    role: "Développeur Full Stack (PFE)",
    company: "SAHAM BANK (Société Générale)",
    location: "Casablanca",
    date: "Mars 2025 – Septembre 2025",
    description: "Développement d'un dashboard automatisé pour la gestion des vulnérabilités et de la capacité infrastructure. Centralisation des données et amélioration de la réactivité des équipes techniques.",
    technologies: ["FastAPI", "React.js", "PostgreSQL"]
  },
  {
    role: "Développeur Full Stack – Stage",
    company: "SQLI",
    location: "Rabat",
    date: "Juillet 2024 – Août 2024",
    description: "Développement et maintenance d'applications web. Participation à la conception fonctionnelle et technique des solutions.",
    technologies: ["JAVA SPRING", "PostgreSQL", "React.js"]
  },
  {
    role: "Développeur Full Stack – Stage",
    company: "SQLI",
    location: "Rabat",
    date: "Juillet 2023 – Août 2023",
    description: "Développement d'une application de gestion des dossiers médicaux.",
    technologies: ["JAVA SPRING", "PostgreSQL", "React.js"]
  },
  {
    role: "Développeur – Stage",
    company: "SAHARA ELARSA",
    location: "Laâyoune",
    date: "Avril 2022",
    description: "Développement d'une application de gestion des ressources humaines.",
    technologies: ["C#", ".NET", "SQL SERVER"]
  }
];

export const education = [
  {
    degree: "Ingénieur d'État en Informatique et Réseaux (option MIAGE)",
    school: "EMSI – École Marocaine des Sciences de l'Ingénieur",
    location: "Rabat",
    date: "2022 – 2025",
    description: "Formation complète en développement full-stack, automatisation et cybersécurité."
  },
  {
    degree: "Technicien Spécialisé en Développement Informatique",
    school: "OFPPT",
    location: "Laâyoune",
    date: "2020 – 2022"
  },
  {
    degree: "Baccalauréat Sciences Mathématiques",
    school: "Lycée Hassan II",
    location: "Laâyoune",
    date: "2020"
  }
];

export const certifications = [
  {
    title: "Oracle DATABASE ADMINISTRATION",
    issuer: "Oracle",
    date: "Juin 2024",
    id: "1Z0-082"
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "Mai 2024",
    id: "AKEZUBEFLDKF"
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    date: "Mai 2024",
    id: "SLYHW9SWY6PY"
  },
  {
    title: "Virtual Networks in Azure",
    issuer: "Whizlabs",
    date: "Mai 2024",
    id: "SSFK7PVE9ARM"
  },
  {
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "University of Pennsylvania",
    date: "Nov. 2023",
    id: "YHJEECHB5AVF"
  },
  {
    title: "Bash Scripting and System Configuration",
    issuer: "Codio",
    date: "Mai 2023",
    id: "KNFAKB3X8RP7"
  },
  {
    title: "Connecting to Devices and Networks",
    issuer: "Codio",
    date: "Mai 2023",
    id: "D5YC5EQ8GUMB"
  },
  {
    title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
    issuer: "University of Michigan",
    date: "Avr. 2023",
    id: "ETKEWTZFSJ8U"
  },
  {
    title: "Building Scalable Java Microservices with Spring",
    issuer: "Google Cloud",
    date: "Mai 2024",
    id: "AHZQA8CE3JDX"
  },
  {
    title: "React Native",
    issuer: "Meta",
    date: "Mai 2024",
    id: "86977FH9H2TUS"
  }
];

export const projects = [
  {
    title: "Application de recherche d'emploi",
    description: "Projet de fin d'année – Analyse des besoins et rédaction du cahier des charges. Développement d'une application web avec Python et Django. Mise en place d'une plateforme reliant chercheurs d'emploi et recruteurs.",
    technologies: ["Python", "Django"],
    objective: "Créer une plateforme de mise en relation entre chercheurs d'emploi et recruteurs",
    result: "Application fonctionnelle avec gestion des profils et des offres d'emploi"
  },
  {
    title: "Dashboard automatisé de gestion de confirmation des messages WhatsApp",
    description: "Développement d'un système automatisé pour la gestion et la confirmation des messages WhatsApp.",
    technologies: ["FastAPI", "React.js", "PostgreSQL"],
    objective: "Automatiser la gestion et la confirmation des messages WhatsApp",
    result: "Dashboard opérationnel avec automatisation complète"
  }
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Bon niveau professionnel" },
  { name: "Anglais", level: "Niveau intermédiaire" }
];

export const profileDescription = "Ingénieur d'État en Informatique et Réseaux (option MIAGE), spécialisé en développement full-stack, automatisation et cybersécurité. Expérience en environnements bancaires et projets critiques.";
