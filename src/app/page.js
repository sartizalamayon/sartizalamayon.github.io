"use client";
import { useModal } from "@/context/ModalProvider";
import { BiSolidTerminal } from "react-icons/bi";


export default function Home() {
  const {openModal} = useModal();

  return (
    <main className="flex flex-col justify-center items-left h-[calc(100vh-64px)] gap-3">
      <div className="bg-[url('/public/bg.svg')]">
        <h1 className="text-2xl text-accent">Hey there, I'm</h1>
        <h2 className="text-7xl font-semibold text-secondary">Sartiz Alam Ayon.</h2>
      </div>

      <div className="">
        <p className="text-3xl text-white">Software Engineer | Web Devloper</p>
        download cv
      </div>
      <div className="hidden md:block">
        <div className="text-2xl text-white flex gap-2">Press  
          <div className="flex gap-1">
          <kbd class="kbd w-12 min-h-3 h-6 text-base text-black bg-white">⌘ </kbd>
          <kbd class="kbd w-12 min-h-3 h-6 text-black text-base bg-white">j</kbd>
          </div>
           to get started.</div>
      </div>
      <div className="md:hidden">
        <div className="text-2xl text-white flex gap-2">Press  
          <div className="flex">
          <button onClick={openModal} className="text-3xl text-accent"><BiSolidTerminal/></button>
          </div>
           to get started.</div>
      </div>
      

    </main>
  );
}
