"use client";
import React from 'react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';


const HomeButtons = () => {
    const links = [
        {
          name: "Github",
          url: "https://github.com/sartizalamayon",
          icon: <FaGithub />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sartiz-alam-ayon",
          icon: <FaLinkedin />,
        },
        {
          name: "Resume",
          url: "CV.pdf",
          icon: <FaFilePdf />,
        },
    ];
    return (
        <div className='flex gap-3'>
            {links.map((link, index) => (
            <a
              href={link.url}
              target="_blank"
              key={index}
              className="flex justify-center items-center gap-1 bg-[#222] hover:bg-[#333] rounded-md px-4 py-2 hover:shadow-inner shadow-white"
            >
              <div className="text-accent">{link.icon}</div>
              <p className="text-base font-medium text-white">{link.name}</p>
            </a>
            ))}
        </div>
    );
};

export default HomeButtons;