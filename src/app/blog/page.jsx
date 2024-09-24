"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PageHeading from '@/components/PageHeading';

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Dive into My Thoughts" desc="Explore my journey through" flow="my blogs" />
            <hr className="mt-4 border-t-[0.5px] border-neutral-800" />
            <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed mt-6 md:mt-8 text-base md:text-lg">
            Working on it !
            </div>
        </div>
    );
};

export default Page;
