// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (data.success) {
//       alert("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } else {
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <section id="contact" className="px-6 max-w-5xl mx-auto mt-20 mb-20">

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-2xl md:text-3xl font-semibold"
//       >
//         Contact
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="mt-4 text-gray-400 max-w-xl"
//       >
//         I&apos;m open to opportunities. Send me a message 🚀
//       </motion.p>

//       {/* FORM */}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="mt-8 flex flex-col gap-4"
//       >
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//           className="px-4 py-3 rounded-md bg-white/5 border border-white/10"
//         />

//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//           className="px-4 py-3 rounded-md bg-white/5 border border-white/10"
//         />

//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           rows="5"
//           required
//           className="px-4 py-3 rounded-md bg-white/5 border border-white/10"
//         />

//         <button
//           type="submit"
//           className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </motion.form>

//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4  bg-gradient-to-b from-white to-slate-50">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 sm:p-10"
      >

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
          Let’s Work Together 🚀
        </h2>

        <p className="mt-3 text-gray-500 text-center text-sm sm:text-base">
          Open to full-time and freelance opportunities. I usually respond within 24 hours.
          
        </p>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </motion.div>
    </section>
  );
}