"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          Dilip<span className="text-blue-400">.dev</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* CTA */}
        <button className="hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-sm hover:scale-105 transition">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}