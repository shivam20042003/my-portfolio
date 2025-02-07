import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[75vh] flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6"
    >
      {/* Hero Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Hi, I'm <span className="text-blue-500">Shivam Kumar Singh</span>
      </motion.h1>

      {/* Hero Subtext with Apple Link */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        Full-Stack Developer |{" "}
        <a
          href="https://www.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Apple-Inspired Minimalist
        </a>{" "}
        | Innovating for the Future
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
      >
        <motion.a
          href="/#projects"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 transition transform"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="/#contact"
          className="px-6 py-3 border border-gray-800 dark:border-white text-black dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition transform"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;