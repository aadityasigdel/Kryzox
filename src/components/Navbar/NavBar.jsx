import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="h-[80px] w-full bg-[#0B0811] text-white flex items-center justify-between px-35  border-b-3 border-b-[#c84de5]">
      <div className="logo flex relative items-center space-x-2 font-bold text-2xl ">
        <span>
          KRYZOX
        </span>
        <span className="top-logo-container"><span className="logo-dollar animate-pulse z-10">💰</span><span className="top-logo animate-pulse">EARN</span></span>
      </div>

      <ul className="list-none h-auto w-auto flex gap-10 bg font-semibold text-gray-300">
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
    </nav>
  );
};

export default NavBar;
