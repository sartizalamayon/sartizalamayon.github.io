"use client";
import React from 'react';
import { motion } from 'framer-motion';

const portfolioData = {
    education: [
        {
            institution: 'BRAC University',
            degree: 'B.Sc. in Computer Science',
            year: '2021 - 2025',
            description: 'GPA: 3.79/4.00'
        }
    ],
    skills: [
        'Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'React', 'TailwindCSS', 'Bootstrap', 'NodeJs', 'ExpressJs', 'Flask', 'Firebase', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Numpy', 'Ubuntu', 'Photoshop', 'Figma'
    ],
    certificates: [
        {
            title: 'Complete Web Development',
            issuer: 'Programming Hero',
            year: '2023'
        }
    ],
    awards: [
        {
            title: '17th Place',
            contest: 'IEEE CS Spectrum 2023 Coding Contest'
        }
    ]
};

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] mt-11">
            <motion.h1 
                className="gradient-text font-semibold text-5xl font-mono"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Portfolio
            </motion.h1>

            <section className="mt-9">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Education</h2>
                    {portfolioData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-2xl font-medium">{edu.institution}</h3>
                            <p className="text-lg">{edu.degree} ({edu.year})</p>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            <section className="mt-9">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
                    <ul className="list-disc list-inside">
                        {portfolioData.skills.map((skill, index) => (
                            <li key={index} className="text-lg">{skill}</li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            <section className="mt-9">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
                    {portfolioData.certificates.map((cert, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-2xl font-medium">{cert.title}</h3>
                            <p className="text-lg">{cert.issuer} ({cert.year})</p>
                        </div>
                    ))}
                </motion.div>
            </section>

            <section className="mt-9">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Awards</h2>
                    {portfolioData.awards.map((award, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-2xl font-medium">{award.title}</h3>
                            <p className="text-lg">{award.contest}</p>
                        </div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Page;
