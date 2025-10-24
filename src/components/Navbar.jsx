// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaMoon, FaSun } from "react-icons/fa";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // toggle theme
//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 dark:from-gray-900 dark:to-black shadow-lg"
//     >
//       <div className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
//         {/* logo */}
//         <motion.h1
//           whileHover={{ scale: 1.1 }}
//           className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
//         >
//           MyPortfolio
//         </motion.h1>

//         {/* desktop menu */}
//         <div className="hidden md:flex space-x-8 text-lg font-medium">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `hover:text-pink-400 transition ${
//                 isActive ? "text-pink-400 font-semibold" : ""
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `hover:text-pink-400 transition ${
//                 isActive ? "text-pink-400 font-semibold" : ""
//               }`
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               `hover:text-pink-400 transition ${
//                 isActive ? "text-pink-400 font-semibold" : ""
//               }`
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `hover:text-pink-400 transition ${
//                 isActive ? "text-pink-400 font-semibold" : ""
//               }`
//             }
//           >
//             Contact
//           </NavLink>
//         </div>

//         {/* right side buttons */}
//         <div className="flex items-center gap-4">
//           {/* dark/light toggle */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsDark(!isDark)}
//             className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
//           >
//             {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
//           </motion.button>

//           {/* mobile menu toggle */}
//           <div
//             className="md:hidden cursor-pointer space-y-1"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <div className="w-6 h-0.5 bg-white"></div>
//             <div className="w-6 h-0.5 bg-white"></div>
//             <div className="w-6 h-0.5 bg-white"></div>
//           </div>
//         </div>
//       </div>

//       {/* mobile menu */}
//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden flex flex-col items-center bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 dark:from-gray-900 dark:to-black pb-6"
//         >
//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             className="block py-2 hover:text-pink-400 transition"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             className="block py-2 hover:text-pink-400 transition"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             onClick={() => setMenuOpen(false)}
//             className="block py-2 hover:text-pink-400 transition"
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="block py-2 hover:text-pink-400 transition"
//           >
//             Contact
//           </NavLink>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark") // read initial value
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 dark:from-gray-900 dark:to-black shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          MyPortfolio
        </motion.h1>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => {
            const name = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
            return (
              <NavLink
                key={idx}
                to={path}
                className={({ isActive }) =>
                  `hover:text-pink-400 transition ${isActive ? "text-pink-400 font-semibold" : ""}`
                }
              >
                {name}
              </NavLink>
            );
          })}
        </div>

        {/* right side buttons */}
        <div className="flex items-center gap-4">
          {/* dark/light toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            {isDark ? <FaMoon size={18} /> : <FaSun size={18} />}
          </motion.button>

          {/* mobile menu toggle */}
          <div
            className="md:hidden cursor-pointer space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 dark:from-gray-900 dark:to-black pb-6"
        >
          {["/", "/about", "/projects", "/contact"].map((path, idx) => {
            const name = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
            return (
              <NavLink
                key={idx}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-pink-400 transition"
              >
                {name}
              </NavLink>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
