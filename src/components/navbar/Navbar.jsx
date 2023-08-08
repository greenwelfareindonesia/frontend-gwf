import React from "react";

import { logo_navbar } from "../../assets/image";
import { Navbar as NavbarList, Typography, IconButton, Collapse, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";

const listMenu = [
  { name: "Home", content: [], path: "/" },
  { name: "About", content: [], path: "/" },
  { name: "Get Involved", content: [], path: "/" },
  { name: "Events", content: [], path: "/" },
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
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 px-16 mt-2 mb-4 lg:px-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      {listMenu.map((item, key) => (
        <Typography key={key} as="li" variant="small" color="blue-gray" className="p-1">
          <a href={item.path} className="flex items-center duration-200 hover:text-[#6B6B0E] whitespace-nowrap">
            {item.name === "More" ? "" : item.name}
          </a>
          {item.name === "More" ? (
            <Popover placement="bottom-start">
              <PopoverHandler>
                <button className="duration-200 hover:text-[#6B6B0E]">{item.name}</button>
              </PopoverHandler>
              <PopoverContent className="max-w-[24rem] z-10 p-0">
                {item.content.map((itemContent, key) => (
                  <Typography key={key} as="li" variant="small" color="blue-gray" className="p-1">
                    <a href={itemContent.path} className="flex items-center duration-200 hover:text-[#6B6B0E]">
                      {itemContent.name}
                    </a>
                  </Typography>
                ))}
              </PopoverContent>
            </Popover>
          ) : null}
        </Typography>
      ))}
      <Typography as="li" variant="small" color="blue-gray" className="p-1">
        <a href="/" className="flex items-center duration-200 hover:text-[#6B6B0E]">
          <HiUserCircle className="hidden w-6 h-6 mr-1 lg:block text-[#6B6B0E]" /> Login
        </a>
      </Typography>
    </ul>
  );

  return (
    <NavbarList className="sticky top-0 z-10 max-w-full px-0 py-2 bg-opacity-100 rounded-none h-max">
      <div className="flex items-center justify-between text-blue-gray-900 px-14">
        <Typography as="a" href="#" className="cursor-pointer py-1.5 font-medium">
          <img src={logo_navbar} className="h-20" alt="" />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <IoClose className="w-8 h-8" /> : <FaBars className="w-6 h-6" />}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </NavbarList>
  );
};

export default Navbar;
