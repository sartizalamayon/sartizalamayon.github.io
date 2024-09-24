// src/components/TerminalModal.js
"use client";
import { useEffect } from "react";
import { TerminalContextProvider } from "react-terminal";
import { useRouter, usePathname } from "next/navigation";
import { useModal } from "../context/ModalProvider";
import { ReactTerminal } from "react-terminal";

const TerminalModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'j') {
        event.preventDefault(); // Prevent default browser behavior
        openModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const commands = {
    help: `Here are the available commands:
-'whoami' - See my information
-'connect' - Connect with me 
-'cd' - Change route ex: 'cd projects' 
-'ls' - Lists all The routes you can explore 
-'clear' - Clear the terminal 
-'help' - List all available commands
-'exit' - Close the terminal`,

    whoami: `Sartiz Alam Ayon
- A software engineer based in Dhaka, Bangladesh
- I am currently studying Computer Science at BRAC University`,
    ls: `- home
- about
- portfolio
- projects
- contact
use 'cd' to navigate to the routes`,
    connect: `- Email: sartiz.a.ayon@gmail.com
- LinkedIn: linkedin.com/in/sartiz-alam-ayon/
- Github: github.com/sartizalamayon
- Twitter: x.com/Sartiz_Ayon__
- Facebook: facebook.com/sartizayO.On/`,

    cd: (directory) => {
      const routes = ["about", "portfolio", "projects", "contact", "blog", "services"];
      if (routes.includes(directory)) {
        router.push(`/${directory}`);
        return `Navigating to /${directory}`;
      }
      if (directory === "home") {
        router.push(`/`);
        return `Navigating to /`;
        }
      if (directory === "skills" || directory === "experience" || directory === "education" || directory === "recognition") {
        router.push(`/portfolio`);
        return `Navigating to /portfolio/${directory}`;
      }
        if (directory === "projects" || directory === "caseStudy") {
        router.push(`/projects`);
        return `Navigating to /projects/${directory}`;
        }
      return `cd: ${directory}: No such file or directory`;
    }
    ,
    exit: ()=>{
        closeModal();
        return "Closing the terminal";
    }
  };

  return (
    <dialog id="my_modal_2" className="modal bg-[rgba(0,0,0,0.4)] rounded-lg border-none outline-none focus:border-none focus:outline-none" open={isModalOpen}>
      <div className="modal-box p-0 lg:w-[550px] max-w-[550px] rounded-2xl h-[370px] overflow-hidden border-neutral border-x-[0.2px]">
        <div className="h-[389px] relative">
          <button className="absolute left-3 top-[1.2px] text-base text-primary hover:text-red-500 z-50 font-bold" onClick={()=>{
            closeModal();
          }}>x</button>
          <TerminalContextProvider>
            <ReactTerminal
              welcomeMessage="This is a interactive terminal. Type 'help' to start. "
              commands={commands}
              themes={{
                "my-custom-theme": {
                  themeBGColor: "black",
                  themeToolbarColor: "rgb(143 155 168)",
                  themeColor: "white",
                  themePromptColor: "#3CCF91"
                }
              }}
              theme="my-custom-theme"
              errorMessage="Command not found"
              prompt={`ayo_on@Portfolio:~${pathname} $`}
            />
          </TerminalContextProvider>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-transparent text-transparent" onClick={closeModal}>
      </form>
    </dialog>
  );
};

export default TerminalModal;
