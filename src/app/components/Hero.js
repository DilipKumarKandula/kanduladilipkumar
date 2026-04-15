// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#ffffff]">
      
//       {/* BACKGROUND ACCENT - Subtle oversized text for depth */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
//         <h1 className="text-[25vw] font-bold text-black leading-none">DEVELOPER</h1>
//       </div>

//       <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
//         {/* LEFT CONTENT */}
//         <div className="order-2 lg:order-1 text-center lg:text-left">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <p className="text-orange-500 font-mono tracking-widest text-sm uppercase font-bold">
//               Full Stack Developer · 2+ Years Experience
//             </p>
            
//             <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
//               DILIP <br /> KUMAR<span className="text-orange-500">.</span>
//             </h1>

//             <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
//               I build scalable learning platforms and modern web applications
//               using React, Next.js, Node.js, and MySQL with a focus on performance.
//             </p>

// <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

//   {/* PRIMARY CTA */}
//   {/* <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={() =>
//       document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
//     }
//     className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-orange-500 transition-colors duration-300"
//   >
//     Hire Me
//   </motion.button> */}

//   {/* SECONDARY CTA */}
//   {/* <motion.a
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     href="/resume/Kandula_Dilip_Kumar_Resume.pdf"
//     target="_blank"
//     className="px-8 py-4 border border-slate-300 text-slate-900 rounded-full font-bold hover:bg-slate-100 transition"
//   >
//     View Resume
//   </motion.a> */}

// </div>
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE - THE FLOATING PORTRAIT */}
//         <div className="order-1 lg:order-2 relative group flex justify-center">
          
//           {/* Decorative Square Behind */}
//           <motion.div 
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 12 }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] bg-orange-100 rounded-[2rem] -z-10" 
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative h-[400px] sm:h-[500px] w-full max-w-[450px]"
//           >
//             <Image
//               src="/profile.jpeg"
//               alt="Dilip Kumar"
//               fill
//               className="object-contain 
//                 /* Advanced Fading to mix with the design */
//                 [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%),radial-gradient(circle_at_center,black_80%,transparent_100%)]
//                 [mask-composite:intersect]
//                 drop-shadow-2xl"
//               priority
//             />
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// }
















"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50">

      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[22vw] font-bold text-black leading-none">
          DEVELOPER
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Tagline */}
            <p className="text-orange-500 font-mono tracking-widest text-sm uppercase font-bold">
              Full Stack Developer · 2+ Years Experience
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Dilip Kumar<span className="text-orange-500">.</span>
            </h1>

            {/* Value Statement */}
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build scalable LMS platforms and high-performance web applications
              using React, Next.js, and Node.js.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-col gap-2 text-sm text-gray-500">
            <p>✔ Built real-world production applications</p>
            <p>✔ Developed REST APIs & full-stack systems</p>
            <p>✔ Focused on performance & scalability</p>
            </div>

            {/* CTA BUTTONS */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              {/* Contact */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-orange-500 transition"
              >
                Contact Me
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/resume/Kandula_Dilip_Kumar_Resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-300 text-slate-900 rounded-full font-bold hover:bg-slate-100 transition"
              >
                View Resume
              </motion.a>

            </div>

            {/* Availability */}
            <p className="text-xs text-green-600 font-medium">
              ● Available for opportunities
            </p>

          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="order-1 lg:order-2 relative flex justify-center">

          {/* Background shape */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 12 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[280px] h-[320px] sm:w-[380px] sm:h-[420px] 
              bg-orange-100 rounded-[2rem] -z-10"
          />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[360px] sm:h-[480px] w-full max-w-[420px]"
          >
            <Image
              src="/profile.jpeg"
              alt="Dilip Kumar"
              fill
              className="object-contain drop-shadow-2xl
              [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%),radial-gradient(circle_at_center,black_85%,transparent_100%)]
              [mask-composite:intersect]"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}