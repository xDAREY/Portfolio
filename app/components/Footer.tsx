import { FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/oluwadare-emmanuel-4a0b75270" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-500 transition-colors" />
          </a>

          <a href="https://wa.me/+2349036113191" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-3xl text-gray-600 hover:text-green-500 transition-colors" />
          </a>
          <a href="https://twitter.com/xdarey_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-gray-600 hover:text-blue-400 transition-colors" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} xDarey. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

