"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { BiSolidTerminal, } from "react-icons/bi";
import { useModal } from "@/context/ModalProvider";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";


const Navbar = () => {
  const { openModal } = useModal();
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile navigation

  const toggleNav = () => {
    console.log("Toggling");
    setIsNavOpen(!isNavOpen); 
  }// Toggle function

  console.log(isNavOpen);

  return (
    <div className="relative h-[64px] flex justify-center items-center bg-black">
      <nav className="w-full flex justify-between items-center px-3">
       
        <div className="md:hidden flex justify-center items-center">
          <button onClick={toggleNav} className="text-2xl text-white">
            {isNavOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </button>
        </div>

        <Link href="/" className="hidden md:flex">
          <div>
            <h1 className="text-neutral text-3xl">{"{"}
              <span className="text-secondary text-2xl">0.0</span>
              {"}"}</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Navigation />
        </div>
        <div className="md:hidden ">
          {isNavOpen? (<Navigation />):(<div>
            <h1 className="text-neutral text-3xl">{"{"}
              <span className="text-secondary text-2xl">0.0</span>
              {"}"}</h1>
          </div>)}
        </div>

        {/* {isNavOpen && (
        <div className="absolute top-0 left-0 flex h-full flex-col items-center justify-center z-50 border-white border-2 w-auto ml-16 md:hidden">
          <Navigation />
        </div>
        )} */}

        {/* Terminal Icon */}
        <div className=" flex justify-center items-center">
          <button onClick={openModal} className="text-3xl text-accent">
            <BiSolidTerminal />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
    </div>
  );
};

export default Navbar;
