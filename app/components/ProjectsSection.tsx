"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Flutter E-commerce App",
    description: "A fully functional e-commerce mobile application built with Flutter and Firebase.",
    image: "/flutter-ecommerce.jpg",
    demoLink: "https://example.com/flutter-ecommerce-demo",
    githubLink: "https://github.com/yourusername/flutter-ecommerce",
  },
  {
    title: "React Weather Dashboard",
    description:
      "A responsive web application that displays real-time weather information using React and a weather API.",
    image: "/react-weather.jpg",
    demoLink: "https://example.com/react-weather-demo",
    githubLink: "https://github.com/yourusername/react-weather",
  },
  {
    title: "Node.js Task Manager",
    description: "A full-stack task management application built with Node.js, Express, and MongoDB.",
    image: "/nodejs-task-manager.jpg",
    demoLink: "https://example.com/task-manager-demo",
    githubLink: "https://github.com/yourusername/nodejs-task-manager",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 transition-colors"
                  >
                    GitHub
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

