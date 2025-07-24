import React from "react";
import { X } from "lucide-react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
const NavData = [
  {
    label: "Overview",
    link: "/admin",
    icon: "/admin/adminsidebaricons/codesandbox.png",
  },
  {
    label: "User Management",
    link: "/admin/user-management",
    icon: "/admin/adminsidebaricons/person.png",
  },
  {
    label: "Full Map Rooms",
    link: "/admin/full-map-rooms",
    icon: "/admin/adminsidebaricons/frame.png",
  },
  {
    label: "Room Management",
    link: "/admin/room-management",
    icon: "/admin/adminsidebaricons/radio2.png",
  },
  {
    label: "LIve Management",
    link: "/admin/live-management",
    icon: "/admin/adminsidebaricons/pc.png",
  },
  {
    label: "Tournaments",
    link: "/admin/tournaments",
    icon: "/admin/adminsidebaricons/cup.png",
  },
  {
    label: "Top-up Manage",
    link: "/admin/top-up-manage",
    icon: "/admin/adminsidebaricons/radio2.png",
  },
  {
    label: "Notification",
    link: "/admin/notification",
    icon: "/admin/adminsidebaricons/notification.png",
  },
  {
    label: "Analytics",
    link: "/admin/analytics",
    icon: "/admin/adminsidebaricons/analytics.png",
  },
];

// Gaming hub management section

const GamingManagement = () => {
  return (
    <div className=" h-[143px] w-[252px] text-center flex flex-col justify-center items-center rounded-sm">
      <p className="text-white text-[18px]">Admin Panel</p>
      <p className=" text-[12px] text-[#C0C0C0]">Gaming Hub Management</p>
    </div>
  );
};
const SideNavLink = ({ icon, label, url }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log({ pathname });
  return (
    <div
      className={clsx(
        "sidenav-link group relative h-[53px] w-[241px] flex items-center gap-3 pl-6 hover:bg-[#4D8ACA] hover:rounded-2xl hover:text-[#80FFDB]  transition-all duration-500",
        (pathname === url || pathname === url + "/") &&
          "active-link bg-[#4D8ACA] text-[#80FFDB] rounded-2xl"
      )}
    >
      <div className="h-5 w-5 rounded-full grid place-content-center text-[18px]">
        <img src={icon} alt={label} height={25} width={25} />
      </div>
      <div className="text-white  group-hover:text-[#80FFDB] ">{label}</div>
    </div>
  );
};
const SideNav = () => {
  return (
    <div className="hide-scrollbar min-h-screen w-[292px] overflow-y-scroll border-r bg-[#212121] flex flex-col">
      {/* top heading */}
      <div className=" border-bottom sticky h-20 w-full top-0 z-10 bg-[#212121] flex justify-between items-center px-5">
        <h1 className="text-[18px] text-white">Kryzox Admin Panel</h1>
        <X size={30} color="#80FFDB" />
      </div>

      {/* scrollable nav section */}
      <div className=" h-[914px] w-full  flex flex-col justify-between items-center pt-10">
        <div className="flex  flex-col gap-5">
          {NavData.map((item, index) => (
            <Link key={index} to={item.link}>
              <SideNavLink
                label={item.label}
                icon={item.icon}
                url={item.link}
              />
            </Link>
          ))}
        </div>

        {/* footer */}
        <div className="h-auto w-auto mt-auto">
          <GamingManagement />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
