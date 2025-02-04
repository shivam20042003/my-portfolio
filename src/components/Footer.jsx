import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-6 px-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg font-medium mb-4 md:mb-0">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-700 transition" />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 transition" />
          </a>
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700 transition" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="text-2xl text-red-500 hover:text-red-700 transition" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Shivam Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;