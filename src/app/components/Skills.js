"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs",],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Chrome DevTools"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto mt-20">

      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border border-white/10 rounded-lg p-5"
          >
            <h3 className="text-sm text-blue-400 mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 border border-white/10 rounded-md text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}