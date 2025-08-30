import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 transition z-60"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
