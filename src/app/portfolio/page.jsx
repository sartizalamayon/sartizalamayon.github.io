"use client";
import React from 'react';
import PageHeading from '@/components/PageHeading';
import { motion } from 'framer-motion';
import { FaPython, FaNodeJs, FaReact, FaGit, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaUbuntu, FaStripe } from 'react-icons/fa'; 
import { SiFirebase, SiMongodb, SiTailwindcss, SiBootstrap, SiNextdotjs, SiC, SiCplusplus, SiFlask, SiMysql, SiAdobephotoshop } from 'react-icons/si'; 
import { PiFileSqlLight } from "react-icons/pi";
import Link from 'next/link';
import Lottie from 'lottie-react';
import BracketLinks from '@/components/BracketLinks';
import HighlightedWords from '@/components/HighlightedWords';


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
  { name: "SQL", icon: <PiFileSqlLight />  },
  { name: "MongoDb", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Github", icon: <FaGithub /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Stripe", icon: <FaStripe/>}
];

// Education data
const education = {
  institution: "BRAC University",
  period: "January 2022 - Present",
  degree: "Bachelor of Science",
  major: "Computer Science"
};

const Page = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-primary text-secondary px-4">
      {/* Page Heading */}
      <PageHeading 
        heading="Professional Highlights" 
        desc="My education, certifications," 
        flow="skills and achievements"
      />

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-9"
      >
        <h2 className="text-xl md:text-2xl mb-8 flex items-center font-medium">
          <span className="inline-block w-[2px] h-6 bg-accent mr-4"></span>
          Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="px-3 py-[10px] flex items-center space-x-2 rounded-md  border-t-gray-300 border-r-gray-300 border-[1.5px] border-t-[0.2px] border-r-[0.2px]">
              <div className="xs:text-xs sm:text-sm md:text-base ">{skill.icon}</div>
              <span className="xs:text-xs sm:text-sm md:text-base font-light">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="my-10"
>
  {/* Title Section */}
  <h2 className="text-xl md:text-2xl font-medium mb-8 flex items-center">
    <span className="inline-block w-[2px] h-6 bg-accent mr-4"></span>
    Education
  </h2>

  {/* Content with 3D border effect */}
  <div className="relative p-6 rounded-lg border-t-gray-300 border-r-gray-300 border-2 border-t-[0.5px] border-r-[0.5px]
    shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    
    {/* 3D effect with thicker left and bottom borders */}
    <div className="absolute inset-0 rounded-lg -z-10 
      border-b-[6px] border-l-[6px] border-b-gray-500 border-l-gray-500">
    </div>

    <h3 className="text-lg font-semibold">{education.institution}</h3>
    <p className="text-neutral">{education.period}</p>
    <p className="text-neutral">
      {education.degree} in <HighlightedWords text={education.major} />
    </p>
  </div>
</motion.div>


      {/* Download Resume Button */}
      <div className="flex items-center justify-center mt-10 text-base pb-5 text-neutral font-light">
        Get to know more,
        <Link href="/CV.pdf" download target='_blank'>
          <BracketLinks text="Download Resume" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
