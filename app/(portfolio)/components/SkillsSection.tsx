"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaJava, FaFileWord, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa"
import { SiFlutter, SiDart, SiJavascript, SiTypescript, SiFirebase, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si"
import NavigationBar from "./navigationBar"

type Skill = {
  name: string;
  icon: React.ElementType;
  proficiency: number;
}

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "React", icon: FaReact, proficiency: 75 },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 70 },
      { name: "HTML/CSS", icon: FaHtml5, proficiency: 90 },
      { name: "JavaScript", icon: SiJavascript, proficiency: 90 },
      { name: "TypeScript", icon: SiTypescript, proficiency: 70 },
      { name: "TailwindCSS", icon: SiTailwindcss, proficiency: 75 },
    ],
    mobile: [
      { name: "Flutter", icon: SiFlutter, proficiency: 90 },
      { name: "Dart", icon: SiDart, proficiency: 90 },
      { name: "Java/XML", icon: FaJava, proficiency: 70 },
    ],
    backend: [
      // { name: "Node.js", icon: FaNodeJs, proficiency: 75 },
      { name: "Firebase", icon: SiFirebase, proficiency: 85 },
      // { name: "MongoDB", icon: SiMongodb, proficiency: 70 },
      { name: "SQL", icon: FaDatabase, proficiency: 65 },
    ]
  }

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
    { id: "backend", label: "Backend" },
  ]

  return (
    <>
      <NavigationBar />
      <section className="py-24 pt-32 bg-black min-h-screen">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Skills & Expertise
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md border border-gray-800 p-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === category.id 
                      ? "bg-blue-500 text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories[activeTab as keyof typeof skillCategories].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-3xl text-blue-400 mr-3" />
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div 
                    className="bg-blue-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-400">Beginner</span>
                  <span className="text-xs text-blue-400">{skill.proficiency}%</span>
                  <span className="text-xs text-gray-400">Expert</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}