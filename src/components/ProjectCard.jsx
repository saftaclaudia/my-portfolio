import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";

export default function ProjectCard({ title, images, githubLink, tech }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md transition-colors duration-500 hover:scale-105 transform">
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      {/* Image carousel */}
      <div className="relative w-full h-56 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot`}
          className="w-full h-full object-cover rounded-lg transition duration-500"
        />

        {/* Prev button */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-900 p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-300 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next button */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-900 p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-300 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-teal-500 text-white dark:bg-teal-400 dark:text-gray-900 px-3 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <div className="mt-4 flex justify-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-teal-500 dark:bg-teal-400 dark:text-gray-900 hover:bg-teal-600 dark:hover:bg-teal-500 px-4 py-2 rounded-lg text-white shadow transition"
        >
          <Github size={18} />
          View on GitHub
        </a>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index
                ? "bg-teal-500 dark:bg-teal-400"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
