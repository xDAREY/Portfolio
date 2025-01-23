"use client"

import { motion } from "framer-motion"
import { FaCode, FaMobile, FaServer, FaDesktop } from "react-icons/fa"

const services = [
 {
    title: "Mobile App Development",
    description:
      "Creating robust and user-friendly mobile applications using Flutter for both iOS and Android platforms.",
    icon: FaMobile,
  },
  {
    title: "Web Development",
    description: "I design and build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript that work on every type of browser including Safari, Chrome, Firefox, Brave, etc.",
    icon: FaDesktop,
  },
  {
    title: "API Integrations",
    description:
      "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
    icon: FaServer,
  },
  {
    title: "Version Control & Collaboration",
    description: "Working with tools like Git and Github for version control and ease of collaborating on projects.",
    icon: FaCode,
  },
 
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Services I Offer 🚀
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <service.icon className="text-4xl mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

