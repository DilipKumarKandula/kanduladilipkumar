"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, desc: "Building scalable UI systems" },
  { name: "Next.js", icon: <SiNextdotjs />, desc: "SSR & performance focused apps" },
  { name: "JavaScript", icon: <SiJavascript />, desc: "Core logic & async handling" },
  { name: "Node.js", icon: <FaNodeJs />, desc: "Backend APIs & services" },
  { name: "MySQL", icon: <SiMysql />, desc: "Structured data design" },
  { name: "Tailwind", icon: <SiTailwindcss />, desc: "Modern UI styling" },
  { name: "Git", icon: <FaGitAlt />, desc: "Version control workflows" },
  { name: "GitHub", icon: <FaGithub />, desc: "Collaboration & repos" },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight">
        Skills
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            {/* Content */}
            <div className="relative z-10">
              
              {/* Icon */}
              <div className="text-2xl mb-4 text-gray-300 group-hover:text-white transition">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                {skill.desc}
              </p>

            </div>

            {/* Subtle Border Glow */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition" />
          </motion.div>
        ))}
      </div>

    </section>
  );
}