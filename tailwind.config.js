/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
<<<<<<< HEAD
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 0, 0)",
        secondary: "rgb(255, 255, 255)",
        accent: "rgb(60, 207, 145)",
        neutral: " rgb(143, 144, 148)",
        error: "",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
=======
  plugins: [],
>>>>>>> d83f7edb5fc9ac5280e5b6e57e72ba9c097ffc00
};
