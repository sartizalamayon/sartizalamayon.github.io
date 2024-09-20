'use client';
import React from 'react';
import PageHeading from '@/components/PageHeading';
import Image from 'next/image';
import HighlightedWords from '@/components/HighlightedWords';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Page = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            
            {/* Page Heading */}
            <PageHeading 
                heading="Get to Know Me" 
                desc="Who I am, what I love and" 
                flow="what I do" 
            />
            
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 w-full max-w-6xl gap-7">
                
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full md:w-1/2 flex justify-center md:justify-start"
                >
                    <div>
                        <Image
                            src="/about.jpg"
                            width={350}
                            height={350}
                            alt="Picture of the author"
                            className="rounded-lg shadow-lg object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col items-start text-neutral font-light text-base lg:text-lg gap-4 px-2 md:px-0 pb-20 md:pb-0"
                >
                    <p className="mt-4 md:mt-0 leading-8">
                        Hey, I am <HighlightedWords text="Sartiz Alam Ayon" />. I am a <HighlightedWords text="Software Engineer" />, building robust 
                        <HighlightedWords text=" Full Stack Web applications" />. I&apos;ve been close to a computer since I was 11, and been passionate about it ever since. I am also doing my Bachelor&apos;s in <HighlightedWords text="Computer Science" /> from BRAC University. 
                    </p>
                    <p className="mt-4 md:mt-0 leading-8">
                        I am proficient in programming languages Python, JavaScript, C, and C++. I have expertise in <HighlightedWords text="MERN Stack" /> and <HighlightedWords text="NextJs" /> development. I also have a strong knowledge of <HighlightedWords text="Data structures and algorithms" />. 
                    </p>
                    <p className="mt-4 md:mt-0 leading-8">
                        I love solving problems, open source, and side projects. When I&apos;m not building things, I like designing, art, and music. I am also a huge TV series and football fan. <HighlightedWords text="Let&apos;s Connect" />.
                    </p>
                    
                    {/* Reach out button with cool hover effect */}
                    <Link href="/contact">
                        <motion.button
                            className="flex text-accent justify-center items-center gap-1 hover:translate-x-1"
                        >
                            Reach out
                            <FaArrowRightLong />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Page;
