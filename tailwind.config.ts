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
        "4xl": { max: "1165px" },
        md: { max: "720px" },
        tablet: { max: "768px" },
        mobilinho: {max: "600px"},
        mobile: { max: "410px" },
        lg: { max: "1024px" },
        xl: { max: "1200px" },
      },
    },
  },
  plugins: [],
};
