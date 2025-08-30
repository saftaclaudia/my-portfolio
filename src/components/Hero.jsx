import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-center px-6
                        bg-gray-100 dark:bg-gray-900
                        text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        Hi, I'm{" "}
        <span className="text-teal-400 dark:text-teal-300">Claudia Safta</span>
      </h1>

      <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-500">
        Front-End Developer | React & Tailwind Enthusiast
      </p>

      <Link
        to="/projects"
        className="px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition
                   bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500
                   text-white dark:text-gray-900"
      >
        View My Projects
      </Link>
    </section>
  );
}
