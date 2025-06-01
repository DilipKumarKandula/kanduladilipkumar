import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem',  color: 'black'}}>
          About Me
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#4a5568' }}>
          Hi, I&apos;m Dilip — a passionate full-stack developer with experience in building responsive, user-friendly applications.
        </p>
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginTop: '1rem' }}>
          I&apos;ve worked with technologies like React, Next.js, Node.js, and MongoDB to deliver performant and scalable solutions.
        </p>
      </main>
    </>
  );
}
