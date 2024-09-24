"use client";
import React from "react";
import { motion } from "framer-motion";
import PageHeading from "@/components/PageHeading";
import { Card } from "@/components/Card";
import { FaPython, FaNodeJs, FaReact, FaGit, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaUbuntu, FaStripe } from 'react-icons/fa'; 
import { SiFirebase, SiMongodb, SiTailwindcss, SiBootstrap, SiNextdotjs, SiC, SiCplusplus, SiFlask, SiMysql, SiAdobephotoshop } from 'react-icons/si'; 
import { PiFileSqlLight } from "react-icons/pi";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JS", icon: <FaJs /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "SQL", icon: <PiFileSqlLight /> },
  { name: "MongoDb", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Stripe", icon: <FaStripe /> },
];

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

    ],
    description:
      "A tag based community forum, including post creation, post feedback system, comment and report functionality.",
    github: "https://github.com/sartizalamayon/Hive",
    url: "https://hive-23537.web.app/",
    image: "/Projects/Hive.png",
  },
  {
    name: "NODE",
    technologies: [],
    description:
      "A decentralized application framework for secure and efficient network communication.",
    details: [
      "Dynamic Tech Blog website enables users to write blogs, comment on others' blogs, and add blogs to a wishlist.",
      "Implemented Authentication with Firebase. Used Express For building the REST APIs and Axios for faster data fetching. Used Dotenv for securing sensitive information and JWT for authorization.",
      "Implemented client-side routing with React Router Dom—used Packages like Farmers-motion and ka-table.",
      "Used CORS and Cookie-Parser For handling cross-origin requests and parsing cookies.",
    ],
    github: "https://github.com/sartizalamayon/NODE",
  },
  {
    name: "MoneyMate",
    technologies: ["React Native", "Firebase"],
    description:
      "A financial management app that helps users track expenses, create budgets, and achieve financial goals.",
    details: [
      "Implemented real-time expense tracking.",
      "Integrated budget planning and alerts.",
      "Used Firebase for backend services and data storage.",
    ],
    github: "https://github.com/yourusername/MoneyMate",
  },
  {
    name: "Tour Planner",
    technologies: ["Vue.js", "Flask", "PostgreSQL"],
    description:
      "An interactive tool for planning and organizing travel itineraries, including route optimization and activity suggestions.",
    details: [
      "Developed a route optimization algorithm.",
      "Integrated map services for location tracking.",
      "Implemented user reviews and rating system.",
    ],
    github: "https://github.com/yourusername/TourPlanner",
  },
];

const ProjectPage = () => {
  return (
    <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
      <PageHeading
        heading="Explore My Work"
        desc="From passion projects to "
        flow="cutting-edge tech solutions"
      />

      <form action="" className="mt-6">
        <input
          type="text"
          name=""
          id=""
          className=" bg-primary border"
          placeholder="Search projects by skills"
        />
      </form>

      <hr className="mt-4 border-t-[0.5px] bg-neutral" />

      <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed  text-base md:text-lg">
        <Card project={projects[0]} />
      </div>
    </div>
  );
};

export default ProjectPage;
