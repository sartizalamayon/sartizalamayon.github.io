"use client";
import React from 'react';
import PageHeading from '@/components/PageHeading';


// Who you are and what you’re doing
// How you got there
// Where you’re looking to go next

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Get to Know Me" desc="Who I am, what I love and" flow="what I do" />

            <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed mt-6 md:mt-8 text-base md:text-lg">
                Working on it !
            </div>
        </div>
    );
};

export default Page;
