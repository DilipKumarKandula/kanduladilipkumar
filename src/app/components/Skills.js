// "use client";

// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiJavascript,
//   SiMysql,
//   SiTailwindcss,
// } from "react-icons/si";

// const skills = [
//   { name: "React.js", icon: <FaReact />, desc: "Building scalable UI systems" },
//   { name: "Next.js", icon: <SiNextdotjs />, desc: "SSR & performance focused apps" },
//   { name: "JavaScript", icon: <SiJavascript />, desc: "Core logic & async handling" },
//   { name: "Node.js", icon: <FaNodeJs />, desc: "Backend APIs & services" },
//   { name: "MySQL", icon: <SiMysql />, desc: "Structured data design" },
//   { name: "Tailwind", icon: <SiTailwindcss />, desc: "Modern UI styling" },
//   { name: "Git", icon: <FaGitAlt />, desc: "Version control workflows" },
//   { name: "GitHub", icon: <FaGithub />, desc: "Collaboration & repos" },
// ];

// export default function Skills() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24">
      
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight">
//         Skills
//       </h2>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.05 }}
//             className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
//           >
//             {/* Glow Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

//             {/* Content */}
//             <div className="relative z-10">
              
//               {/* Icon */}
//               <div className="text-2xl mb-4 text-gray-300 group-hover:text-white transition">
//                 {skill.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-medium mb-2">
//                 {skill.name}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
//                 {skill.desc}
//               </p>

//             </div>

//             {/* Subtle Border Glow */}
//             <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition" />
//           </motion.div>
//         ))}
//       </div>

//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "DevTools", icon: <MdOutlineDeveloperMode /> },
];

export default function Skills() {
  return (
    <section className="px-6 max-w-5xl mx-auto mt-32 mb-32 text-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
        Tech I Work With
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        A focused stack for building fast, scalable, and modern web applications.
      </p>

      {/* Floating Skills */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full 
            bg-white/5 border border-white/10 backdrop-blur-md
            text-gray-300 hover:text-white hover:border-orange-400
            transition cursor-default"
          >
            <span className="text-orange-400 text-lg">
              {skill.icon}
            </span>
            <span className="text-sm font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}

      </div>

      {/* Bottom subtle line */}
      {/* <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div> */}

    </section>
  );
}