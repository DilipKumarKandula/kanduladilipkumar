/* src/pages/index.tsx */
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiOracle,
  SiGit,
  SiGithub,
} from 'react-icons/si';         // Simple-Icons set
import { FaJava } from 'react-icons/fa';          // Font-Awesome logo for Java
import { MdWork } from 'react-icons/md';          // Material-Icons work marker
import Header from '../components/Header';        // your default-export header

/* ─────────── Helpers ─────────── */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 2 },
//   }),
// };

/* ─────────── Page ─────────── */
export default function Home() {
  /* Skills */
  const skills = [
    { Icon: FaJava,       label: 'Java' },        // ← replaced SiJava
    { Icon: SiJavascript, label: 'JavaScript' },
    { Icon: SiHtml5,      label: 'HTML5' },
    { Icon: SiCss3,       label: 'CSS3' },
    { Icon: SiReact,      label: 'React.js' },
    { Icon: SiNextdotjs,  label: 'Next.js' },
    { Icon: SiNodedotjs,  label: 'Node.js' },
    { Icon: SiMysql,      label: 'MySQL' },
    { Icon: SiOracle,     label: 'Oracle' },
    { Icon: SiGit,        label: 'Git' },
    { Icon: SiGithub,     label: 'GitHub' },
  ];

  /* Experience */
  const experience = [
    {
      title: 'Developer — Tinitiate Technologies Pvt Ltd',
      period: 'May 2024 – Present',
      points: [
        'Built an internal Learning Management System with Node.js, Bootstrap & JavaScript.',
        'Designed a gamified LMS in Next.js to boost learner engagement.',
        'Focused on responsive UI, interactive modules, and performance optimisation.',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Kandula Dilip Kumar | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Kandula Dilip Kumar – Full-Stack React/Next.js developer crafting scalable web apps."
        />
      </Head>

      <Header />

      {/* ─── Hero ─── */}
      <section className="relative isolate overflow-hidden">
        <motion.div
          className="absolute -z-10 right-[-15rem] top-[-15rem] h-[30rem] w-[30rem] rounded-full bg-blue-100"
          // initial={{ scale: 0.8, opacity: 0 }}
          // animate={{ scale: 1, opacity: 0.4 }}
          // transition={{ duration: 2, ease: 'easeOut' }}
        />

        <motion.main
          className="mx-auto max-w-4xl px-4 py-28 text-center"
          initial="hidden"
          animate="visible"
          // variants={fadeUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Kandula Dilip Kumar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
            Full-Stack Developer specialising in{' '}
            <strong>React</strong>, <strong>Next.js</strong>,{' '}
            <strong>Java</strong> &amp; modern UI/UX — turning complex ideas
            into <em>scalable, high-performance</em> products.
          </p>
        </motion.main>
      </section>

      {/* ─── Skills Grid ─── */}
      {/* <section className="border-t py-16"> */}
      <section className=" mb-16">
        <motion.h2
          className="mb-10 text-center text-3xl font-semibold text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // variants={fadeUp}
        >
          Technical Skills
        </motion.h2>

        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8 px-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map(({ Icon, label }, idx) => (
            <motion.div
              key={label}
              className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm transition hover:shadow-lg"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <Icon className="text-3xl text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

     
    </>
  );
}
