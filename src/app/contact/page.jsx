"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDev, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PageHeading from '@/components/PageHeading';

const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/sartizalamayon' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/sartiz-alam-ayon/' },
    { icon: <FaXTwitter />, name: 'X', url: 'https://x.com/Sartiz_Ayon__' },
    { icon: <FaDev />, name: 'Dev', url: 'https://dev.to/ay0_0n' },
    { icon: <FaFacebook />, name: 'Facebook', url: 'https://www.facebook.com/sartizayO.On/' },
    { icon: <FaEnvelope />, name: 'Email', url: 'mailto:sartiz.a.ayon@gmail.com' },
];

const ContactPage = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Get in Touch" desc="For collaborations, questions, or just to" flow="say hello" />
            <hr className="mt-4 border-t-[0.5px] border-neutral-800" />

            {/* Content */}
            <motion.div
                className="flex flex-wrap justify-center gap-8 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.2 }}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-center items-center w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-6 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-4xl">{link.icon}</span>
                        <span className="mt-2 text-base md:text-lg font-light">{link.name}</span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default ContactPage;
