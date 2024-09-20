'use client';
import React from 'react';
import { motion } from 'framer-motion';

const loading = () => {
    return (
        <div className='h-[calc(100vh-64px)] w-full flex justify-center items-center bg-black'>
            <motion.div
                className="relative flex justify-center items-center w-14 h-14 border-t-4 border-accent rounded-full"
                animate={{
                    rotate: [0, 360], // Rotate 360 degrees
                    scale: [1, 1.5, 1], // Scale up and down for a breathing effect
                }}
                transition={{
                    duration: 1.5, // Full rotation time
                    ease: "easeInOut", // Smooth transition
                    repeat: Infinity, // Infinite loop
                }}
            >
                <motion.div
                    className="absolute w-6 h-6 bg-accent rounded-full flex justify-center items-center text-[5px] text-white font-mono"
                    animate={{
                        scale: [1, 1.3, 1], // Pulse effect
                        opacity: [1, 0.7, 1], // Fade in and out
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                </motion.div>
            </motion.div>
        </div>
    );
};

export default loading;
