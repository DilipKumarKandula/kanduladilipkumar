// "use client";

// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Learning Management System (LMS)",
//     description:
//       "Developed a full-stack LMS platform with course management, quizzes, progress tracking, and gamified learning features.",
//     impact:
//       "Enabled structured learning workflows with interactive modules and secure authentication.",
//     tech: ["Next.js", "Node.js", "MySQL", "JWT"],
//     highlights: [
//       "Built REST APIs for frontend–backend communication",
//       "Implemented JWT-based authentication and role-based access control",
//       "Optimized performance and responsiveness across devices",
//     ],
//     github: "#",
//     live: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="px-6 max-w-5xl mx-auto mt-20">

//       <h2 className="text-2xl md:text-3xl font-semibold mb-10">
//         Projects
//       </h2>

//       <div className="space-y-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition"
//           >
//             {/* Title */}
//             <h3 className="text-lg font-semibold">{project.title}</h3>

//             {/* Description */}
//             <p className="mt-3 text-gray-400">
//               {project.description}
//             </p>

//             {/* Impact */}
//             <p className="mt-2 text-sm text-blue-400">
//               {project.impact}
//             </p>

//             {/* Highlights */}
//             <ul className="mt-3 text-sm text-gray-400 space-y-1">
//               {project.highlights.map((item, idx) => (
//                 <li key={idx}>• {item}</li>
//               ))}
//             </ul>

//             {/* Tech */}
//             <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
//               {project.tech.map((tech, idx) => (
//                 <span
//                   key={idx}
//                   className="border border-white/10 px-2 py-1 rounded"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="px-6 max-w-5xl mx-auto mt-24 mb-24">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Featured Project
      </h2>

      <p className="mt-3 text-gray-500 ">
        A real-world project showcasing my full-stack development skills and problem-solving approach.
      </p>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-slate-900">
           LMS Platform and Gamified Learning Platfrom
        </h3>

        {/* Company Tag */}
        <p className="text-sm text-gray-400 mt-1">
          Company Project · Full Stack Development
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Developed a full-stack Learning Management System with gamification,
          interactive quizzes, and progress tracking to improve user engagement
          and learning experience.
        </p>

        {/* Key Contributions */}
        <div className="mt-6">
          <h4 className="font-medium text-slate-800 mb-2">
            Key Contributions
          </h4>

          <ul className="space-y-2 text-sm text-gray-500">
            <li>✔ Designed and implemented REST APIs</li>
            <li>✔ Built responsive UI using React & Next.js</li>
            <li>✔ Integrated MySQL database for course management</li>
            <li>✔ Developed gamification features to enhance engagement</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Next.js", "Node.js", "MySQL", "React"].map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Note instead of links */}
        <div className="mt-6 text-sm text-gray-400 italic">
          * Project developed as part of company work. Demo/code not publicly available.
        </div>
      </motion.div>

    </section>
  );
}