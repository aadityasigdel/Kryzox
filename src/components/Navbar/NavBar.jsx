import { Link } from "react-router-dom";
import { AlignJustify as Hamburger } from 'lucide-react'; //handlebar
import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="h-[80px] w-full bg-[#0B0811] text-white flex items-center justify-between px-10 border-b-3 border-b-[#c84de5] md:px-15 lg:px-35">
      <div className="logo flex relative items-center space-x-2 font-bold text-2xl ">
        <span>
          KRYZOX
        </span>
        <span className="top-logo-container"><span className="logo-dollar animate-pulse z-10">💰</span><span className="top-logo animate-pulse">EARN</span></span>
      </div>

      <ul className="list-none h-auto w-auto bg font-semibold text-gray-300 hidden md:gap-5 lg:gap-10 md:flex">
        <li>
          <Link to="#"className="link">Home</Link>
        </li>
        <li>
          <Link to="#"className="link">Games</Link>
        </li>
        <li>
          <Link to="#"className="link">Features</Link>
        </li>
        <li>
          <Link to="#"className="link">Earnings</Link>
        </li>
        <li>
          <Link to="#"className="link">Contact</Link>
        </li>
      </ul>
      {/* hamburger menu for mobile devices */}
      <Hamburger className="block md:hidden" size={30}/>
    </nav>
  );
};

export default NavBar;
