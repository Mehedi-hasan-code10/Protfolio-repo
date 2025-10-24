import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden gap-12"
    >
      {/* Floating neon blur circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Text Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-lg shadow-2xl flex-1"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          About <span className="text-pink-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-200 text-lg md:text-xl leading-relaxed"
        >
          Hi! I’m a <span className="text-pink-400 font-semibold">React Developer</span> skilled in creating responsive, beautiful websites with smooth animations, glassmorphism designs, and interactive UI effects. I love turning ideas into <span className="text-blue-400 font-semibold">modern digital experiences</span> that delight users.
        </motion.p>

        {/* Skills/Badges */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {["React", "Tailwind", "Framer Motion", "JavaScript", "Firebase"].map(skill => (
            <div
              key={skill}
              className="bg-pink-500/30 hover:bg-pink-500/50 transition rounded-full px-4 py-2 text-white font-medium shadow-lg cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex-1 max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl"
      >
        <img
          src="/path-to-your-photo.jpg" // <-- replace with your photo
          alt="Mehedi Hasan"
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>

      {/* Optional floating particles */}
      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default About;
