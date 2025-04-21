// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// import { FaGithub } from "react-icons/fa"
// import { motion } from "framer-motion"

// export default function Header() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   return (
//     <motion.header
//       className="fixed w-full z-10 bg-white dark:bg-gray-900 transition-colors duration-300"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     >
//       <nav className="container mx-auto px-6 sm:px-12 py-3 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
//           xDarey
//         </Link>
//         <div className="flex items-center space-x-4">
//           <Link href="https://github.com/xDAREY" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
//           </Link>
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
//           >
//             {theme === "dark" ? "🌞" : "🌙"}
//           </button>
//         </div>
//       </nav>
//     </motion.header>
//   )
// }
