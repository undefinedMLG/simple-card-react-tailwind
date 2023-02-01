import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MoonIcon from "../assets/icons/MoonIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import SunIcon from "../assets/icons/SunIcon";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentPath = useLocation().pathname;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-gray-800");
  };

  return (
    <header className="p-4 bg-whitesmoke dark:bg-gray-800 dark:text-gray-100 mb-6 dark:shadow-md">
      <div className="container flex justify-between h-16 w-11/12 my-0 mx-auto">
        <ul className="items-stretch flex space-x-3 lg:flex">
          <li className="flex">
            <Link
              to={"/"}
              rel="noopener noreferrer"
              className={`${
                currentPath === "/"
                  ? "flex items-center px-4 -mb-1 border-b-2 text-base font-medium border-black dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 text-base font-medium border-transparent dark:border-transparent"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to={"/products"}
              rel="noopener noreferrer"
              className={`${
                currentPath === "/products"
                  ? "flex items-center px-4 -mb-1 border-b-2 text-base font-medium border-black dark:text-violet-400 dark:border-violet-400"
                  : "flex items-center px-4 -mb-1 border-b-2 text-base font-medium border-transparent dark:border-transparent"
              }`}
            >
              Products
            </Link>
          </li>
        </ul>
        <a
          rel="noopener noreferrer"
          href="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h1 className="hidden sm:block text-2xl text-black font-bold tracking-wide dark:text-gray-200">
            UNDEFINED
          </h1>
        </a>
        <div className="flex items-center md:space-x-4">
          <div onClick={toggleDarkMode} className="cursor-pointer mr-2">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
