"use client";
import React from 'react';
import { motion } from 'framer-motion';


const PageHeading = ({heading, desc, flow}) => {
    return (
        <div className='pt-7 lg:pt-9'>
            <motion.h1 
                className="gradient-text font-semibold xs:2xl text-3xl md:text-4xl lg:text-[2.8rem]  font-mono mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {heading}
            </motion.h1>
            <motion.p 
                className="text-neutral text-lg font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {desc} <span className="text-white">{flow}</span>.
            </motion.p>
        </div>
    );
};

export default PageHeading;