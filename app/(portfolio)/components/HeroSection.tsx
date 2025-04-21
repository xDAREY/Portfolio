"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  const handleDownloadClick = async () => {
    try {
      await fetch("https://submit-form.com/xxj8UpSvR", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "Resume Download",
          timestamp: new Date().toISOString(),
          page: window.location.href,
        }),
      });
    } catch {
      // silent fail
    }
  };

  return (
    <section
      id="hero"
      className="hero-section min-h-screen flex flex-col items-center justify-center text-center bg-black"
    >
      {/* Header / Intro */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 px-6 py-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Oluwadare Emmanuel
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Flutter & Web Developer</p>

        <div className="max-w-2xl mx-auto space-y-4 text-gray-400">
          <p>
            I'm a Software Developer specializing in Flutter and Web technologies, passionate
            about crafting innovative solutions through code.
          </p>
          <p>
            From designing intuitive user interfaces to optimizing performance, I collaborate
            with cross-functional teams to build high-quality, scalable applications that
            enhance user experiences.
          </p>
        </div>

        {/* View & Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <motion.a
            href="/resume.pdf"
            download="Oluwadare_Emmanuel_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            onClick={handleDownloadClick}
          >
            Download Resume 📄
          </motion.a>

          <Link href="#resume-viewer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-colors"
            >
              View Resume
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center space-x-6 mb-12"
      >
        {[{
           href: "https://www.linkedin.com/in/oluwadare-emmanuel-4a0b75270",
           icon: <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-500 transition-colors" />
         },{
           href: "https://wa.me/+2349036113191",
           icon: <FaWhatsapp className="text-3xl text-green-700 hover:text-green-500 transition-colors" />
         },{
           href: "https://twitter.com/xdarey_",
           icon: <FaTwitter className="text-3xl text-blue-400 hover:text-blue-400 transition-colors" />
         },{
           href: "mailto:oluwadare.emmanuel15@gmail.com",
           icon: <FaEnvelope className="text-3xl text-red-500 hover:text-red-500 transition-colors" />
         }].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* Resume Viewer */}
      <div id="resume-viewer" className="w-full flex justify-center px-4 mb-12">
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="rounded-lg shadow-lg"
        >
          <p className="text-gray-400">
            It looks like your browser doesn’t support embedded PDFs.{" "}
            <a
              href="/resume.pdf"
              download="Oluwadare_Emmanuel_Resume.pdf"
              className="text-blue-500 hover:underline"
            >
              Click here to download the resume.
            </a>
          </p>
        </object>
      </div>
    </section>
  );
}
