import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-6 px-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Shivam Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;