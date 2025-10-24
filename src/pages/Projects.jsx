import React from "react";
import ProjectCard from "../components/ProjectCard"; // Assuming you already have the upgraded ProjectCard

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "Built using React, Tailwind CSS, and Framer Motion.",
      image: "/projects/portfolio.png",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "Complete cart and payment system using Firebase.",
      image: "/projects/ecommerce.png",
      link: "#",
    },
    {
      title: "Game Hub",
      description: "Interactive game collection with ratings and reviews.",
      image: "/projects/gamehub.png",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 text-center bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden"
    >
      {/* Floating neon blur circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
        My <span className="text-pink-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={idx}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
