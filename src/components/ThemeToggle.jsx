import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-10 p-2 w-10 h-10 rounded-full md:right-4"
      whileTap={{ scale: 0.9 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
};

export default ThemeToggle;