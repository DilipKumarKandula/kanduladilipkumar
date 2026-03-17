"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-16 px-6 max-w-5xl mx-auto">

      {/* Tag */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-gray-400"
      >
        Full Stack Developer · 2+ Years Experience
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-white"
      >
        Building scalable platforms and interactive web applications
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 text-base md:text-lg max-w-4xl leading-relaxed"
      >
        {`I'm Dilip Kumar, a full stack developer with hands-on experience developing 
        production-ready learning management systems using React, Next.js, Node.js, 
        and MySQL. I focus on building performant, scalable, and user-friendly applications.`}
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300"
      >
        <span>• LMS Development</span>
        <span>• REST APIs & JWT Auth</span>
        <span>• Performance Optimization</span>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4 flex-wrap"
      >
        <button className="px-5 py-2.5 bg-white text-black rounded-md text-sm hover:opacity-80 transition">
          View Projects
        </button>

        <button className="px-5 py-2.5 border border-white/20 rounded-md text-sm hover:bg-white/10 transition">
          Download Resume
        </button>
      </motion.div>

    </section>
  );
}