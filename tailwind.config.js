/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "1.2rem",
      base: "1.3rem",
      lg: "1.55rem",
      xl: "1.65rem",
      "2xl": "1.963rem",
      "3xl": "2.353rem",
      "4xl": "2.841rem",
      "5xl": "3.552rem",
    },
    extend: {
      screens: {
        sm: "375px",
        md: "960px",
        lg: "1340px",
      },
    },
  },
  plugins: [],
};
