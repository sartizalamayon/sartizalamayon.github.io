"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDev, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PageHeading from '@/components/PageHeading';

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
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Get in Touch" desc="For collaborations, questions, or just to" flow="say hello" />
            <hr className="mt-4 border-t-[0.5px] border-neutral-800" />
            <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed mt-6 md:mt-8 text-base md:text-lg">
            Working on it !
            </div>
        </div>
    );
};

export default ContactPage;
