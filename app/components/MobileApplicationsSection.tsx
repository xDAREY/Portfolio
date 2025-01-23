"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

const mobileProjects = [
  {
    title: "E-commerce App",
    description: "A fully functional e-commerce mobile application built with Flutter and Firebase.",
    image: "/ecommerce-app-mockup.jpg",
    videoPreview: "/ecommerce-app-preview.mp4",
    githubLink: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking app with workout plans and progress monitoring.",
    image: "/fitness-app-mockup.jpg",
    videoPreview: "/fitness-app-preview.mp4",
    githubLink: "https://github.com/yourusername/fitness-tracker",
  },
]

export default function MobileApplicationsSection() {
  return (
    <section id="mobile-apps" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Mobile Applications 📱
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <video width="100%" height="auto" controls>
                    <source src={project.videoPreview} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="flex justify-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

