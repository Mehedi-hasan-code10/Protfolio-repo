import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaPaperPlane } from "react-icons/fa";
import Footer from "./Footer";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Thank you ${form.name}, your message has been sent!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-center bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden"
    >
      {/* floating gradient blur effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-lg"
      >
        Get in <span className="text-pink-400">Touch</span>
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-lg mx-auto backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20"
      >
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          value={form.name}
          onChange={handleChange}
          required
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          value={form.email}
          onChange={handleChange}
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.03 }}
          name="message"
          placeholder="Your Message"
          className="w-full mb-6 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#ec4899" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/40 transition"
        >
          <FaPaperPlane /> Send Message
        </motion.button>

        <div className="mt-6">
          <motion.a
            href="https://www.facebook.com/md.mehedi.hasan.526596"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white font-medium mt-4 transition"
          >
            <FaFacebookF /> Contact via Facebook
          </motion.a>
        </div>
          </motion.form>
          
      </section>
      
  );
};

export default ContactForm;
