import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
};

export default ThemeToggle;