import * as React from "react";

import { HiArrowRightCircle } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

import {
  admin_user_icon,
  articles_icon,
  dashboard_icon,
  ecopedia_icon,
  events_icon,
  feedback_icon,
  gallery_icon,
  gwf_logo_dashboard,
  users_icon,
  veganguide_icon,
  workshop_icon,
} from "../../assets/icons";
import Icon from "../../components/icon";
import Button from "../../components/button";

const Menus = [
  { title: "Dashboard", path: "/dashboard", src: dashboard_icon },
  { title: "Articles", path: "/dashboard/article", src: articles_icon },
  { title: "Ecopedia ", path: "/dashboard/ecopedia", src: ecopedia_icon },
  { title: "Events", path: "/dashboard/event", src: events_icon },
  { title: "Gallery", path: "/dashboard/gallery", src: gallery_icon },
  { title: "Feedback", path: "/dashboard/feedback", src: feedback_icon },
  { title: "Contact", path: "/dashboard/contact", src: users_icon },
  { title: "Veganguide", path: "/dashboard/veganguide", src: veganguide_icon },
  { title: "Workshop", path: "/dashboard/workshop", src: workshop_icon },
];

const DashboardSection = ({ children, titleField, buttonField, handlePopUp }) => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();

  return (
    <section className="flex">
      <div
        className={` ${
          open ? "max-w-[240px] min-w-[230px]" : "max-w-[90px] min-w-[80px]"
        } w-full bg-primary-2 h-screen p-5 pt-8 fixed duration-300 flex-1`}
      >
        <button onClick={() => setOpen(!open)} className={`absolute cursor-pointer right-0 top-0`}>
          <HiArrowRightCircle className={`${open && "rotate-[180deg]"} w-7 h-7 duration-700 text-light-1`} />
        </button>
        <div className="flex items-center pb-4">
          <Icon src={gwf_logo_dashboard} type="unset" className={`${open && "rotate-[360deg]"} w-24`} />
        </div>
        <i className="h-0.5 w-full bg-light-1 absolute left-0"></i>
        <ul className=" pt-4 space-y-2">
          {Menus.map((item, index) => (
            <Link
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-primary-1 text-gray-300 text-sm items-center gap-x-4 ${
                item.path === pathname && "bg-primary-1"
              } `}
              to={item.path}
            >
              <Icon src={item.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{item.title}</span>
            </Link>
          ))}
        </ul>
      </div>
      <div className={`flex-1 w-full duration-300 ${open ? "ml-[240px]" : "ml-[90px]"}`}>
        <div className="flex items-center justify-end h-16 px-8 bg-light-2">
          <Button className="group !bg-light-2">
            <Icon src={admin_user_icon} />
            <h1>Admin</h1>
            <RiArrowDownSLine className="duration-300 group-hover:rotate-180" />
          </Button>
        </div>
        <div className="space-y-8 mb-20">
          <div className="flex items-center justify-between px-4 pt-8">
            <h1 className="text-3xl font-bold text-primary-1">{titleField}</h1>
            {buttonField && handlePopUp && (
              <Button onClick={handlePopUp} className="!text-xl !text-light-1 !bg-primary-2 hover:!bg-primary-1 rounded-lg">
                {buttonField}
              </Button>
            )}
          </div>
          <div className="block">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
