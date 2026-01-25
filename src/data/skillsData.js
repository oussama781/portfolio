import { FaJava, FaReact, FaPython, FaGitAlt, FaCloud, FaDatabase } from "react-icons/fa";
import {
  SiSpringboot,
  SiFastapi,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiHtml5,
  SiCss3
} from "react-icons/si";

export const skillsByCategory = {
  backend: [
    { name: "Java", icon: FaJava, color: "text-orange-500", glow: "hover:shadow-orange-500/50" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500", glow: "hover:shadow-green-500/50" },
    { name: "Python", icon: FaPython, color: "text-yellow-400", glow: "hover:shadow-yellow-400/50" },
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-400", glow: "hover:shadow-teal-400/50" },
    { name: ".NET", icon: SiDotnet, color: "text-purple-400", glow: "hover:shadow-purple-400/50" }
  ],
  frontend: [
    { name: "React", icon: FaReact, color: "text-cyan-400", glow: "hover:shadow-cyan-400/50" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300", glow: "hover:shadow-yellow-300/50" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", glow: "hover:shadow-blue-400/50" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-400", glow: "hover:shadow-orange-400/50" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500", glow: "hover:shadow-blue-500/50" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", glow: "hover:shadow-cyan-500/50" }
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", glow: "hover:shadow-blue-400/50" },
    { name: "Oracle", icon: SiOracle, color: "text-red-500", glow: "hover:shadow-red-500/50" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500", glow: "hover:shadow-blue-500/50" },
    { name: "SQL Server", icon: FaDatabase, color: "text-red-600", glow: "hover:shadow-red-600/50" }
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", glow: "hover:shadow-orange-600/50" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500", glow: "hover:shadow-blue-500/50" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400", glow: "hover:shadow-blue-400/50" },
    { name: "Azure", icon: FaCloud, color: "text-blue-500", glow: "hover:shadow-blue-500/50" }
  ]
};
