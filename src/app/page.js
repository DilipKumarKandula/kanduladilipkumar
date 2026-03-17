// src/app/page.js
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Projects />
    </>
  );
}