import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useSelector } from "react-redux";
import { AlignJustify as Hamburger, X } from "lucide-react"; //handlebar
import "./navbar.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { use } from "react";
// navbar links
const navLinks = [
  { name: "Home", path: "#", id: "home" },
  { name: "Games", path: "#", id: "games" },
  { name: "Features", path: "#", id: "features" },
  { name: "Earnings", path: "#", id: "earnings" },
  { name: "ContactUs", path: "#", id: "contactUs" },
];
// logo design
const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/home/logo/logo.png"
        alt="logo"
        className="h-14 w-14 object-cover rounded-full"
      />
      <div className="logo flex relative font-bold text-2xl shadow-2xl ">
        <span>KRYZOX</span>
        <span className="top-logo-container">
          <span className="logo-dollar animate-pulse z-10">💰</span>
          <span className="top-logo animate-pulse">EARN</span>
        </span>
      </div>
    </div>
  );
};

// logo section
//  const Logo=()=>{
//   return(
//     <div className="h-[60px] w-[60px]">
// <img src="/home/logo/logo.png"alt="logo"className="object-cover rounded-full" />
//     </div>
//   )
//  }

// login button

const LoginBtn = ({ children, className }) => {
  return (
    <button
      className={clsx(
        "px-7 py-2 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
      }}
    >
      {children}
    </button>
  );
};

// logged in user profile
const LoggedInUserProfile = ({ userData }) => {
  console.log({userName:userData?.name})
  return (
    <div className="flex gap-2">
      <p className="text-white">{userData?.name || "Radhe"}</p>
    </div>
  );
};
// design navigation for mobile
const MobileNavigation = ({ setIsMobileNavOpen, isMobileNavOpen ,isLoggedIn,loggedInUserInfo }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0  gap-10 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex flex-col pt-10 px-10 overflow-hidden translate-x-[-100%] transition-transform duration-500 ease-in-out md:hidden",
        {
          "translate-x-[0%]": isMobileNavOpen,
          "translate-x-[100%] pointer-events-none": !isMobileNavOpen,
        }
      )}
    >
      <X
        size={30}
        className="absolute top-5 right-5 text-white cursor-pointer block md:hidden"
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
        {!isLoggedIn ? (
          <NavLink to="/auth/login">
            <LoginBtn>Login</LoginBtn>
          </NavLink>
        ) : (
          <LoggedInUserProfile userData={loggedInUserInfo} />
        )}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isLoggedIn, loggedInUserInfo } = useSelector((state) => state.auth);
  console.log({ loggedInUserInfo });
  return (
    <nav className="h-[80px] w-full max-w-[1600px] fixed top-0 z-20  bg-[#0B0811] text-white flex items-center justify-between px-3 border-b border-b-[#c84de5] md:px-7 lg:px-35">
      {/* logo section */}
      <Logo />
      {/* navlink contianer */}
      <div className="flex gap-10 items-center">
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
        {!isLoggedIn ? (
          <NavLink to="/auth/login">
            <LoginBtn className="hidden md:block" userData={loggedInUserInfo}>
              Login
            </LoginBtn>
          </NavLink>
        ) : (
          <LoggedInUserProfile userData={loggedInUserInfo}/>
        )}
      </div>
      {/* hamburger menu for mobile devices */}
      <MobileNavigation
        setIsMobileNavOpen={setIsMobileNavOpen}
        isMobileNavOpen={isMobileNavOpen}
        isLoggedIn={isLoggedIn}
        loggedInUserInfo={loggedInUserInfo}
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
