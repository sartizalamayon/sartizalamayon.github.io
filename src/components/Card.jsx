"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { TbLink } from "react-icons/tb";

export function Card({ project }) {
  return (
    <CardContainer className="bg-gradient-to-b from-neutral-950 to-primary inter-var border border-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
      <CardBody className="relative group/card dark:hover:shadow-2xl border-black/[0.1] h-auto rounded-xl p-6">
        {/* Project Name */}
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-white dark:text-white"
        >
          {project.name}
        </CardItem>

        {/* Project Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-400 text-sm max-w-sm mt-2"
        >
          {project.description}
        </CardItem>

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1506"
            width="2880"
            className="border-t-[0.1px] border-b-[0.1px] border-gray-500 p-2 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Project thumbnail"
          />
        </CardItem>

        {/* Skills */}
        <div className="mt-6">
          <CardItem translateZ="60" className="flex flex-wrap gap-2 mt-2">
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="px-2 py-[5px] flex items-center space-x-2 rounded-md border-t-gray-300 border-r-gray-300 border-[1.5px] border-t-[0.2px] border-r-[0.2px]"
              >
                <div className="text-xs md:text-sm ">{skill.icon}</div>
                <span className="text-xs md:text-sm font-light text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </CardItem>
        </div>

        <CardItem translateZ="30" className="flex justify-between mt-6 w-full">
          <hr className=" border-t-[0.2px] border-white w-full" />
        </CardItem>

        {/* Links */}
        <CardItem translateZ="60" className="flex justify-start gap-5 mt-4 w-full">
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:underline"
            title="View Code on GitHub"
          >
            <FaGithub className="text-lg" />
            <span className="text-sm">GitHub</span>
          </a>

          {/* Live Link */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline"
              title="View Live Project"
            >
              <TbLink className="text-lg" />
              <span className="text-sm">Try it Out</span>
            </a>
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
