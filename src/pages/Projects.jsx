import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Jain Tiffin Shala",
    description: "A subscription-based tiffin service website built with React and Sequelize.",
    image: "/images/jain-tiffin.png",
    liveDemo: "jts-frontend.vercel.app",
    github: "https://github.com/shivamks/jain-tiffin-shala",
  },
  {
    title: "Resume Builder",
    description: "A React-powered app for creating and downloading professional resumes.",
    image: "/images/resume-builder.png",
    liveDemo: "https://resume-builder.com",
    github: "https://github.com/shivamks/resume-builder",
  },
  {
    title: "Efficio Examiner",
    description: "A tool for automating the grading process of answer sheets, built with HTML, CSS, and Node.js.",
    image: "/images/efficio-examiner.png",
    liveDemo: "https://efficio-examiner.com",
    github: "https://github.com/shivamks/efficio-examiner",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[75vh] flex flex-col items-center text-center px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Code <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;