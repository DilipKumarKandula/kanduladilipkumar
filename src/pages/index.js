import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kandula Dilip Kumar | Portfolio</title>
        <meta name="description" content="Portfolio of Kandula Dilip Kumar - Full Stack Developer" />
      </Head>

      <Header />

      <main style={styles.main}>
        <h2 style={styles.title}>Kandula Dilip Kumar</h2>
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
