// "use client";
// import { useRouter, usePathname } from "next/navigation";
// import { TerminalContextProvider } from "react-terminal";
// import { ReactTerminal } from "react-terminal";

// function Terminal() {
//   const router = useRouter();
//   const pathname = usePathname();

//   // Define commands here 
//   const commands = {
//     help: `    'whoami' - See my information
//     'connect' - Connect with me 
//     'cd' - Change route ex: 'cd projects' 
//     'ls' - Lists all The routes you can explore 
//     'clear' - Clear the terminal 
//     'help' - List all available commands`,

//     whoami: `Sartiz Alam Ayon
// - A software engineer based on Dhaka, Bangladesh
// - I am currently studying Computer Science at BRAC University`,
//     ls: `    - about
//     - portfolio
//         - skills
//         - experience
//         - education
//         - certifications & awards
//     - projects
//         - projects
//         - case studies 
//     - contact
//     - blog
//     - services
// use 'cd' to navigate to the routes`,
//     connect: `    - Email: sartiz.a.ayon@gmail.com
//     - LinkedIn: linkedin.com/in/sartiz-alam-ayon/
//     - Github: github.com/sartizalamayon
//     - Twitter: x.com/Sartiz_Ayon__
//     - Facebook: facebook.com/sartizayO.On/`,


//     cd: (directory) => {
//       const routes = ["about", "portfolio", "projects", "contact", "blog", "services"];
//       if (routes.includes(directory)) {
//         router.push(`/${directory}`);
//         return `Navigating to /${directory}`;
//       }
//       return `cd: ${directory}: No such file or directory`;
//     }
//   };

//   return (
//     <ReactTerminal
//       welcomeMessage="Welcome to my portfolio! Type 'help' to get started. "
//       commands={commands}
//       themes={{
//         "my-custom-theme": {
//           themeBGColor: "black",
//           themeToolbarColor: "rgb(143 155 168)",
//           themeColor: "white",
//           themePromptColor: "#3CCF91"
//         }
//       }}
//       theme="my-custom-theme"
//       errorMessage="Command not found"
//       prompt={`ayo_on@Portfolio:~${pathname} $`}
//     />
//   );
// }

// export default Terminal;