import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }
    // add later (API / email service)
    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center 
                        px-6 py-12 bg-gray-100 dark:bg-gray-900 
                        text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
        Feel free to reach out!
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        ></textarea>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500
                     text-white dark:text-gray-900 px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-teal-500 dark:text-teal-400">
          {status}
        </p>
      )}

      {/* Social links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/saftaclaudia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={28}
            className="hover:text-teal-500 dark:hover:text-teal-400 transition"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/claudiasafta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={28}
            className="hover:text-teal-500 dark:hover:text-teal-400 transition"
          />
        </a>
        <a href="mailto:saftaclaudia27@yahoo.com">
          <Mail
            size={28}
            className="hover:text-teal-500 dark:hover:text-teal-400 transition"
          />
        </a>
      </div>
    </section>
  );
}
