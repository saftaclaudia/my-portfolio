import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Art Portfolio Website",
      images: [
        "/images/ArtGallery-Home.png",
        "/images/ArtGallery-About.png",
        "/images/ArtGallery-Gallery.png",
        "/images/ArtGallery-Contact.png",
      ],
      githubLink: "https://github.com/saftaclaudia/art-portfolio",
      tech: ["React", "Tailwind", "Framer Motion", "Supabase"],
    },
    {
      title: "Art Admin Portfolio",
      images: [
        "/images/ArtAdmin-Login.png",
        "/images/ArtAdmin-Add.png",
        "/images/ArtAdmin-Gallery.png",
      ],
      githubLink: "https://github.com/saftaclaudia/supabase-artworks",
      tech: ["React", "Tailwind", "Framer Motion", "Supabase"],
    },
    {
      title: "Cookbook Website",
      images: ["/images/Cookbook-Home.png", "/images/Cookbook-Recipes.png"],
      githubLink: "https://github.com/saftaclaudia/recipe-book",
      tech: ["HTML", "CSS", "JavaScript"],
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
