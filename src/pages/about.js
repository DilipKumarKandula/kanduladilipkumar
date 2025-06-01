import Header from '../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi, I&apos;m Dilip — a passionate full-stack developer with experience in building responsive, user-friendly applications.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          I&apos;ve worked with technologies like React, Next.js, Node.js, and MongoDB to deliver performant and scalable solutions.
        </p>
      </main>
    </>
  );
}