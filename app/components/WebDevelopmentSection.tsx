"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaEye } from "react-icons/fa"

const webProjects = [
  {
    title: "E-learning Platform",
    description: "A comprehensive e-learning platform built with React and Node.js.",
    image: "/elearning-platform.jpg",
    livePreview: "https://elearning-example.com",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    challenges: "Implementing real-time video streaming and interactive quizzes.",
    keyFeatures: ["User authentication", "Course management", "Progress tracking", "Live sessions"],
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills.",
    image: "/portfolio-website.jpg",
    livePreview: "https://portfolio-example.com",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenges: "Creating a smooth, animated user experience across devices.",
    keyFeatures: ["Responsive design", "Dark mode", "Project showcase", "Contact form"],
  },
]

export default function WebDevelopmentSection() {
  return (
    <section id="web-projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Web Development Projects 💻
        </motion.h2>
        <div className="space-y-16">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Tools Used:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {project.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Challenges Solved:</h4>
                    <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      <FaEye className="mr-2" /> Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

