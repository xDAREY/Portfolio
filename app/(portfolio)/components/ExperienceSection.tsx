"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Pettify (Start-up)",
    period: "May 2024 - Present",
    description:
      "Architected and developed core features for a pet e-commerce mobile application using Flutter/Dart, encompassing pet adoption workflows, accessories marketplace, and dynamic cart management systems. Implemented comprehensive authentication and data persistence infrastructure using Firebase Auth and Firestore, with secure local storage solutions for seamless offline functionality. Engineered robust state management architecture using Riverpod and delivered advanced UX features including lifecycle-aware splash screens and intelligent address auto-complete powered by OpenCage API.",
  },
  {
    title: "Software Engineer",
    company: "HNG",
    period: "Jan 2025 - Mar 2025",
    description:
      "Architected multiple high-performance mobile applications including a Country Info App with real-time API integration and 3D Controlla, a 3D model viewer supporting animation playback using Flutter. Collaborated on Telex, a real-time messaging application, engineering WebSocket handler using Centrifugo to manage client connections and channel subscriptions, achieving reliable message delivery and low-latency communication. Participated in agile development cycles with weekly code reviews and sprint demos.",
  },
  {
    title: "Mobile Developer",
    company: "Flex",
    period: "Jan 2022 - Feb 2024",
    description:
      "Architected comprehensive travel and events discovery application using Java/XML with Android SDK, implementing event search algorithms, ticket purchasing workflows, and itinerary planning systems. Developed responsive UI components using RecyclerView adapters, ViewPager2, and custom Fragment architectures, translating Figma designs into Material Design components. Established comprehensive testing frameworks with JUnit, Espresso, and Mockito, achieving 85%+ code coverage, and implemented MVVM architectural pattern with Dagger2 dependency injection.",
  },
  {
    title: "AI Trainer",
    company: "Meta AI",
    period: "Jul 2024 - Sep 2024",
    description:
      "Collected, curated, and annotated image datasets to improve AI model training accuracy and performance. Verified AI-generated labels to improve training accuracy and ensure high-quality dataset standards. Recorded voice data for AI model training on Ray-Ban smart glasses, contributing to enhanced speech recognition capabilities across different dialects and languages.",
  },
  {
    title: "Software Developer (Intern)",
    company: "ALX Africa",
    period: "Jan 2021 - Nov 2021",
    description:
      "Built backend microservices using Spring Boot and API Gateway for routing and service orchestration, improving system scalability and maintainability. Created reusable UI components and supported frontend consistency across multiple application modules. Ran system stress tests to ensure service reliability and optimal performance under various load conditions.",
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
