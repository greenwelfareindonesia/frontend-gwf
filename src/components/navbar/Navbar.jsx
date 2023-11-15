import React from "react";
import { logo_gwf } from "../../assets/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const listMenu = [
  { name: "Home", content: [], path: "/" },
  {
    name: "About",
    content: [
      { name: "Team", path: "/team" },
      { name: "Chapters", path: "/bdg" },
    ],
    path: "/about",
  },
  { name: "Get Involved", content: [], path: "/involved" },
  { name: "Events", content: [], path: "/events" },
  { name: "Make a Donation", content: [], path: "/" },
  { name: "Workshop & Classes", content: [], path: "/" },
  {
    name: "More",
    content: [
      { name: "Gallery", path: "/" },
      { name: "Contact", path: "/" },
      { name: "Eco-pedia", path: "/" },
      { name: "Resource Hub", path: "/" },
    ],
  },
];

const Navbar = () => {
  const pathname = useLocation().pathname;

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul
      className={`bg-white flex flex-col lg:flex-row justify-center items-center gap-4 absolute lg:static z-[1] top-0 w-full lg:w-auto transition-all duration-300 ease-in h-screen lg:h-auto ${
        openNav ? "left-0" : "left-[-200%]"
      }`}
    >
      {listMenu.map((item, key) => (
        <li
          key={key}
          className="block antialiased text-sm font-normal leading-normal p-1 relative group"
        >
          <Link
            to={item.path}
            className={`flex items-center duration-500 hover:text-[#6B6B0E] ${
              item.path === pathname ? "text-[#6B6B0E]" : "text-blue-gray-900"
            } whitespace-nowrap`}
          >
            {item.name}
          </Link>
          {item.content.length > 1 && (
            <div className="hidden absolute transition-all duration-300 left-0 min-w-[120px] shadow-md z-[3] group-hover:flex flex-col p-2 bg-white">
              {item.content.map((item, key) => (
                <Link
                  key={key}
                  to={item.path}
                  className={`flex items-center duration-500 hover:text-[#6B6B0E] "text-[#6B6B0E]" whitespace-nowrap`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
      <li className="lg:block hidden antialiased text-sm font-normal leading-normal text-blue-gray-900 p-1">
        <Link href="/" className="flex items-center duration-200 hover:text-[#6B6B0E]">
          <HiUserCircle className="hidden w-6 h-6 mr-1 lg:block text-[#6B6B0E]" /> Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl border border-white/80 bg-white text-white sticky top-0 z-10 px-0 py-2 bg-opacity-100 rounded-none h-max">
      <div className="flex flex-shrink-0 flex-grow-0 items-center justify-between text-blue-gray-900 px-4 lg:px-12 w-full relative">
        <a
          href="#"
          className="block antialiased font-sans text-base leading-relaxed text-inherit cursor-pointer py-1.5 font-medium z-20"
        >
          <img src={logo_gwf} className="h-20" alt="logo gwf" />
        </a>

        <div
          className={`transition-all duration-300 lg:hidden antialiased text-sm font-normal leading-normal text-blue-gray-900 p-1 z-[2] absolute left-1/2 -translate-x-1/2  ${
            openNav ? "top-1/2 -translate-y-1/2" : "top-[-100%]"
          }`}
        >
          <Link href="/" className="flex items-center duration-200 hover:text-[#6B6B0E]">
            <HiUserCircle className="w-6 h-6 mr-1" /> Login
          </Link>
        </div>

        <button
          className="relative align-middle select-none text-center uppercase transition-all max-w-[40px] max-h-[40px] text-xs lg:hidden z-20 px-14"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? <AiOutlineClose className="w-8 h-8" /> : <AiOutlineMenu className="w-8 h-8" />}
        </button>
        {navList}
      </div>
    </nav>
  );
};

export default Navbar;
