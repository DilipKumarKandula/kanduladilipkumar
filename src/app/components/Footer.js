export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-400 text-sm">
        
        <p>© {new Date().getFullYear()} Dilip Kumar</p>

        <p className="mt-2">
          Built with Next.js • Designed for performance & UX
        </p>

      </div>
    </footer>
  );
}