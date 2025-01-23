"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaJava, FaFileWord, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiFlutter, SiDart, SiJavascript, SiTypescript, SiFirebase } from "react-icons/si"

const skills = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Firebase", icon: SiFirebase },
  { name: "Java/XML", icon: FaJava },
  { name: "MS Word", icon: FaFileWord },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My Skills 🛠️
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <skill.icon className="text-5xl mb-2 text-blue-500" />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

