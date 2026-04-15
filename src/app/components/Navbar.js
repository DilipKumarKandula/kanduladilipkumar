// "use client";

// import { motion } from "framer-motion";

// export default function Navbar() {
//   const scrollToContact = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo */}
//         <h1 className="text-lg font-semibold tracking-wide text-gray-300 hover:text-orange-400 transition">
//           Dilip<span className="text-blue-400">.dev</span>
//         </h1>

//         {/* Links */}
//         <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//           <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
//           <a href="#skills" className="hover:text-orange-400 transition">Skills</a>
//           <a href="#experience" className="hover:text-orange-400 transition">Experience</a>
//           <a href="#insights" className="hover:text-orange-400 transition">Insights</a>

//           {/* FIXED */}
//           <button onClick={scrollToContact} className="hover:text-orange-400 transition">
//             Contact
//           </button>
//         </div>

//         {/* CTA */}
//         <button
//           onClick={scrollToContact}
//           className="hidden md:block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
//         >
//           Hire Me
//         </button>

//       </div>
//     </motion.nav>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg font-semibold text-gray-300 hover:text-orange-400 transition">
            Dilip<span className="text-blue-400">.dev</span>
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {/* <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#insights">Insights</Link> */}
        </div>

        {/* ONLY CTA */}
        <Link
          href="/contact"
          className="hidden md:block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
        >
          Contact Me
        </Link>

      </div>
    </motion.nav>
  );
}