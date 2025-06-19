import FooterComponet from "./FooterComponet";
import FooterIcons from "./FooterIcons";
import { Github, Twitter, MSquare, Youtube } from "lucide-react";
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
      <div className="h-auto w-auto text-white flex gap-20 mx-35 border-b-1 border-b-[#c84de5] py-5">
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl font-bold">KRYZOX</h1>
          <p className="text-gray-300">
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
    </div>
  );
};

export default Footer;
