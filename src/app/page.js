// pages/index.js or pages/Home.js
"use client";
import { useModal } from "@/context/ModalProvider";
import { BiSolidTerminal } from "react-icons/bi";
// import GooeyButton from "@/components/GooeyButton";
// import SocialSidebar from "@/components/SocialSidebar";
import MyAvatar from "@/components/MyAvater";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";


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
  }
]
export default function Home() {
  const { openModal } = useModal();

  return (
    <div className="relative lg:h-[calc(100vh-64px)] flex flex-col-reverse lg:flex-row justify-between items-center">
    <main className="flex flex-col justify-center items-left h-[calc(100vh-64px)] gap-3">
      <div className="">
        <h1 className="text-2xl text-accent">{`Hey there, I'm`}</h1>
        <h2 className="text-7xl font-semibold text-secondary">Sartiz Alam Ayon.</h2>
      </div>

      <p className="text-3xl text-white">Software Engineer | Web Developer</p>
      <div className="hidden md:block">
        <div className="text-xl text-neutral flex gap-2">
          Press  
          <div className="flex gap-1 justify-center items-center">
            <kbd className="kbd w-12 min-h-3 h-[1.2rem] text-base text-black bg-white">⌘ </kbd>
            <kbd className="kbd w-12 min-h-3 h-[1.2rem] text-black text-base bg-white">j</kbd>
          </div>
          to get started.
        </div>
      </div>
      <div className="md:hidden">
        <div className="text-2xl text-white flex gap-2">
          Press  
          <div className="flex">
            <button onClick={openModal} className="text-3xl text-accent">
              <BiSolidTerminal />
            </button>
          </div>
          to get started.
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        {/* <a href="CV.pdf" className="my-6" target="_blank">
          <GooeyButton text="Download CV"/>
        </a> */}
        {links.map((link, index) => (
          <a href={link.url} target="_blank" key={index} className="flex justify-center items-center gap-1 bg-[#222] rounded-md px-4 py-2 hover:shadow-inner shadow-white">
          <div className="text-accent">
            {link.icon}
          </div>
          <p className="text-base font-medium text-white">{link.name}</p>
          </a>
        ))}
      </div>
    </main>

    <MyAvatar/>
  
    </div>
  );
}
