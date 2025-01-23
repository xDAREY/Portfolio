"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Oluwadare Emmanuel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Flutter & Web Developer
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Passionate about creating beautiful, functional, and user-friendly applications. 🚀
          </p>
          <motion.a
            href="/resume.pdf"
            download="Oluwadare_Emmanuel_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Download Resume 📄
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/oluwadare-emmanuel-4a0b75270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
        
          <a
            href="https://wa.me/+2349036113191"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl text-gray-600 hover:text-green-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com/xdarey_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl text-gray-600 hover:text-blue-400 transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

