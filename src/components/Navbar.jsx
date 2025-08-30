import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-md text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">My Portfolio</h1>

        {/* Desktop menu + ThemeToggle */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-teal-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="bg-gray-700 dark:bg-gray-200 dark:text-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="bg-gray-700 dark:bg-gray-200 dark:text-gray-900 text-white px-3 py-2 rounded-full shadow-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition z-50"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
          <button onClick={() => setIsOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-4 p-6 md:hidden bg-gray-700 dark:bg-gray-800 rounded-lg shadow-lg backdrop-blur-md absolute right-6 left-6 z-40">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
