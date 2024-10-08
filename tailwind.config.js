const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:"rgb(0, 0, 0)",
        secondary:"rgb(255, 255, 255)",
        accent:"#3CCF91",
        neutral:"#8f9ba8",
        card:"rgb(8, 8, 8)",
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        
      },
      screens: {
        'heading-padding': {'min': '1024px', 'max': '1356px'}, 
        'tab': {'raw': '(min-width: 412px) and (max-width: 1024px) and (min-height: 900px)'},
        'tab2': {'raw': '(min-width: 560px) and (max-width: 1024px) and (min-height: 970px)'},
        'tab3': {'raw': '(min-width: 560px) and (max-width: 1024px) and (min-height: 1020px)'},
        'xs':{'raw':'(max-width: 412px)'},

      },
      
    },
  },
  plugins: [addVariablesForColors, require("daisyui")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
