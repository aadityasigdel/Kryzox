import FooterComponet from "./FooterComponet";
import FooterIcons from "./FooterIcons";
import { Github, Twitter, MSquare, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const data = [
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
const icons = [Github, Twitter, MSquare, Youtube];
const Footer = () => {
  return (
    <div className="h-auto w-auto bg-slate-900 py-10">
      <div className="h-auto w-auto text-white flex gap-20 mx-35 border-b-1 border-b-[#c84de5] py-5 pb-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl font-bold">KRYZOX</h1>
          <p className="text-gray-400">
            The ultimate gaming platform that brings together competitive
            gaming, community, and cutting-edge technology.
          </p>
          <div className="flex gap-5">
            {icons.map((element, index) => (
              <FooterIcons key={index} icon={element} />
            ))}
          </div>
        </div>
        <FooterComponet data={data}></FooterComponet>
        <FooterComponet data={data}></FooterComponet>
        <FooterComponet data={data}></FooterComponet>
        <FooterComponet data={data}></FooterComponet>
      </div>
      {/* privacy or additional inof section */}
      <section className="flex justify-between mx-35 text-gray-400 mt-10">
        <div><p>© 2024 KRYZOX. All rights reserved.</p></div>
        <div>
          <ul className="list-none flex gap-5">
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Cookie Policy</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
