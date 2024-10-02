import * as React from "react";

import logo_gwf from "../../assets/gwf.png";

import { navContent } from "../../constant/navbar";

import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { HiUserCircle } from "react-icons/hi2";
import Image from "../image";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul
      className={`bg-light-1 flex flex-col lg:flex-row justify-center items-center gap-4 absolute lg:static z-20 top-0 w-full lg:w-auto duration-300 h-screen lg:h-auto ${
        openNav ? "left-0" : "left-[-200%]"
      }`}
    >
      {navContent.map((item, index) => (
        <li key={index} className="relative block p-1 text-sm group">
          {item?.content?.length >= 1 ? (
            <p className="flex items-center duration-500 cursor-default hover:text-primary-2 text-dark whitespace-nowrap">{item.name}</p>
          ) : (
            <Link to={item.path} className="flex items-center duration-500 hover:text-primary-2 text-dark whitespace-nowrap">
              {item.name}
            </Link>
          )}
          {item?.content?.length >= 1 && (
            <div className="absolute z-30 hidden w-24 px-2 py-4 space-y-2 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:left-0 bg-light-1 group-hover:block">
              {item.content.map((item, index) => (
                <Link key={index} to={item.path} className="flex items-center duration-300 hover:text-primary-2 text-dark">
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
      <li className="hidden text-sm lg:block text-dark">
        <Link to="/login" className="flex items-center duration-200 hover:text-primary-2">
          <HiUserCircle className="hidden w-6 h-6 mr-1 lg:block text-primary-2" /> Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 block w-full py-6 border shadow-md bg-light-1 text-light-1">
      <div className="relative flex items-center justify-between flex-grow-0 flex-shrink-0 w-full px-8 text-dark lg:px-16">
        <Link to="/" className="z-50 block cursor-pointer">
          <Image src={logo_gwf} className="!w-24 h-24" description="logo gwf" />
        </Link>

        <div
          className={`lg:hidden z-30 text-dark absolute left-1/2 -translate-x-1/2 duration-300 ${
            openNav ? "top-1/2 -translate-y-1/2" : "top-[-100%]"
          }`}
        >
          <Link to="/login" className="flex items-center duration-200 hover:text-primary-2">
            <HiUserCircle className="w-6 h-6 mr-1" /> Login
          </Link>
        </div>

        <button className="relative z-40 text-xs text-center lg:hidden" onClick={() => setOpenNav(!openNav)} type="button">
          {openNav ? <AiOutlineClose className="w-8 h-8" /> : <AiOutlineMenu className="w-8 h-8" />}
        </button>

        {navList}
      </div>
    </nav>
  );
};

export default Navbar;
