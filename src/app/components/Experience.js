// "use client";

// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Code2,
//   Database,
//   ShieldCheck,
//   Sparkles,
//   Wrench,
// } from "lucide-react";

// const experiences = [
//   {
//     role: "Full Stack Developer",
//     company: "Tinitiate Technologies Pvt Ltd",
//     duration: "Feb 2024 – Present",

//     description:
//       "Working as a full-stack developer building scalable web applications with focus on system design, performance, and real-world deployment.",

//     contributions: [
//       {
//         icon: <Briefcase className="w-4 h-4" />,
//         text: "Collaborated with team members to design and develop production-ready web applications",
//       },

//       {
//         icon: <Code2 className="w-4 h-4" />,
//         text: "Developed backend APIs using Express.js and structured them for efficient frontend integration",
//       },

//       {
//         icon: <Sparkles className="w-4 h-4" />,
//         text: "Developed applications using JavaScript, React, and Next.js across frontend and backend",
//       },

//       {
//         icon: <Database className="w-4 h-4" />,
//         text: "Designed normalized relational database schemas ensuring efficient data flow and integrity",
//       },

//       {
//         icon: <Wrench className="w-4 h-4" />,
//         text: "Optimized application performance using browser DevTools and debugging techniques",
//       },

//       {
//         icon: <ShieldCheck className="w-4 h-4" />,
//         text: "Handled debugging, testing, and maintaining application stability in production",
//       },

//       {
//         icon: <Briefcase className="w-4 h-4" />,
//         text: "Contributed to feature planning, implementation, and iterative improvements",
//       },
//     ],

//     tech: [
//       "JavaScript",
//       "Next.js",
//       "React",
//       "Node.js",
//       "Express.js",
//       "MySQL",
//       "Git",
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="px-6 max-w-6xl mx-auto ">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center"
//       >



//         <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
//           Experience
//         </h2>

//         <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
//           My professional experience focusing on system design,
//           development workflow, and scalable application building.
//         </p>

//       </motion.div>

//       {/* Experience Card */}
//       <div className="mt-16">

//         {experiences.map((exp, index) => (
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
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

//               <div>
//                 <p className="text-sm text-orange-300">
//                   {exp.company}
//                 </p>

//                 <h3 className="mt-2 text-2xl font-semibold text-white">
//                   {exp.role}
//                 </h3>
//               </div>

//               <div
//                 className="
//                   px-4 py-2 rounded-full
//                   bg-white/5
//                   border border-white/10
//                   text-sm text-gray-300
//                   w-fit
//                 "
//               >
//                 {exp.duration}
//               </div>

//             </div>

//             {/* Description */}
//             <p className="mt-6 text-gray-300 leading-relaxed">
//               {exp.description}
//             </p>

//             {/* Contributions */}
//             <div className="mt-8">

//               <h4 className="text-sm uppercase tracking-wider text-gray-500">
//                 Key Contributions
//               </h4>

//               <div className="mt-5 space-y-4">

//                 {exp.contributions.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start gap-3"
//                   >

//                     <div className="text-orange-300 mt-1">
//                       {item.icon}
//                     </div>

//                     <p className="text-sm text-gray-300 leading-relaxed">
//                       {item.text}
//                     </p>

//                   </div>
//                 ))}

//               </div>

//             </div>

//             {/* Tech Stack */}
//             <div className="mt-8 flex flex-wrap gap-3">

//               {exp.tech.map((tech, idx) => (
//                 <span
//                   key={idx}
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

//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";

const experiences = [
{
role: "Full Stack Developer",

company: "Tinitiate Technologies Pvt Ltd",

duration: "Feb 2024 – Mar 2026",

description:
  "Working on scalable full stack systems, dashboard architectures, AI automation workflows, and production-focused web applications.",

contributions: [
  "Developed scalable REST APIs, authentication workflows, and RBAC authorization systems",

  "Built reusable dashboard architectures and responsive frontend systems using React.js and Next.js",

  "Integrated frontend applications with backend services and relational database systems",

  "Contributed to AI-powered automation workflows integrating OpenAI API, Puppeteer, and ffmpeg",

  "Optimized application performance, debugging workflows, and production stability",

  "Collaborated on feature planning, implementation, and scalable application improvements",
],

tech: [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "JWT",
  "RBAC",
  "Git",
],


},
];

export default function Experience() {
return ( <section className="px-6 max-w-6xl mx-auto py-14">

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
      Experience
    </h2>

    <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
      Professional experience building scalable full stack systems,
      automation workflows, and production-ready applications.
    </p>

  </motion.div>

  {/* Card */}
  <div className="mt-16">

    {experiences.map((exp, index) => (
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
        "
      >

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

          <div>

            <p className="text-sm text-orange-300">
              {exp.company}
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
              {exp.role}
            </h3>

          </div>

          <div
            className="
              px-4 py-2 rounded-full
              bg-white/5
              border border-white/10
              text-sm text-gray-300
              w-fit
            "
          >
            {exp.duration}
          </div>

        </div>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl">
          {exp.description}
        </p>

        {/* Contributions */}
        <div className="mt-8">

          <h4 className="text-sm uppercase tracking-wider text-gray-500">
            Engineering Highlights
          </h4>

          <ul className="mt-5 space-y-4">

            {exp.contributions.map((point, idx) => (
              <li
                key={idx}
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

          {exp.tech.map((tech, idx) => (
            <span
              key={idx}
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

      </motion.div>
    ))}

  </div>
</section>


);
}
