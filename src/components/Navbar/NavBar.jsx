import { Link } from "react-router-dom";
import { AlignJustify as Hamburger } from "lucide-react"; //handlebar
import "./navbar.css";
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
        <li className="">
          <Link to="#" className="link group">
            <span className="z-10">Home</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <span>Games</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <span>Features</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <span>Earnings</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      {/* hamburger menu for mobile devices */}
      <Hamburger className="block md:hidden" size={30} />
    </nav>
  );
};

export default NavBar;
