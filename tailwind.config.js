

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         darkbg: "#0f172a", // dark mode background
//         lightbg: "#f8fafc", // light mode background
//         accent: "#ec4899", // pink accent
//       },
//       backgroundImage: {
//         "gradient-main":
//           "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // use class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#0f172a", // dark mode background
        lightbg: "#f8fafc", // light mode background
        accent: "#ec4899", // pink accent
        primary: "#1E3A8A",   // blue dark
        secondary: "#FBBF24", // yellow
        accentGreen: "#10B981", // green
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #3b82f6 100%)",
      },
    },
  },
  plugins: [],
};
