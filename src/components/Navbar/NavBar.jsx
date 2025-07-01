import { Link } from "react-router-dom";
import { AlignJustify as Hamburger } from "lucide-react"; //handlebar
import "./navbar.css";
// navbar links
const navLinks = [
  { name: "Home", path: "#" },
  { name: "Games", path: "#" },
  { name: "Features", path: "#" },
  { name: "Earnings", path: "#" },
  { name: "Contact", path: "#" },
];

const NavBar = () => {
  return (
    <nav className="h-[80px] w-full fixed top-0 z-20  bg-[#0B0811] text-white flex items-center justify-between px-3 border-b-3 border-b-[#c84de5] md:px-15 lg:px-35">
      <div className="logo flex relative items-center space-x-2 font-bold text-2xl ">
        <span>KRYZOX</span>
        <span className="top-logo-container">
          <span className="logo-dollar animate-pulse z-10">💰</span>
          <span className="top-logo animate-pulse">EARN</span>
        </span>
      </div>

      <ul className="list-none h-auto w-auto bg font-semibold text-gray-300 hidden md:gap-5 lg:gap-10 md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="link group relative">
            {/* this is for the link hover for background effect */}
              <span
                className=" absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg blur-sm"
                style={{
                  background:
                    "linear-gradient(to right, rgba(121, 165, 213, 0.3), rgba(200, 77, 229, 0.3))",
                }}
              ></span>
              <span className="z-10">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* hamburger menu for mobile devices */}
      <Hamburger className="block md:hidden" size={30} />
    </nav>
  );
};

export default NavBar;
