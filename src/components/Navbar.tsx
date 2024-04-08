"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    to: "#about",
  },
  {
    title: "Projects",
    to: "#projects",
  },
  {
    title: "Contact",
    to: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarVisibility] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-auto bg-[#121212] bg-opacity-100 mt-5">
      <div className="flex flex-wrap items-center justify-between mx-auto px-12">
        <Link to={"/"} className="text-2xl text-white font-semibold">
          PD
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarVisibility(!navbarOpen)}
              className=" flex items-center px-3 py-2 bortder rounded border-slate-200  text-slate-200  hover:text-white hover:border-white"
            >
              <XMarkIcon className=" h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarVisibility(!navbarOpen)}
              className=" flex items-center px-3 py-2 bortder rounded border-slate-200  text-slate-200  hover:text-white hover:border-white"
            >
              <Bars3Icon className=" h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row space-x-8 mt10">
            {navLinks.map(({ title, to }) => (
              <li key={title}>
                <NavLink to={to} title={title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="menu-overlay" className="bg-[#121212] bg-opacity-100 mt-5">
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </div>
    </nav>
  );
};

export default NavBar;
