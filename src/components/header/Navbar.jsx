"use client";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import { BiSolidTerminal } from "react-icons/bi";
import { useModal } from "@/context/ModalProvider";

const Navbar = () => {
  const {openModal} = useModal();
  return (
    <div className="relative h-[64px] flex justify-center items-center ">
      <nav className="w-full flex justify-between items-center px-3">
        <Link href="/">
          <div>
            <h1 className="text-neutral text-3xl">{"{"}
              <span className="text-secondary text-2xl">0.0</span>
              {"}"}</h1>
          </div>
        </Link>
        <div className="hidden md:flex"><Navigation /></div>
        <button onClick={openModal} className="text-3xl text-accent"><BiSolidTerminal /></button>
      </nav>
    </div>
  );
};

export default Navbar;
