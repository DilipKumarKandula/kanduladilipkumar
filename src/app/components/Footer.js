// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-[#0B1120]">

//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* Top */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">

//           {/* Left */}
//           <div className="text-center md:text-left">

//             <h3 className="text-xl font-semibold text-white">
//               Dilip Kumar
//             </h3>

//             <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
//               Full Stack Developer focused on scalable web applications,
//               AI-powered workflows, and modern product engineering.
//             </p>

//           </div>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">

//             {/* GitHub */}
//             <a
//               href="https://github.com/DilipKumarKandula"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 p-3 rounded-full
//                 border border-white/10
//                 bg-white/5
//                 text-gray-300
//                 hover:text-white
//                 hover:border-orange-500/30
//                 transition
//               "
//             >
//               <FaGithub className="w-5 h-5" />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://linkedin.com/in/kandula-dilip-kumar-94b20a221"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 p-3 rounded-full
//                 border border-white/10
//                 bg-white/5
//                 text-gray-300
//                 hover:text-white
//                 hover:border-orange-500/30
//                 transition
//               "
//             >
//               <FaLinkedin className="w-5 h-5" />
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:kanduladilipkumar7@gmail.com"
//               className="
//                 p-3 rounded-full
//                 border border-white/10
//                 bg-white/5
//                 text-gray-300
//                 hover:text-white
//                 hover:border-orange-500/30
//                 transition
//               "
//             >
//               <HiOutlineMail className="w-5 h-5" />
//             </a>

//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">

//           <p className="text-sm text-gray-500">
//             © {new Date().getFullYear()} Dilip Kumar. All rights reserved.
//           </p>



//         </div>

//       </div>

//     </footer>
//   );
// }




import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Dilip Kumar
            </h3>

            <p className="mt-3 text-sm text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer focused on scalable web applications,
              AI-powered workflows, and modern product engineering.
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/DilipKumarKandula"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                p-3 rounded-full
                border border-white/10
                bg-white/5
                text-gray-400
                hover:text-white
                hover:border-orange-500/30
                hover:bg-white/10
                transition-all duration-300
              "
            >
              <FaGithub className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kandula-dilip-kumar-94b20a221"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                p-3 rounded-full
                border border-white/10
                bg-white/5
                text-gray-400
                hover:text-white
                hover:border-orange-500/30
                hover:bg-white/10
                transition-all duration-300
              "
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href="mailto:kanduladilipkumar7@gmail.com"
              aria-label="Email"
              className="
                p-3 rounded-full
                border border-white/10
                bg-white/5
                text-gray-400
                hover:text-white
                hover:border-orange-500/30
                hover:bg-white/10
                transition-all duration-300
              "
            >
              <HiOutlineMail className="w-5 h-5" />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10">

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Dilip Kumar. Full Stack Developer.
          </p>

        </div>

      </div>

    </footer>
  );
}