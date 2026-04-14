"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "Developed a full-stack LMS platform with course management, quizzes, progress tracking, and gamified learning features.",
    impact:
      "Enabled structured learning workflows with interactive modules and secure authentication.",
    tech: ["Next.js", "Node.js", "MySQL", "JWT"],
    highlights: [
      "Built REST APIs for frontend–backend communication",
      "Implemented JWT-based authentication and role-based access control",
      "Optimized performance and responsiveness across devices",
    ],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto mt-20">

      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold">{project.title}</h3>

            {/* Description */}
            <p className="mt-3 text-gray-400">
              {project.description}
            </p>

            {/* Impact */}
            <p className="mt-2 text-sm text-blue-400">
              {project.impact}
            </p>

            {/* Highlights */}
            <ul className="mt-3 text-sm text-gray-400 space-y-1">
              {project.highlights.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="border border-white/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}