import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ image, title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 220 }}
    className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group hover:shadow-pink-500/50 transition-all duration-300"
  >
    {/* Floating gradient blur circles */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

    {/* Animated gradient border */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 pointer-events-none animate-gradient-x"
    ></motion.div>

    {/* Image */}
    <div className="overflow-hidden rounded-t-3xl">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-6 text-center relative z-10">
      <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 animate-text-shimmer">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-5">{description}</p>

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
          background:
            "linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
          boxShadow:
            "0 0 25px rgba(236,72,153,0.5), 0 0 15px rgba(139,92,246,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 py-3 px-6 rounded-2xl font-semibold text-white shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
      >
        <FaExternalLinkAlt /> View Project
      </motion.a>
    </div>
  </motion.div>
);

export default ProjectCard;
