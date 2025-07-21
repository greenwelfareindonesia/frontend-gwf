import * as React from "react";
import { HiArrowRightCircle } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import {
  admin_user_icon,
  articles_icon,
  dashboard_icon,
  ecopedia_icon,
  events_icon,
  feedback_icon,
  gallery_icon,
  gwf_dashboard_icon,
  study_icon,
  // users_icon,
  // veganguide_icon,
  workshop_icon,
} from "../../assets/icons";
import Icon from "../../components/icon";
import Button from "../../components/button";
import ReloadRefresh from "../../utils/ReloadRefresh";

const Menus = [
  { title: "Dashboard", path: "/dashboards", src: dashboard_icon },
  { title: "Employees", path: "/dashboard/employees", src: IoPerson },
  { title: "Articles", path: "/dashboard/article", src: articles_icon },
  { title: "Ecopedia", path: "/dashboard/ecopedia", src: ecopedia_icon },
  { title: "Events", path: "/dashboard/event", src: events_icon },
  { title: "Gallery", path: "/dashboard/gallery", src: gallery_icon },
  { title: "Feedback", path: "/dashboard/feedback", src: feedback_icon },
  { title: "Workshop", path: "/dashboard/workshop", src: workshop_icon },
  { title: "Reports", path: "/dashboard/report", src: study_icon },
];

const DashboardSection = ({ children, titleField, buttonField }) => {
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLoading(true);
    ReloadRefresh(2000, "/login");
    setLoading(false);
  };

  return (
    <section className="relative flex">
      <div className={` ${open ? "max-w-[240px] min-w-[230px]" : "max-w-[90px] min-w-[80px]"} w-full bg-primary-2 h-screen p-5 pt-8 fixed duration-300 flex-1`}>
        <button onClick={() => setOpen(!open)} className={`absolute cursor-pointer right-0 top-0`}>
          <HiArrowRightCircle className={`${open && "rotate-[180deg]"} w-7 h-7 duration-700 text-light-1`} />
        </button>
        <div className="flex items-center pb-4">
          <Icon
            src={gwf_dashboard_icon}
            type="unset"
            className={`${open && "rotate-[360deg]"} w-24`}
          />
        </div>
        <div className="h-0.5 w-full bg-light-1 absolute left-0"></div>
        <ul className="pt-4 space-y-2">
          {Menus.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu bg-primary-1"
                  : "sidebar-menu bg-primary-2"
              }
              to={item.path}
            >
              {typeof item.src === "string" ? (
                <Icon src={item.src} />
              ) : (
                <item.src className="w-6 h-6" />
              )}
              <span
                className={`${!open && "hidden"} origin-left duration-200`}
              >
                {item.title}
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
      <div
        className={`flex-1 w-full duration-300 ${
          open ? "ml-[240px]" : "ml-[90px]"
        }`}
      >
        <div className="flex items-center justify-end h-16 px-8 bg-light-2">
          <div className="group !bg-light-2 relative p-2 flex items-center gap-1 cursor-pointer">
            <Icon src={admin_user_icon} />
            <h1 className="text-sm">helmy fadlail</h1>
            <RiArrowDownSLine className="duration-300 group-hover:rotate-180" />

            <div className="absolute right-0 hidden p-4 shadow-lg top-10 group-hover:block z-1 bg-light-1 rounded-xl">
              <ul className="w-full space-y-2">
                <Link to="/dashboard">
                  <Button className="rounded-md !w-full">Profile</Button>
                </Link>
                <Button className={`!bg-red-400 hover:!bg-red-600 rounded-md ${loading && "animate-pulse"}`} onClick={handleLogout}>
                  Logout
                </Button>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-20 space-y-8">
          <div className="flex items-center justify-between px-4 pt-8">
            <h1 className="text-3xl font-bold text-primary-1">
              {titleField ?? null}
            </h1>
            {buttonField ?? null}
          </div>
          <div className="block px-4 overflow-y-auto">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
