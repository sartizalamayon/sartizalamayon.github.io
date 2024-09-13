"use client";
import React from 'react';
import PageHeading from '@/components/PageHeading';

const portfolioData = {
    education: [
        {
            institution: 'BRAC University',
            degree: 'B.Sc. in Computer Science',
            year: '2021 - 2025',
            description: 'GPA: 3.79/4.00'
        }
    ],
    skills: [
        'Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'React', 'TailwindCSS', 'Bootstrap', 'NodeJs', 'ExpressJs', 'Flask', 'Firebase', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Numpy', 'Ubuntu', 'Photoshop', 'Figma'
    ],
    certificates: [
        {
            title: 'Complete Web Development',
            issuer: 'Programming Hero',
            year: '2023'
        }
    ],
    awards: [
        {
            title: '17th Place',
            contest: 'IEEE CS Spectrum 2023 Coding Contest'
        }
    ]
};

const Page = () => {
    return (
        <div className="text-secondary text-left min-h-[calc(100vh-64px)] bg-primary xs:px-2 px-4">
            <PageHeading heading="Professional Highlights" desc="My education, certifications, " flow="skills and achievements" />

            <div className="flex flex-col md:flex-row items-start md:items-center leading-relaxed mt-6 md:mt-8 text-base md:text-lg">
            Working on it !
            </div>
        </div>
    );
};

export default Page;
