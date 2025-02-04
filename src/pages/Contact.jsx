import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-black text-black dark:text-white py-16"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Have a project in mind or just want to say hi? Feel free to drop me a message!  
        I'm always open to discussing new opportunities and collaborations.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
        method="POST"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-left text-gray-600 dark:text-gray-300 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-left text-gray-600 dark:text-gray-300 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-left text-gray-600 dark:text-gray-300 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 transition" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700 transition" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 transition" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="text-3xl text-red-500 hover:text-red-700 transition" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;