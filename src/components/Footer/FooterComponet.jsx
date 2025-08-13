import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const FooterComponet = ({ data }) => {
  return (
    <footer>
      <ul className="flex flex-col gap-5 ">
        {data.map((element, index) => {
          return (
            <li key={index}>
              {index === 0 ? (
                <span className="font-bold">{element.content}</span>
              ) : element.content === "Feedback" ? (
                <ScrollLink
                  key={index}
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="contactUs"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {element.content}
                </ScrollLink>
              ) : (
                <Link
                  to={element.route || "#"}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {element.content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default FooterComponet;
