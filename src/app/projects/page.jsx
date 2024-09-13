"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PageHeading from '@/components/PageHeading';

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
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Explore My Work" desc="From passion projects to " flow="cutting-edge tech solutions" />

            <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed mt-6 md:mt-8 text-base md:text-lg">
            Working on it !
            </div>
        </div>
    );
};

export default ProjectPage;
