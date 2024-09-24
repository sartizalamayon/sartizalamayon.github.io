"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHeading from "@/components/PageHeading";
import { Card } from "@/components/Card";
import { FaPython, FaNodeJs, FaReact, FaGit, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaUbuntu, FaStripe } from 'react-icons/fa'; 
import { SiFirebase, SiMongodb, SiTailwindcss, SiBootstrap, SiNextdotjs, SiC, SiCplusplus, SiFlask, SiMysql, SiAdobephotoshop } from 'react-icons/si'; 
import { PiFileSqlLight } from "react-icons/pi";

const projects = [
  {
    name: "HIVE",
    skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "React", icon: <FaReact /> },
        { name: "Stripe", icon: <FaStripe/>},
        { name: "MongoDb", icon: <SiMongodb /> },
    ],
    description:
      "A tag based community forum, including post creation, post feedback system, comment and report functionality.",
    github: "https://github.com/sartizalamayon/Hive",
    url: "https://hive-23537.web.app/",
    image: "/Projects/Hive.png",
  },
  {
    name: "Node",
    skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "React", icon: <FaReact /> },
        { name: "MongoDb", icon: <SiMongodb /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    description:
      "A tech publishing platform, where users can create, share, and explore tech-related blogs and have a chance to get featured.",
    github: "https://github.com/sartizalamayon/NODE",
    url: "https://node-93afa.web.app/",
    image: "/Projects/Node.png",
  },
  {
    name: "CashTaka",
    skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "React", icon: <FaReact /> },
        { name: "MongoDb", icon: <SiMongodb /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    description:
      "A mfs app, including cash out, cash in, and transaction management featuring agent and admin panel.",
    github: "https://github.com/sartizalamayon/CashTaka",
    url: "https://cash-taka.vercel.app/",
    image: "/Projects/CashTaka.png",
  },
  {
    name: "MoneyMate",
    skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "React", icon: <FaReact /> },
        { name: "MongoDb", icon: <SiMongodb /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    description:
      "A personal finance management app, including income, expense, and transaction management, , built for a Client.",
    github: "https://github.com/sartizalamayon/MoneyMate",
    image: "/Projects/MoneyMate.png",
  },
  {
    name: "BizConnect",
    skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "MongoDb", icon: <SiMongodb /> },
    ],
    description:
      "A platfrom that connects students, entrepreneurs, and investors to collaborate on business ideas, built for HackCsb2024.",
    github: "https://github.com/sartizalamayon/BizConnect",
    image: "/Projects/BizConnect.png",
    },
    {
        name: "Tour Planner",
        skills: [
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "SQL", icon: <PiFileSqlLight />  },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },

        ],
        description:
          "A tour management website where people can complete the tour booking from Destination and hotels to transport, built for a University Project.",
        github: "https://github.com/sartizalamayon/TourPlanner",
        image: "/Projects/TourPlanner.png",
    }
];

const ProjectPage = () => {
  return (
    <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
      <PageHeading
        heading="Explore My Work"
        desc="From passion projects to "
        flow="cutting-edge tech solutions"
      />

      <hr className="mt-4 border-t-[0.5px] border-neutral-800" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 justify-items-center"
        initial={{ opacity: 0, y: 20 }} // Animation on load
        whileInView={{ opacity: 1, y: 0 }} // While it is in view, fade in
        transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 }} // Timing and transition effect
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectPage;
