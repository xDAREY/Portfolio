"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Pettify (Start-up)",
    period: "May 2024 - Present",
    description:
      "Engineered core features for a Flutter-based pet e-commerce app, enabling pet adoption, accessories shopping, and offline cart functionality. Integrated Firebase services, OpenCage API for address autocomplete, and implemented token-based session validation. Led UI/UX theming and caching strategies for better performance and user retention.",
  },
  {
    title: "Mobile Developer",
    company: "Flex",
    period: "Jan 2023 - May 2023",
    description:
      "Built a mobile application in Java/XML for discovering leisure events, booking tickets, and goal-setting. Translated design prototypes into intuitive Material UI, integrated RESTful APIs, and ensured functionality with JUnit and cross-device testing. Collaborated closely with the backend team using Git-based workflows.",
  },
  {
    title: "Web Developer",
    company: "Golden Serenity Homecare",
    period: "Nov 2024 – Feb 2025",
    description:
      "Designed and developed a responsive website for a healthcare organization focused on homecare services. Built using HTML, CSS, and JavaScript, the site showcases available services and enhances outreach for prospective clients. Delivered a clean, accessible frontend aligned with the brand’s mission.",
  },
  {
    title: "Web Developer",
    company: "Pettify Landing Page",
    period: "Dec 2024 - Jan 2025",
    description:
      "Crafted a sleek, responsive landing page for Pettify using modern web technologies. Focused on smooth UI animations, accessibility, and responsive layouts that adapt seamlessly across screen sizes.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 pt-32 bg-black min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row"
            >
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-2 md:mt-0">
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
