// "use client"

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaEye, FaGithub } from "react-icons/fa";

// const webProjects = [
//   {
//     title: "xDareyCoinHub",
//     description:
//       "A centralized asset trading platform ranging between crypto, forex and stocks market.",
//     livePreview: "https://xdarey-coinhub.vercel.app",
//     github: "https://github.com/xDAREY/xDareyCoinHub",
//     tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//   },
//   {
//     title: "Customer-Support Agent Platform",
//     description:
//       "The Customer-Support Agent Platform is a web-based solution designed to streamline customer support operations by providing agents with intuitive tools to manage inquiries, track conversations, and resolve issues efficiently.",
//     livePreview: "https://mycustomer-support-agent.vercel.app",
//     github: "https://github.com/xDAREY/customer-support-agent-",
//     tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//   },
//   {
//     title: "Golden Serenity",
//     description:
//       "A responsive homecare website dedicated to patients in need of care workers, also listing services rendered by the care organization.",
//     livePreview: "https://goldenserenity.netlify.app",
//     github: "https://github.com/example/golden-serenity",
//     tools: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     title: "Pettify Landing Page",
//     description:
//       "The Pettify Landing Page is a vibrant and engaging introduction to the platform, designed to showcase its pet care services.",
//     livePreview: "https://pettify.netlify.app",
//     github: "https://github.com/example/pettify",
//     tools: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export default function WebDevelopmentSection() {
//   return (
//     <section
//       id="web-projects"
//       className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
//     >
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//         >
//           Web Development Projects 💻
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {webProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col"
//             >
//               {/* <div className="h-48 bg-gray-700 flex items-center justify-center">
//                 {project.image ? (
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-full"
//                   />
//                 ) : (
//                   <span className="text-gray-400">No Image Available</span>
//                 )}
//               </div> */}
//               <div className="p-6 flex-1 flex flex-col">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tools.map((tool, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4 mt-auto">
//                   <a
//                     href={project.livePreview}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
//                   >
//                     <FaEye className="mr-2" /> Preview
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
//                   >
//                     <FaGithub className="mr-2" /> GitHub
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
