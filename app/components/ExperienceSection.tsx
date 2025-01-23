"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Pettify (Start-up)",
    period: "May 2024 - Present",
    description:
      "Developed and maintained mobile applications using Dart and Flutter. Implemented backend solutions with Firebase and MongoDB, collaborated with design teams to create user-friendly interfaces, and integrated third-party APIs to enhance app functionality. Conducted code reviews and testing, contributing to a feature that increased user engagement.",
  },
  {
    title: "Mobile Developer",
    company: "Flex",
    period: "Jan 2023 - May 2023",
    description:
      "Led mobile development using Java and XML with material design principles. Collaborated with the backend team to integrate APIs, implemented JUnit testing for code efficiency, and used Git for version control. Delivered consistent UI designs and optimized application functionality.",
  },
  {
    title: "Web Developer",
    company: "Pettify Landing Page",
    period: "Dec 2024 - Jan 2025",
    description:
      "Built a responsive and visually appealing landing page for Pettify. Leveraged modern web technologies like HTML and CSS to create a seamless user experience.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
