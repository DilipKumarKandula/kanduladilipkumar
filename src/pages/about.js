import Head from 'next/head';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Kandula Dilip Kumar</title>
      </Head>

      <main style={{ padding: '2rem' }}>
        <SectionTitle title="About Me" />

        <p style={{ lineHeight: '1.6' }}>
          Hi, I'm <strong>Kandula Dilip Kumar</strong>, a passionate Full Stack Developer with experience in building modern web applications using technologies like <strong>Node.js</strong>, <strong>React</strong>, <strong>Express.js</strong>, and <strong>Next.js</strong>.
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          I'm currently working at <strong>Tinitiate Technologies Pvt Ltd</strong> since May 2024, where I build scalable backend services, REST APIs, and integrate full stack features with high code quality.
        </p>

        <SectionTitle title="Skills & Technologies" />
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>JavaScript (ES6+), HTML5, CSS3, Bootstrap</li>
          <li>React.js, Next.js</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, REST API, File System</li>
          <li>Git, GitHub, Vercel</li>
        </ul>

        <SectionTitle title="Resume" />
        <p>
          You can view or download my resume here: 
          <a href="/resume.pdf" target="_blank" style={{ marginLeft: '0.5rem' }}>
            Download Resume →
          </a>
        </p>
      </main>
    </>
  );
}