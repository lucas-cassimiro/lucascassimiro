/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--fonts-poppins)"],
        sans: ["var(--font-poppins)"],
      },
      screens: {
        "2xl": { max: "921px" },
        "3xl": { min: "921px" },
        md: { max: "720px" },
      },
    },
  },
  plugins: [],
};
