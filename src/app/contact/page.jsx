"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDev, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaXTwitter />, name: 'X', url: 'https://twitter.com/yourusername' },
    { icon: <FaDev />, name: 'Dev', url: 'https://dev.to/yourusername' },
    { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com/yourusername' },
    { icon: <FaEnvelope />, name: 'Email', url: 'mailto:your-email@example.com' },
];

const ContactPage = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] mt-11">
            <motion.h1 
                className="gradient-text font-semibold text-5xl font-mono"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact
            </motion.h1>
            <motion.p 
                className="text-neutral text-lg font-light mt-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Get in touch with me through any of the following platforms:
            </motion.p>
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                    <motion.a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                        <div className="text-2xl">{link.icon}</div>
                        <div className="text-lg">{link.name}</div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default ContactPage;
