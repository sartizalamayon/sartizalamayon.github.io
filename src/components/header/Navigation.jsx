import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const paths = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
]

const Navigation = () => {
    const pathname = usePathname();
    return (
        <ul className="text-neutral text-sm font-light flex gap-6">
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
        </ul>
    );
};

export default Navigation;