"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { BiSolidTerminal } from "react-icons/bi";
import { useModal } from "@/context/ModalProvider";
import { RiMenuFold2Line, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  const { openModal } = useModal();
  const [isNavOpen, setIsNavOpen] = useState(false); // State to toggle mobile navigation

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }; // Toggle function

  return (
    <div className="relative h-[64px] flex justify-center items-center bg-black">
      <nav className="w-full flex justify-between items-center px-3">
        <div className="md:hidden flex justify-center items-center">
          <button onClick={toggleNav} className="text-2xl text-accent">
            {isNavOpen ? <RiCloseLine /> : <RiMenuFold2Line />}
          </button>
        </div>

        <Link href="/">
          <div>
            <h1 className="text-neutral text-3xl">
              {"{"}
              <span className="text-secondary text-2xl">0.0</span>
              {"}"}
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Navigation screen="full"/>
        </div>

        {/* Terminal Icon */}
        <div className="flex justify-center items-center">
          <button onClick={openModal} className="text-3xl text-accent">
            <BiSolidTerminal />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isNavOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-50"
        >
          <div className="flex flex-col items-center justify-center w-full h-full relative">
            {/* Navigation Links */}
            <Navigation screen="sm" toggle={toggleNav}/>

            {/* Close Button (Cross Icon) */}
            <button
              onClick={toggleNav}
              className=" absolute left-3 top-5 text-accent text-2xl"
            >
              <RiCloseLine/>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
