import { Link as ScrollLink } from "react-scroll";

import { AlignJustify as Hamburger } from "lucide-react"; //handlebar
import "./navbar.css";
// navbar links
const navLinks = [
  { name: "Home", path: "#", id: "home" },
  { name: "Games", path: "#", id: "games" },
  { name: "Features", path: "#", id: "features" },
  { name: "Earnings", path: "#", id: "earnings" },
  { name: "Contact", path: "#", id: "contact" },
];

const NavBar = () => {
  return (
    <nav className="h-[80px] w-full fixed top-0 z-20  bg-[#0B0811] text-white flex items-center justify-between px-3 border-b border-b-[#c84de5] md:px-15 lg:px-35">
      <div className="logo flex relative items-center space-x-2 font-bold text-2xl ">
        <span>KRYZOX</span>
        <span className="top-logo-container">
          <span className="logo-dollar animate-pulse z-10">💰</span>
          <span className="top-logo animate-pulse">EARN</span>
        </span>
      </div>

      <ul className="list-none h-auto w-auto bg font-semibold text-gray-300 hidden md:gap-5 lg:gap-10 md:flex">
        {navLinks.map((link) => (
          <li key={link.name} className="cursor-pointer">
            <ScrollLink to={link.id} 
            className="link group relative"
            smooth={true} duration={500} spy={true} 
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
      <Hamburger className="block md:hidden" size={30} />
    </nav>
  );
};

export default NavBar;
