import { FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black py-8 border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/xDAREY" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors" />
          </a>

          <a href="https://www.linkedin.com/in/oluwadare-emmanuel-4a0b75270" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-600 dark:text-blue-700 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </a>

          <a href="https://wa.me/+2349036113191" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl text-gray-600 dark:text-green-700 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </a>

          <a href="https://twitter.com/xdarey_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-600 dark:text-blue-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          &copy; {new Date().getFullYear()} xDarey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
