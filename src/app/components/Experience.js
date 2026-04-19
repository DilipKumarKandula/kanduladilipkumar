"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tinitiate Technologies Pvt Ltd",
    duration: "Feb 2024 – Present",
    description:
      "Working as a full-stack developer building scalable web applications with focus on system design, performance, and real-world deployment.",
    points: [
      "Collaborated with team members to design and develop production-ready web applications",
      "Developed backend APIs using Express.js and structured them for efficient frontend integration",
      "Developed applications using JavaScript, React, and Next.js across frontend and backend",
      "Designed normalized relational database schemas ensuring efficient data flow and integrity",
      "Optimized application performance using browser DevTools and debugging techniques",
      "Handled debugging, testing, and maintaining application stability in production",
      "Contributed to feature planning, implementation, and iterative improvements",
    ],
    tech: [
      "JavaScript",
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section className="px-6 max-w-6xl mx-auto mt-24 mb-24">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Experience
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          My professional experience focusing on system design, development workflow, and scalable application building.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 relative border-l border-gray-700">

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 ml-6"
          >
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-1.5 mt-2"></div>

            {/* Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-semibold text-slate-900">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {exp.company} · {exp.duration}
              </p>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Work Points */}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-orange-500">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}