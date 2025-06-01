import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kandula Dilip Kumar | Portfolio</title>
        <meta name="description" content="Portfolio of Kandula Dilip Kumar - Full Stack Developer" />
      </Head>

      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Dilip Kumar</h1>
        <nav>
          <ul style={styles.navList}>
            <li><Link href="/"><span style={styles.link}>Home</span></Link></li>
            <li><Link href="/about"><span style={styles.link}>About</span></Link></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>Resume</a></li>
            <li><Link href="/projects"><span style={styles.link}>Works</span></Link></li>
            <li><Link href="/contact"><span style={styles.link}>Contact</span></Link></li>
          </ul>
        </nav>
      </header>

      {/* MAIN SECTION */}
      <main style={styles.main}>
        <h2 style={styles.title}>Hi, I'm Kandula Dilip Kumar</h2>
        <p style={styles.summary}>
          A dedicated and detail-oriented Full Stack Developer specializing in building modern, scalable web applications. 
          With hands-on experience in <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>, 
          I turn complex problems into elegant digital solutions. Currently crafting impactful software at <strong>Tinitiate Technologies Pvt Ltd</strong>.
        </p>
      </main>
    </>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#0070f3',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    fontSize: '1rem',
    cursor: 'pointer',
  },
  main: {
    padding: '4rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
    color: '#222',
  },
  summary: {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#444',
  },
};
