"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-orange-700 bg-gray-200"
      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-xl w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-serif font-bold">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="mr-3 h-12"
            width={120}
            height={20}
            alt="Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center ${isMenuOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1 justify-center`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col w-full p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-bold">
            <li>
              <Link href="/" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass("/")}`} aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass("/about")}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass("/services")}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${getLinkClass("/contact")}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
