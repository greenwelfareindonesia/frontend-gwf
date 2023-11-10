import * as React from "react";

import { HiArrowRightCircle } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  admin_icon,
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
  { title: "Dashboard", src: dashboard_icon },
  { title: "Articles", src: articles_icon },
  { title: "Admins", src: admin_icon },
  { title: "Ecopedia ", src: ecopedia_icon },
  { title: "Events", src: events_icon },
  { title: "Gallery", src: gallery_icon },
  { title: "Feedback", src: feedback_icon },
  { title: "Users", src: users_icon },
  { title: "Veganguide", src: veganguide_icon },
  { title: "Workshop", src: workshop_icon },
];
const DashboardSection = ({ children, titleField, buttonField }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <section className="flex">
      <div className={` ${open ? "max-w-[240px]" : "max-w-[80px]"} w-full bg-primary-2 h-full p-5 pt-8 relative duration-300 flex-1`}>
        <button onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-6 top-2 p-1 border-2 rounded-full bg-light-2 z-10`}>
          <HiArrowRightCircle className={`${open && "rotate-[180deg]"} w-7 h-7 duration-700`} />
        </button>
        <div className="flex items-center pb-8">
          <Icon src={gwf_logo_dashboard} type="unset" className={`${open && "rotate-[360deg]"} w-28`} />
        </div>
        <i className="h-0.5 w-full bg-light-1 absolute left-0"></i>
        <ul className="pt-8 space-y-2">
          {Menus.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-primary-1 text-gray-300 text-sm items-center gap-x-4 ${
                index === 0 && "bg-primary-1"
              } `}
            >
              <Icon src={item.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full">
        <div className="flex items-center justify-end h-16 px-8 bg-light-2">
          <Button className="group !bg-light-2">
            <Icon src={admin_user_icon} />
            <h1>Admin</h1>
            <RiArrowDownSLine className="duration-300 group-hover:rotate-180" />
          </Button>
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-between px-8 pt-8">
            <h1 className="text-3xl font-bold text-primary-1">{titleField}</h1>
            <Button className="!text-xl">{buttonField}</Button>
          </div>
          <div className="block">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
