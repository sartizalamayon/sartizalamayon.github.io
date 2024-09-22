import React from "react";
import { motion } from "framer-motion";


const BracketLinks = ({text}) => {
  return (
      <motion.span
        className="text-accent justify-center items-center gap-1 hover:pl-1 leading-8 font-light "
        whileHover="hover" // Add hover state for animation
        initial="initial" // Initial state
        animate="initial" // Keep it on the initial state by default
      >
        {/* Animating brackets using Framer Motion */}
        <motion.span
          variants={{
            initial: { opacity: 0, x: 0 }, // Start from the left, hidden
            hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Appear from left
          }}
          className="inline-block"
        >
          {"["}
        </motion.span>

        {/* The main text */}
        <span className="transition duration-300">{` ${text} `}</span>

        {/* The closing bracket */}
        <motion.span
          variants={{
            initial: { opacity: 0, x: 0 }, // Start from the right, hidden
            hover: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Appear from right
          }}
          className="inline-block"
        >
          {"]"}
        </motion.span>
      </motion.span>
  );
};

export default BracketLinks;
