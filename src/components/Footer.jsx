// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="relative py-10   bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden">
//       {/* Floating neon blur circles */}
//       <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

//       {/* Glassmorphic Footer Card */}
//       <div className="relative max-w-6xl mx-auto px-6 py-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-center">
//         <p className="text-gray-200 text-sm md:text-base">
//           © {new Date().getFullYear()} <span className="text-pink-400 font-semibold">Mehedi Hasan</span> — Built with{" "}
//           <span className="text-blue-400 font-semibold">React</span> &{" "}
//           <span className="text-purple-400 font-semibold">Tailwind</span>
//         </p>

//         {/* Social Links */}
//         <div className="mt-4 flex justify-center gap-4">
//           <a
//             href="https://www.facebook.com/md.mehedi.hasan.526596"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-pink-500/30 hover:bg-pink-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
//           >
//             Facebook
//           </a>
//           <a
//             href="#"
//             className="bg-blue-500/30 hover:bg-blue-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="#"
//             className="bg-purple-500/30 hover:bg-purple-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-10 bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 overflow-hidden">
      {/* Floating neon blur circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Glassmorphic Footer Card */}
      <div className="relative max-w-6xl w-full mx-auto px-6 md:px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl text-center">
        <p className="text-gray-200 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-400 font-semibold">Mehedi Hasan</span> — Built with{" "}
          <span className="text-blue-400 font-semibold">React</span> &{" "}
          <span className="text-purple-400 font-semibold">Tailwind</span>
        </p>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/md.mehedi.hasan.526596"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500/30 hover:bg-pink-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-blue-500/30 hover:bg-blue-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="bg-purple-500/30 hover:bg-purple-500/50 text-white px-4 py-2 rounded-full shadow-lg transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
