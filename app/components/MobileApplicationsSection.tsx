"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const mobileProjects = [
  {
    title: "Pettify Mobile",
    description:
      "A fully functional pet e-commerce mobile application built with Dart and Flutter.",
    videoPreview: "/app-preview.mp4",
  },
  {
    title: "Flex Mobile",
    description:
      "A comprehensive travel and event management platform that simplifies planning vacations, booking attraction tickets, securing accommodations, and arranging transportation for users.",
    videoPreview: "/app-preview.mp4",
  },
  {
    title: "Authentication App",
    description:
      "A basic authentication test app that validates user registration details, redirects successful signups to the homepage, and prompts re-login for incorrect inputs.",
    videoPreview: "/app-preview.mp4",
    githubLink: "https://github.com/xDAREY/Authentication-app",
    tools: ["JAVA", "XML", "SQLite"],
  },
  {
    title: "Type It",
    description:
      "A mobile game test that tests your typing speed. It is a very simple project and the user does not need to worry much as it helps in building how fast they can type on a mobile device. Let us call it a mobile 'mavins beacon'.",
    videoPreview: "/app-preview.mp4",
    githubLink: "https://github.com/xDAREY/TypeIT",
    tools: ["JAVA", "XML"],
  },
  {
    title: "Quiz-app",
    description:
      "This is an IQ game built for fun & nothing more. In the process of building it for the android platform various widgets were imported such as Timer, color, toast & various more. Special fonts were also added to the resource file.",
    videoPreview: "/app-preview.mp4",
    githubLink: "https://github.com/xDAREY/TypeIT",
    tools: ["JAVA", "XML"],
  },
];

export default function MobileApplicationsSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="mobile-apps"
      className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
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
          {mobileProjects.slice(0, showAll ? mobileProjects.length : 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <video width="100%" height="auto" controls>
                    <source src={project.videoPreview} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {project.githubLink && (
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              View Less
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
