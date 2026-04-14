"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Tinitiate Technologies Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Feb 2024 – Present",
    points: [
      "Developed and maintained a full-stack Learning Management System (LMS)",
      "Built gamified learning features including quizzes, progress tracking, and engagement modules",
      "Designed and integrated REST APIs for frontend–backend communication",
      "Implemented JWT-based authentication and role-based access control",
      "Optimized performance and responsiveness across devices",
    ],
  },

];

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-5xl mx-auto mt-20">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Experience
      </h2>

      <div className="space-y-10">

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border-l border-white/10 pl-6 relative"
          >
            {/* Dot */}
            <div className="absolute -left-2 top-1.5 w-3 h-3 bg-blue-500 rounded-full" />

            {/* Header */}
            <h3 className="text-lg font-semibold">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {exp.company} · {exp.duration}
            </p>

            {/* Points */}
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>

          </motion.div>
        ))}

      </div>

    </section>
  );
}