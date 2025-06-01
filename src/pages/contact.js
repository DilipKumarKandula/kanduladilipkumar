import Header from '../components/Header';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-700">
          I&apos;m available for freelance work and open to full-time opportunities. Feel free to reach out!
        </p>
      </main>
    </>
  );
}