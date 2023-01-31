import React, { useState } from "react";
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
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link
              to={"/home"}
              rel="noopener noreferrer"
              className={`${
                currentPath === "/home"
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
          <h1 className="text-2xl text-black font-bold tracking-wide dark:text-gray-200">
            UNDEFINED
          </h1>
        </a>
        <div className="flex items-center md:space-x-4">
          <div onClick={toggleDarkMode} className="cursor-pointer mr-2">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <SearchIcon />
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 px-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-900 dark:text-gray-100 focus:dark:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
