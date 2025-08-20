import { Link,useLocation } from "react-router-dom";
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
const SideNavLink = ({ icon, label, url }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log({ pathname });
  return (
    <div
      className={clsx(
        " group relative h-[53px] w-[241px] flex items-center gap-3 pl-6 hover:bg-[#4D8ACA] hover:rounded-2xl hover:text-[#80FFDB]  transition-all duration-500",
        (pathname === url || pathname === url + "/") && 
          "bg-[#4D8ACA] text-[#80FFDB] rounded-2xl"
      )}
    >
      <div className="h-5 w-5 rounded-full grid place-content-center text-[18px]">
        <img src={icon} alt={label} height={25} width={25} />
      </div>
      <div className="text-white  group-hover:text-[#80FFDB] ">{label}</div> 
    </div>
  );
};
const MobileSideNav = () => {
  return (
    <nav className="h-screen w-[95px] bg-[#212121]">
      {/* top heading */}
      <div className=" border-bottom sticky h-20 w-full top-0 z-10 bg-[#212121] flex justify-between items-center px-5">
        <h1 className="text-[18px] text-white">Kry</h1>
      </div>
      {/* navigation section */}
      <div className="h-full w-full  flex flex-col justify-between items-center pt-10">
        <div className="h-full flex  flex-col gap-5">
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
      </div>
    </nav>
  );
};

export default MobileSideNav;
