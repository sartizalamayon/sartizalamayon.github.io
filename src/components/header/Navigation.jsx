import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeButtons from "../HomeButtons";

const paths = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
  // { name: "Blog", link: "/blog" },
];

const Navigation = ({ screen, toggle }) => {
  const pathname = usePathname();

  const handleNavigation = (link) => {
    if (screen === "sm") {
      if(pathname !== link){
        toggle();
      }
    }
  }

  return (
    <>
    { screen === "sm" ? (<div className="">
    <ul
      className={`text-white xs:text-sm text-base flex flex-col items-center justify-center gap-2 md:gap-6 ${
        screen === "sm" ? "w-full h-full" : ""
      }`}
    >
      {paths.map((path, index) => (
        <Link key={index} href={path.link}>
          <button onClick={()=>handleNavigation(path.link)}>
          <li
            className={`inline-block py-2 relative transition-colors duration-300 ${
              pathname === path.link
                ? "text-accent"
                : "hover:text-gray-300 hover:scale-105"
            }`}
          >
            {screen=='sm'?path.name.toUpperCase(): path.name}
          </li>
          </button>
        </Link>
      ))}
    </ul>
    <div className="mt-7">
    <HomeButtons/>
    </div>
    </div>):(<ul className="text-neutral text-sm font-light flex gap-6">
          {paths.map((path, index) => (
            <Link key={index}
            href={path.link}
            className={`nav-${pathname == path.link ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 hover:text-white relative ${
                pathname === path.link ? "nav-active" : ""
              }`}
            >
              {path.name}
            </li>
          </Link>
          ))}
        </ul>)}
        </>
  );
};

export default Navigation;
