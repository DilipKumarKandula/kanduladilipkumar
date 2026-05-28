// // "use client";

// // import { motion } from "framer-motion";

// // const projects = [
// //   {
// //     title: "Learning Management System (LMS)",
// //     description:
// //       "Developed a full-stack LMS platform with course management, quizzes, progress tracking, and gamified learning features.",
// //     impact:
// //       "Enabled structured learning workflows with interactive modules and secure authentication.",
// //     tech: ["Next.js", "Node.js", "MySQL", "JWT"],
// //     highlights: [
// //       "Built REST APIs for frontend–backend communication",
// //       "Implemented JWT-based authentication and role-based access control",
// //       "Optimized performance and responsiveness across devices",
// //     ],
// //     github: "#",
// //     live: "#",
// //   },
// // ];

// // export default function Projects() {
// //   return (
// //     <section id="projects" className="px-6 max-w-5xl mx-auto mt-20">

// //       <h2 className="text-2xl md:text-3xl font-semibold mb-10">
// //         Projects
// //       </h2>

// //       <div className="space-y-8">
// //         {projects.map((project, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition"
// //           >
// //             {/* Title */}
// //             <h3 className="text-lg font-semibold">{project.title}</h3>

// //             {/* Description */}
// //             <p className="mt-3 text-gray-400">
// //               {project.description}
// //             </p>

// //             {/* Impact */}
// //             <p className="mt-2 text-sm text-blue-400">
// //               {project.impact}
// //             </p>

// //             {/* Highlights */}
// //             <ul className="mt-3 text-sm text-gray-400 space-y-1">
// //               {project.highlights.map((item, idx) => (
// //                 <li key={idx}>• {item}</li>
// //               ))}
// //             </ul>

// //             {/* Tech */}
// //             <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
// //               {project.tech.map((tech, idx) => (
// //                 <span
// //                   key={idx}
// //                   className="border border-white/10 px-2 py-1 rounded"
// //                 >
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //     </section>
// //   );
// // }



// "use client";

// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <section className="px-6 max-w-5xl mx-auto mt-24 mb-24">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-white">
//         Featured Project
//       </h2>

//       <p className="mt-3 text-gray-500 ">
//         A real-world project showcasing my full-stack development skills and problem-solving approach.
//       </p>

//       {/* Project Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="mt-12 p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
//       >
//         {/* Title */}
//         <h3 className="text-2xl font-semibold text-slate-900">
//            LMS Platform and Gamified Learning Platfrom
//         </h3>

//         {/* Company Tag */}
//         <p className="text-sm text-gray-400 mt-1">
//           Company Project · Full Stack Development
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-gray-600 leading-relaxed">
//           Developed a full-stack Learning Management System with gamification,
//           interactive quizzes, and progress tracking to improve user engagement
//           and learning experience.
//         </p>

//         {/* Key Contributions */}
//         <div className="mt-6">
//           <h4 className="font-medium text-slate-800 mb-2">
//             Key Contributions
//           </h4>

//           <ul className="space-y-2 text-sm text-gray-500">
//             <li>✔ Designed and implemented REST APIs</li>
//             <li>✔ Built responsive UI using React & Next.js</li>
//             <li>✔ Integrated MySQL database for course management</li>
//             <li>✔ Developed gamification features to enhance engagement</li>
//           </ul>
//         </div>

//         {/* Tech Stack */}
//         <div className="mt-6 flex flex-wrap gap-2">
//           {["Next.js", "Node.js", "MySQL", "React"].map((tech, i) => (
//             <span
//               key={i}
//               className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Note instead of links */}
//         <div className="mt-6 text-sm text-gray-400 italic">
//           * Project developed as part of company work. Demo/code not publicly available.
//         </div>
//       </motion.div>

//     </section>
//   );
// }










// "use client";

// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Sparkles,
//   Cpu,
// } from "lucide-react";

// const projects = [
//   {
//     title: "Gamified Learning Management System",

//     category: "Company Project · Full Stack Development",

//     icon: <Briefcase className="w-5 h-5" />,

//     description:
//       "Built scalable LMS workflows with gamification, analytics dashboards, reporting systems, authentication, and reusable full stack architecture.",

//     contributions: [
//       "Developed scalable REST APIs for LMS workflows and dashboard operations",
//       "Implemented JWT authentication and RBAC authorization",
//       "Built reusable dashboard component architecture",
//       "Developed responsive UI with React.js and Next.js",
//       "Integrated MySQL database with optimized data flow",
//       "Built reporting modules and analytics dashboards",
//     ],

//     tech: [
//       "React.js",
//       "Next.js",
//       "Node.js",
//       "MySQL",
//       "JWT",
//       "RBAC",
//       "Tailwind CSS",
//     ],
//   },

//   {
//     title: "AI Content & Video Automation System",

//     category: "Company Project · AI Automation",

//     icon: <Cpu className="w-5 h-5" />,

//     description:
//       "Developed an AI-powered automation pipeline for content generation, narration workflows, presentation rendering, and automated video composition.",

//     contributions: [
//       "Integrated OpenAI API for AI-generated content",
//       "Built automated content-to-video workflows",
//       "Implemented TTS narration generation",
//       "Built Reveal.js presentation workflows",
//       "Automated rendering using Puppeteer",
//       "Developed ffmpeg-based video composition pipeline",
//     ],

//     tech: [
//       "Node.js",
//       "OpenAI API",
//       "Puppeteer",
//       "Reveal.js",
//       "ffmpeg",
//       "Automation",
//     ],
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="px-6 max-w-6xl mx-auto py-24">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center"
//       >



//         <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
//           Featured Projects
//         </h2>

//         <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
//           Real-world full stack and AI-powered systems focused on scalable
//           architecture, automation workflows, and modern product engineering.
//         </p>

//       </motion.div>

//       {/* Project Cards */}
//       <div className="mt-16 space-y-10">

//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             viewport={{ once: true }}
//             className="
//               rounded-3xl
//               border border-white/10
//               bg-[#111827]
//               p-8 md:p-10
//             "
//           >

//             {/* Top */}
//             <div className="flex items-start gap-4">

//               <div
//                 className="
//                   p-3 rounded-2xl
//                   bg-orange-500/10
//                   text-orange-300
//                   border border-orange-500/20
//                 "
//               >
//                 {project.icon}
//               </div>

//               <div>

//                 <p className="text-sm text-orange-300">
//                   {project.category}
//                 </p>

//                 <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
//                   {project.title}
//                 </h3>

//               </div>

//             </div>

//             {/* Description */}
//             <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl">
//               {project.description}
//             </p>

//             {/* Contributions */}
//             <div className="mt-8">

//               <h4 className="text-sm uppercase tracking-wider text-gray-500">
//                 Key Contributions
//               </h4>

//               <ul className="mt-5 space-y-4">

//                 {project.contributions.map((point, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="text-orange-400 mt-1">✔</span>

//                     <p className="text-sm text-gray-300 leading-relaxed">
//                       {point}
//                     </p>
//                   </li>
//                 ))}

//               </ul>

//             </div>

//             {/* Tech Stack */}
//             <div className="mt-8 flex flex-wrap gap-3">

//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="
//                     px-3 py-1.5
//                     rounded-full
//                     bg-white/5
//                     border border-white/10
//                     text-xs text-gray-300
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}

//             </div>

//             {/* Footer */}
//             <div className="mt-8 pt-6 border-t border-white/10">
//               <p className="text-sm text-gray-500 italic">
//                 Developed as part of company projects. Source code and demo are
//                 not publicly available.
//               </p>
//             </div>

//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// }












"use client";

import { motion } from "framer-motion";
import {
Briefcase,
Cpu,
Rocket,
ArrowUpRight,
} from "lucide-react";

const projects = [
{
title: "Gamified Learning Management System",

category: "Company Project · Full Stack Development",

icon: <Briefcase className="w-5 h-5" />,

description:
  "Built scalable LMS workflows with authentication systems, analytics dashboards, reporting modules, reusable component architecture, and gamified learning experiences.",

contributions: [
  "Designed scalable REST API workflows for LMS operations and dashboard systems",

  "Implemented JWT authentication and RBAC authorization architecture",

  "Built reusable dashboard interfaces and reporting modules using React.js and Next.js",

  "Integrated MySQL database systems with optimized frontend-backend data handling",
],

tech: [
  "React.js",
  "Next.js",
  "Node.js",
  "MySQL",
  "JWT",
  "RBAC",
  "Tailwind CSS",
],

company: true,

},

{
title: "AI Content & Video Automation System",

category: "Company Project · AI Automation",

icon: <Cpu className="w-5 h-5" />,

description:
  "Developed an AI-powered automation pipeline for content generation, narration workflows, presentation rendering, and automated video composition systems.",

contributions: [
  "Integrated OpenAI API for AI-generated content and narration workflows",

  "Built automated content-to-video processing pipelines using Puppeteer and ffmpeg",

  "Implemented Reveal.js presentation rendering and TTS-based automation workflows",

  "Designed scalable automation workflows for content generation and video composition",
],

tech: [
  "Node.js",
  "OpenAI API",
  "Puppeteer",
  "Reveal.js",
  "ffmpeg",
  "Automation",
],

company: true,


},

{
title: "Task Manager Pro",


category: "Personal Project · Full Stack System",

icon: <Rocket className="w-5 h-5" />,

description:
  "Full stack task management system with authentication workflows, decoupled deployment architecture, dashboard interfaces, and scalable frontend-backend integration.",

contributions: [
  "Implemented decoupled frontend-backend deployment architecture using Vercel and Render",

  "Designed scalable API communication workflows with PostgreSQL database integration",

  "Implemented Google OAuth, JWT authentication, protected routes, and middleware authorization systems",

  "Developed responsive dashboard interfaces and reusable frontend architecture using React.js and Next.js",
],

tech: [
  "React.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Google OAuth",
  "JWT",
  "Tailwind CSS",
],

live: "https://task-manager-fullstack-ruddy.vercel.app/login",

github: "https://github.com/DilipKumarKandula/",

company: false,

},
];

export default function Projects() {
return ( <section className="px-6 max-w-6xl mx-auto py-24">

```
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >

    <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
      Featured Projects
    </h2>

    <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
      Real-world full stack and AI-powered systems focused on scalable
      architecture, automation workflows, and modern product engineering.
    </p>

  </motion.div>

  {/* Project Cards */}
  <div className="mt-16 space-y-10">

    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border border-white/10
          bg-[#111827]
          p-8 md:p-10
          hover:border-orange-500/20
          transition-all duration-300
        "
      >

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          <div className="flex items-start gap-4">

            <div
              className="
                p-3 rounded-2xl
                bg-orange-500/10
                text-orange-300
                border border-orange-500/20
              "
            >
              {project.icon}
            </div>

            <div>

              <p className="text-sm text-orange-300">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h3>

            </div>

          </div>

          {!project.company && (
            <div className="flex items-center gap-4">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-xl
                  bg-orange-500 text-white text-sm
                  hover:bg-orange-400 transition
                "
              >
                Live Demo
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-xl
                  border border-white/10
                  bg-white/5 text-gray-300 text-sm
                  hover:bg-white/10 transition
                "
              >
                GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>
          )}

        </div>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Contributions */}
        <div className="mt-8">

          <h4 className="text-sm uppercase tracking-wider text-gray-500">
            Engineering Highlights
          </h4>

          <ul className="mt-5 space-y-4">

            {project.contributions.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >

                <span className="text-orange-400 mt-1">
                  ✔
                </span>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {point}
                </p>

              </li>
            ))}

          </ul>

        </div>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3">

          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                px-3 py-1.5
                rounded-full
                bg-white/5
                border border-white/10
                text-xs text-gray-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Footer */}
        {project.company && (
          <div className="mt-8 pt-6 border-t border-white/10">

            <p className="text-sm text-gray-500 italic">
              Developed as part of company projects. Source code and demo are not publicly available.
            </p>

          </div>
        )}

      </motion.div>
    ))}

  </div>
</section>

);
}
