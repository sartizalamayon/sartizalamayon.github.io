"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "HIVE",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        description: "A collaborative project management tool designed to enhance team productivity and streamline workflows.",
        details: [
            "Developed a real-time task tracking system.",
            "Integrated chat functionality for team communication.",
            "Implemented role-based access control."
        ],
        github: "https://github.com/yourusername/HIVE"
    },
    {
        name: "NODE",
        technologies: ["React", "Flowbite-React", "NodeJs", "ExpressJS", "MongoDB", "JWT", "Firebase"],
        date: "May 2024",
        description: "A decentralized application framework for secure and efficient network communication.",
        details: [
            "Dynamic Tech Blog website enables users to write blogs, comment on others' blogs, and add blogs to a wishlist.",
            "Implemented Authentication with Firebase. Used Express For building the REST APIs and Axios for faster data fetching. Used Dotenv for securing sensitive information and JWT for authorization.",
            "Implemented client-side routing with React Router Dom—used Packages like Farmers-motion and ka-table.",
            "Used CORS and Cookie-Parser For handling cross-origin requests and parsing cookies."
        ],
        github: "https://github.com/sartizalamayon/NODE"
    },
    {
        name: "MoneyMate",
        technologies: ["React Native", "Firebase"],
        description: "A financial management app that helps users track expenses, create budgets, and achieve financial goals.",
        details: [
            "Implemented real-time expense tracking.",
            "Integrated budget planning and alerts.",
            "Used Firebase for backend services and data storage."
        ],
        github: "https://github.com/yourusername/MoneyMate"
    },
    {
        name: "Tour Planner",
        technologies: ["Vue.js", "Flask", "PostgreSQL"],
        description: "An interactive tool for planning and organizing travel itineraries, including route optimization and activity suggestions.",
        details: [
            "Developed a route optimization algorithm.",
            "Integrated map services for location tracking.",
            "Implemented user reviews and rating system."
        ],
        github: "https://github.com/yourusername/TourPlanner"
    }
];

const ProjectPage = () => {
    return (
        <div className="min-h-screen p-5 md:p-20">
            <motion.h1 
                className="gradient-text font-semibold text-5xl font-mono mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h1>
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                    <h2 className="text-3xl font-semibold mb-4">{project.name}</h2>
                    <p className="text-neutral text-lg mb-4">{project.description}</p>
                    <ul className="list-disc list-inside mb-4">
                        {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                    <p className="text-neutral text-lg mb-4"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                    {project.date && <p className="text-neutral text-lg mb-4"><strong>Date:</strong> {project.date}</p>}
                    <a href={project.github} className="text-blue-500 hover:underline">GitHub: {project.github}</a>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectPage;
