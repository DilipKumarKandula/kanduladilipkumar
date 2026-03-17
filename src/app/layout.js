// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white min-h-screen flex flex-col">

        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />
        </div>

        <Navbar />

        {/* KEY: pushes footer down */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}