"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "XP", path: "/experience" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    // { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.header
      className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: GitHub and Theme Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* <Link href="https://github.com/xDAREY" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-white transition-colors" />
          </Link> */}
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button> */}
        </div>

        {/* Center: Navigation Links (Responsive and Wrapped) */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`px-2 py-1 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
