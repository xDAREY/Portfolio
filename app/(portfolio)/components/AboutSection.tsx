"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
        >
          I'm a passionate developer with expertise in Flutter for mobile app development and modern web technologies.
          With a keen eye for design and a love for clean, efficient code, I strive to create applications that not only
          function flawlessly but also provide an exceptional user experience. When I'm not coding, you can find me
          exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs
          and community events.
        </motion.p>
      </div>
    </section>
  )
}

