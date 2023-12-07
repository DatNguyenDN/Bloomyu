import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../DarkModeContent";
import logo from "../assets/logo.png";
import { menu, close } from "../assets/MenuBtn";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="navbar__container" className=" flex items-center h-[84px] w-full px-[2rem] justify-between font-roboto">
      <div id="nav__logo" className="flex max-lg:hidden">
        <NavLink to="/">
          <img className="w-[64px] h-[47px]   " src={logo} alt="logo" />
        </NavLink>
      </div>

      <div id="navlink">
        <ul className=" flex text-16  items-center justify-between space-x-9  max-lg:hidden">
          <li>
            <NavLink to="jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="company">Top Company</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="hotjobs">Hot Jobs</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div id="submenu__btn" className="hidden max-lg:flex flex-1" onClick={() => setToggle(true)}>
        <img src={toggle ? close : menu} alt="btn" />
      </div>

      <div className="flex gap-5 items-end justify-end   ">
        <button className="h-[45px] w-[120px] rounded-lg bg-yellow-500 max-lg:hidden">Post a Job</button>

        <button
          className="flex rounded-lg h-[45px] w-[120px] bg-yellow-500 items-center justify-center max-lg:hidden"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <>
              <MoonIcon />
              <span className="ml-2">Light Mode</span>
            </>
          ) : (
            <>
              <SunIcon />
              <span className="ml-2">Dark Mode</span>
            </>
          )}
        </button>

        <div className="max-lg:justify-end">
          <i
            className="bx bx-user bx-flip-horizontal text-[40px] cursor-pointer  "
            style={{ color: "#ffeb3b", hover: { color: "#fff" } }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
