import Head from 'next/head';
import Header from '../components/Header';

export default function Works() {
  const styles = {
    main: {
      maxWidth: '1024px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'sans-serif',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    project: {
      marginBottom: '2rem',
      padding: '1.5rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      backgroundColor: '#f9fafb',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#111827',
    },
    description: {
      fontSize: '1rem',
      color: '#4b5563',
      lineHeight: '1.6',
    },
  };

  return (
    <>
      <Header />
      <Head>
        <title>Works - Dilip Kumar</title>
      </Head>
      <main style={styles.main}>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 'bold', marginBottom: '1rem',  color: 'black'}}>My Projects & Works</h1>

        <div style={styles.project}>
          <h2 style={styles.title}>LMS Web Application</h2>
          <p style={styles.description}>
            A complete Learning Management System built with React, Node.js, and Bootstrap.
            It includes user authentication, course management, and a responsive UI.
          </p>
        </div>

        <div style={styles.project}>
          <h2 style={styles.title}>Gamified LMS Platform</h2>
          <p style={styles.description}>
            Developed a gamified learning experience using JavaScript and HTML. Added interactive UI elements and a point-based reward system.
          </p>
        </div>

        <div style={styles.project}>
          <h2 style={styles.title}>Task Tracker Backend (Node.js)</h2>
          <p style={styles.description}>
            Built a full CRUD REST API using Node.js. Implemented real-time task creation, updating, and deletion with JSON file persistence.
          </p>
        </div>

        <div style={styles.project}>
          <h2 style={styles.title}>Portfolio Website</h2>
          <p style={styles.description}>
            Designed and developed a personal portfolio using Next.js to showcase skills and projects. Hosted on GitHub and deployed via Vercel.
          </p>
        </div>
      </main>
    </>
  );
}
