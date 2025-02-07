import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaDatabase, FaMicrosoft, FaAngular } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center text-center px-6 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures it animates only once
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Hi, I'm <strong>Shivam Kumar Singh</strong>, a passionate <strong>web developer</strong> with expertise in <strong>React, JavaScript, C#, ASP.NET, Angular, and databases</strong>.  
        I love building modern, user-friendly web applications that provide seamless experiences.
      </motion.p>

      {/* Skills Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-6 text-lg font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg">
          <FaReact className="text-4xl text-blue-500" />
          <span>React</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg">
          <FaJsSquare className="text-4xl text-yellow-500" />
          <span>JavaScript</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg">
          <FaAngular className="text-4xl text-red-500" />
          <span>Angular</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg">
          <FaMicrosoft className="text-4xl text-purple-500" />
          <span>C# & ASP.NET</span>
        </div>

        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg">
          <FaDatabase className="text-4xl text-green-500" />
          <span>MySQL</span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;