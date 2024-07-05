"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] mt-11">
            <motion.h1 
                className="gradient-text font-semibold text-5xl font-mono"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Blog
            </motion.h1>
            <motion.p 
                className="text-neutral text-lg font-light mt-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                No blogs yet.
            </motion.p>
        </div>
    );
};

export default Page;
