import FooterComponet from "./FooterComponet";
import FooterIcons from "./FooterIcons";
import { Github, Twitter, MSquare, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const data1 = [
  {
    content: "Products",
  },
  {
    content: "Games",
  },
  {
    content: "Features",
  },
  {
    content: "Download",
  },
  {
    content: "System Requirements",
  },
];
const data2 = [
  { content: "Community" },
  { content: "Discord" },
  { content: "Forums" },
  { content: "Tournaments" },
  { content: "Leaderboards" },
];
const data3 = [
  { content: "Support" },
  { content: "Help Center" },
  { content: "Contact" },
  { content: "Bug Reports" },
  { content: "Feedback" },
];

const data4 = [
  { content: "Company" },
  { content: "About" },
  { content: "Careers" },
  { content: "Press" },
  { content: "Partners" },
];

const icons = [
  { icon: Github, color: "text-gray-400" },
  { icon: Twitter, color: "text-[#79a5d5]" },
  { icon: MSquare, color: "text-[#c84de5]" },
  { icon: Youtube, color: "text-[#84147C]" },
];
const Footer = () => {
  return (
    <footer
      className="h-auto w-auto px-10 py-10 md:px-20 lg:px-35"
      id="contact"
      style={{
        backgroundColor: "#1D0A2E",
        borderColor: "rgba(200, 77, 229, 0.3)",
      }}
    >
      <div
        className="h-auto w-auto text-white flex flex-wrap gap-20 border-b  py-5 pb-20"
        style={{ borderColor: "rgba(200, 77, 229, 0.3)" }}
      >
        <div className="flex flex-col gap-10 max-w-[400px]">
          <div className="text-3xl font-bold">
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(45deg, #79a5d5, #c84de5, #5e41a1)",
                WebkitBackgroundClip: "text",
              }}
            >
              KRYZOX
            </span>
          </div>
          <p className="text-gray-400">
            The ultimate gaming platform that brings together competitive
            gaming, community, and cutting-edge technology.
          </p>
          <div className="flex gap-5">
            {icons.map((element, index) => (
              <FooterIcons
                key={index}
                icon={element.icon}
                color={element.color}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row md:gap-20 gap-y-10">
          <FooterComponet data={data1}></FooterComponet>
          <FooterComponet data={data2}></FooterComponet>
          <FooterComponet data={data3}></FooterComponet>
          <FooterComponet data={data4}></FooterComponet>
        </div>
      </div>
      {/* privacy or additional inof section */}
      <section className="flex flex-col justify-between  text-sm text-gray-400 mt-10 md:flex-wrap md:flex-row">
        <div>
          <p>© 2024 KRYZOX. All rights reserved.</p>
        </div>
        <div>
          <ul className="text-sm list-none flex flex-col mt-15  gap-5 md:mt-0 md:flex-wrap md:flex-row">
            <li className="hover:text-white transition-colors duration-300">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="#">Terms of Service</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
