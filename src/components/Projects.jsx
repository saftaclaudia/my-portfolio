import CookbookHome from "../assets/images/Cookbook-Home.png";
import CookbookRecipes from "../assets/images/Cookbook-Recipes.png";
import ArtHome from "../assets/images/ArtGallery-Home.png";
import ArtAbout from "../assets/images/ArtGallery-About.png";
import ArtGallery from "../assets/images/ArtGallery-Gallery.png";
import ArtContact from "../assets/images/ArtGallery-Contact.png";

import AdminArtLogin from "../assets/images/ArtAdmin-Login.png";
import AdminArtAdd from "../assets/images/ArtAdmin-Add.png";
import AdminArtGallery from "../assets/images/ArtAdmin-Gallery.png";

import TodoLight from "../assets/images/Todo-Light.png";
import TodoDark from "../assets/images/Todo-Dark.png";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Art Portfolio Website",
      images: [ArtHome, ArtAbout, ArtGallery, ArtContact],
      githubLink: "https://github.com/saftaclaudia/art-portfolio",
      tech: ["React", "Tailwind", "Framer Motion", "Supabase"],
    },
    {
      title: "Art Admin Portfolio",
      images: [AdminArtLogin, AdminArtAdd, AdminArtGallery],
      githubLink: "https://github.com/saftaclaudia/supabase-artworks",
      tech: ["React", "Tailwind", "Framer Motion", "Supabase"],
    },
    {
      title: "Cookbook Website",
      images: [CookbookHome, CookbookRecipes],
      githubLink: "https://github.com/saftaclaudia/recipe-book",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "To-do app",
      images: [TodoLight, TodoDark],
      githubLink: "https://saftaclaudia.github.io/todo-vite-react-ts-scss",
      tech: ["React", "SCSS", "TypeScript"],
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 bg:text-gray-100 px-6 py-12 transition-color duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            githubLink={project.githubLink}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
