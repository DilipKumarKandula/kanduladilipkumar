import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
        <p className="text-lg text-gray-700">
          I&apos;m a highly motivated and detail-oriented developer with a passion for creating clean, scalable web applications. My portfolio showcases projects that blend intuitive UI with powerful backend logic.
        </p>
      </main>
    </>
  );
}
