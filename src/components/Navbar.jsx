import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md dark:shadow-gray-800 p-4 flex justify-between items-center z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <ScrollLink 
        to="hero" 
        smooth={true} 
        duration={800} 
        className="text-2xl font-bold dark:text-white cursor-pointer"
      >
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-[Playfair Display]">
          Shivam Kumar Singh
        </span>
      </ScrollLink>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <ScrollLink 
            key={item} 
            to={item.toLowerCase()} 
            smooth={true} 
            duration={800} 
            offset={-70} // Adjusts for navbar height
            className="text-lg dark:text-white relative group cursor-pointer"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ))}
      </div>

      {/* Right Side (Theme Toggle & Mobile Menu) */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="absolute top-16 right-4 bg-white dark:bg-black p-4 rounded-lg shadow-lg flex flex-col space-y-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <ScrollLink 
              key={item} 
              to={item.toLowerCase()} 
              smooth={true} 
              duration={800} 
              offset={-70}
              className="text-lg dark:text-white relative group cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;