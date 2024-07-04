/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"rgb(0, 0, 0)",
        secondary:"rgb(255, 255, 255)",
        accent:"#3CCF91",
        neutral:"#8f9ba8",
        card:"rgb(8, 8, 8)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
