"use client";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { useState } from "react";

const webProjects = [
  {
    title: "xDareyCoinHub",
    description:
      "A centralized asset trading platform ranging between crypto, forex and stocks market.",
    livePreview: "https://xdarey-coinhub.vercel.app",
    github: "https://github.com/xDAREY/xDareyCoinHub",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.jpg",
  },
  {
    title: "Customer-Support Agent Platform",
    description:
      "The Customer-Support Agent Platform is a web-based solution designed to streamline customer support operations by providing agents with intuitive tools to manage inquiries, track conversations, and resolve issues efficiently.",
    livePreview: "https://mycustomer-support-agent.vercel.app",
    github: "https://github.com/xDAREY/customer-support-agent-",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.jpg",
  },
  {
    title: "Golden Serenity Homecare",
    description:
      "A responsive homecare website dedicated to patients in need of care workers, also listing services rendered by the care organization.",
    livePreview: "https://goldenserenityhomecare.org",
    github: "https://github.com/example/golden-serenity",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.jpg",
  },
  {
    title: "Pettify Landing Page",
    description:
      "The Pettify Landing Page is a vibrant and engaging introduction to the platform, designed to showcase its pet care services.",
    livePreview: "https://pettify.co",
    tools: ["HTML", "CSS", "JavaScript"],
    image: "/placeholder.jpg",
  },
];

const mobileProjects = [
    {
    title: "CoEdit — Collaborative Text Editor",
    description:
      "A production-ready real-time collaborative text editor using Flutter, Riverpod state management, and Firebase Cloud Firestore that enables simultaneous multi-user editing with reliable synchronization and low latency. Implemented intelligent diff-merge algorithms with conflict resolution and architected responsive UI with adaptive layouts.",
    tools: ["Flutter", "Dart", "Riverpod", "Firebase Firestore", "Real-time Sync"],
    github: "https://github.com/xDAREY/coedit",
    livePreview: "https://drive.google.com/file/d/1c2iMy3dFsdh0B3aL8dpHu5DM9Y_3RHpU/view?usp=drive_link",
    featured: true,
  },
  {
    title: "3D Controlla",
    description:
      "An immersive Flutter app for rendering and interacting with .glb 3D models. Features include animation playback, zoom, camera orbit, and model import/export.",
    tools: ["Flutter", "Dart", "model_viewer_plus", "file_picker"],
    livePreview: "https://appetize.io/app/3dcontrolla-demo",
    github: "https://github.com/xDAREY/HNG-MOBILE-TASK/tree/main/3d_controlla",
  },
  {
    title: "Country Info App",
    description:
      "Browse countries and explore population, capital, presidents, and more. Features theme switching, real-time API data, and responsive layout.",
    tools: ["Flutter", "Dart", "http", "shared_preferences"],
    livePreview: "https://appetize.io/app/countryinfo-demo",
    github: "https://github.com/xDAREY/HNG-MOBILE-TASK/tree/main/country_info",
  },
  {
    title: "QR Create",
    description:
      "A modern QR code generator for WiFi, contacts, text, and more. Offline storage, theming, history tracking, and share features included.",
    tools: ["Flutter", "Dart", "Riverpod", "Hive", "qr_flutter"],
    github: "https://github.com/xDAREY/qr_create",
  },
  {
    title: "Pettify Mobile",
    description:
      "A fully functional pet e-commerce mobile application built with Dart and Flutter.",
    tools: ["Flutter", "Dart", "State Management"],
    livePreview: null,
  },
  {
    title: "Flex Mobile",
    description:
      "A comprehensive travel and event management platform that simplifies planning vacations, booking attraction tickets, securing accommodations, and arranging transportation for users.",
    tools: ["Java", "XML", "Android SDK", "Firebase"],
    livePreview: null,
  },
  {
    title: "Authentication App",
    description:
      "A basic authentication test app that validates user registration details, redirects successful signups to the homepage, and prompts re-login for incorrect inputs.",
    tools: ["JAVA", "XML", "SQLite"],
    github: "https://github.com/xDAREY/Authentication-app",
    livePreview: null,
  },
  {
    title: "Type It",
    description:
      "A mobile game that tests typing speed. Designed to help users improve their mobile typing skills in a fun way.",
    tools: ["JAVA", "XML"],
    github: "https://github.com/xDAREY/TypeIT",
    livePreview: null,
  },
  {
    title: "Quiz-app",
    description:
      "This is an IQ game built for fun. Implements widgets like timers, toast messages, and custom fonts for enhanced UI experience.",
    tools: ["JAVA", "XML"],
    github: "https://github.com/xDAREY/TypeIT",
    livePreview: null,
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("mobile");
  const [showAllMobile, setShowAllMobile] = useState(false);

  const projects = activeTab === "web" ? webProjects : mobileProjects;
  const displayedMobileProjects = showAllMobile ? mobileProjects : mobileProjects.slice(0, 3);

  return (
    <section className="py-24 pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md border border-gray-800 p-1">
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === "mobile"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Mobile Projects
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === "web"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Web Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === "web" ? projects : displayedMobileProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-blue-500 text-gray-800 dark:text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  {project.livePreview && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                    >
                      <FaEye className="mr-2" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                    >
                      <FaGithub className="mr-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeTab === "mobile" && mobileProjects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              {showAllMobile ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
