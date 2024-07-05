import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
    const pathname = usePathname();
    return (
        <ul className="text-neutral text-sm font-light flex gap-6">
          <Link
            href="/about"
            className={`nav-${pathname === "/about" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/about" ? "nav-active" : ""
              }`}
            >
              ABOUT
            </li>
          </Link>
          <Link
            href="/portfolio"
            className={`nav-${pathname === "/portfolio" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/portfolio" ? "nav-active" : ""
              }`}
            >
              PORTFOLIO
            </li>
          </Link>
          <Link
            href="/projects"
            className={`nav-${pathname === "/projects" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/projects" ? "nav-active" : ""
              }`}
            >
              PROJECTS
            </li>
          </Link>
          <Link
            href="/contact"
            className={`nav-${pathname === "/contact" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/contact" ? "nav-active" : ""
              }`}
            >
              CONTACT
            </li>
          </Link>
          <Link
            href="/blog"
            className={`nav-${pathname === "/blog" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/blog" ? "nav-active" : ""
              }`}
            >
              BLOG
            </li>
          </Link>
          {/* <Link
            href="/services"
            className={`nav-${pathname === "/services" ? "active" : ""}`}
          >
            <li
              className={`inline-block py-2 relative ${
                pathname === "/services" ? "nav-active" : ""
              }`}
            >
              SERVICES
            </li>
          </Link> */}
        </ul>
    );
};

export default Navigation;