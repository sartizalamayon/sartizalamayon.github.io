"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Who you are and what you’re doing
// How you got there
// Where you’re looking to go next

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] mt-11">
            <motion.h1 
                className="gradient-text font-semibold text-5xl font-mono"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get to Know Me
            </motion.h1>
            <motion.p 
                className="text-neutral text-lg font-light mt-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Who I am, what I love and <span className="text-white">what I do</span>.
            </motion.p>

            <div className="mt-9 flex flex-col md:flex-row items-start md:items-center">
                <motion.div 
                    className="mr-0 md:mr-8 mb-6 md:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Image
                        src="/ayon.JPG"
                        alt="Sartiz Alam Ayon"
                        width={250}
                        height={250}
                        className="rounded-full grayscale"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                    <p className="mb-4">
                        
                        Eager and enthusiastic, I am a dedicated individual pursuing Computer Science at Brac University. I have a passion for crafting immersive user experiences and a keen eye for detail. Through hands-on experience and mentorship, I want to expand my skill set and make tangible contributions to projects that push the boundaries while leveraging industry best practices. With a proactive approach and a growth mindset, I am ready to embrace challenges and make meaningful contributions.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">Interests</h2>
                    <p>
                        Full Stack Web Development, Software Development, Machine Learning, Deep Learning, Neural Networks
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Page;
