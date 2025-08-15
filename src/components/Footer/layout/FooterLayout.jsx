// This component is for the common layout which contains commmon header and footer

import React from "react";
import NavBar from "../../Navbar/NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const FooterLayout = ({ children }) => {
  return (
    <div className="min-h-screen  bg-[#241B3A] text-gray-300 flex flex-col">
      <NavBar />
      {/* children container */}
      <div className="mt-[80px] flex-1"><Outlet/></div>
      <Footer />
    </div>
  );
};

export default FooterLayout;
