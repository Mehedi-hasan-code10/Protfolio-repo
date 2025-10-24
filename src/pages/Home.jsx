import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // use your upgraded ProjectCard

const Home = () => {
  const projects = [
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
      id="home"
      className="relative flex flex-col items-center px-6 text-center bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden"
    >
      {/* Floating neon blur circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Intro + Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-24 w-full">
        {/* Text Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-md shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-text-shimmer"
          >
            Welcome to My Portfolio 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-200 text-lg md:text-xl mb-6"
          >
            I’m a passionate <span className="text-pink-400 font-semibold">Web Developer</span> who loves building modern, interactive web applications with <span className="text-blue-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind</span>, and smooth animations.
          </motion.p>

          {/* Skills/Badges */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {["React", "Tailwind", "Framer Motion", "JavaScript", "Firebase"].map((skill) => (
              <div
                key={skill}
                className="bg-pink-500/30 hover:bg-pink-500/50 transition rounded-full px-4 py-2 text-white font-medium shadow-lg cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile / Project Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl"
        >
          <img
            src="/path-to-your-image.jpg" // <-- replace with your image
            alt="Mehedi Hasan"
            className="w-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.div>

      {/* Optional subtle floating stars/particles */}
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Home;
