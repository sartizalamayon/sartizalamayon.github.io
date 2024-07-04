'use client';
import React from 'react';
import Navigation from './Navigation';

const BottomNav = () => {
    return (
        <div className='container mx-auto flex md:hidden w-full justify-center'>
            <Navigation />
        </div>  
    );
};

export default BottomNav;