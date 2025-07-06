import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { AlignJustify as Hamburger, X } from "lucide-react"; //handlebar
import "./navbar.css";
import clsx from "clsx";
// navbar links
const navLinks = [
  { name: "Home", path: "#", id: "home" },
  { name: "Games", path: "#", id: "games" },
  { name: "Features", path: "#", id: "features" },
  { name: "Earnings", path: "#", id: "earnings" },
  { name: "Contact", path: "#", id: "contact" },
];
// logo design
const Logo = () => {
  return (
    <div className="logo flex relative font-bold text-2xl shadow-2xl">
      <span>KRYZOX</span>
      <span className="top-logo-container">
        <span className="logo-dollar animate-pulse z-10">💰</span>
        <span className="top-logo animate-pulse">EARN</span>
      </span>
    </div>
  );
};

// design navigation for mobile
const MobileNavigation = ({ setIsMobileNavOpen, isMobileNavOpen }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0  gap-10 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex flex-col pt-10 px-10 overflow-hidden translate-x-[-100%] transition-transform duration-500 ease-in-out",
        {
          "translate-x-[0%]": isMobileNavOpen,
          "translate-x-[100%] pointer-events-none": !isMobileNavOpen,
        }
      )}
    >
      <X
        size={30}
        className="absolute top-5 right-5 text-white cursor-pointer"
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* logo section */}
      <div className="flex inset-0">
        <Logo />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        {navLinks.map((item, index) => (
          <ScrollLink
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            onClick={() => setIsMobileNavOpen(false)}
            to={item.id}
            className="text-gray-300 hover:text-white transition-all duration-500"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="h-[80px] w-full max-w-[1600px] fixed top-0 z-20  bg-[#0B0811] text-white flex items-center justify-between px-3 border-b border-b-[#c84de5] md:px-15 lg:px-35">
      {/* logo section */}
      <Logo />
      <ul className="list-none h-auto w-auto bg font-semibold text-gray-300 hidden md:gap-5 lg:gap-10 md:flex">
        {navLinks.map((link) => (
          <li key={link.name} className="cursor-pointer">
            <ScrollLink
              to={link.id}
              className="link group relative"
              smooth={true}
              duration={500}
              spy={true}
            >
              {/* this is for the link hover for background effect */}
              <span
                className=" absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg blur-sm"
                style={{
                  background:
                    "linear-gradient(to right, rgba(121, 165, 213, 0.3), rgba(200, 77, 229, 0.3))",
                }}
              ></span>
              <span className="z-10">{link.name}</span>
            </ScrollLink>
          </li>
        ))}
      </ul>
      {/* hamburger menu for mobile devices */}
      <MobileNavigation
        setIsMobileNavOpen={setIsMobileNavOpen}
        isMobileNavOpen={isMobileNavOpen}
      />

      <Hamburger
        className="block md:hidden"
        size={30}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
    </nav>
  );
};

export default NavBar;
