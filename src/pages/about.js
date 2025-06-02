import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'black',
          }}
        >
          About Me
        </h2>

        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '1rem' }}>
          I am a passionate developer with a strong focus on building dynamic and interactive web applications. I have a deep understanding of project requirements and develop solutions based on feature enhancements, code complexity, and potential conflicts.
        </p>

        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '1rem' }}>
          I take a structured approach to designing clean, efficient, and scalable code that ensures seamless functionality. My expertise includes creating user-friendly interfaces, integrating real-time features, and managing data efficiently.
        </p>

        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '1rem' }}>
          I approach development with a problem-solving mindset, continuously refining features to enhance usability and performance. I'm always eager to explore new technologies and improve my skills to build high-quality applications that are both functional and visually engaging.
        </p>

        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'black',
          }}
        >
          Technical Skills
        </h3>

        <ul style={{ fontSize: '1.125rem', color: '#4a5568', lineHeight: '1.8' }}>
          <li>✔ Frontend Development: React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS</li>
          <li>✔ Backend & Database: API integration, MySQL</li>
          <li>✔ UI/UX Design: Responsive layouts, interactive components</li>
          <li>✔ Optimization & Performance: Writing clean, scalable, and efficient code</li>
        </ul>

        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginTop: '2rem' }}>
          I am committed to continuous learning and delivering well-structured, high-performance applications that meet project requirements effectively.
        </p>
      </main>
    </>
  );
}
