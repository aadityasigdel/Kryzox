import { Link } from "react-router-dom"
const FooterComponet = ({data}) => {
  return (
    <footer>
        <ul className="flex flex-col gap-5 ">
            {data.map((element,index)=>{
                return(
                <li key={index}>
                    {index===0 ? <span className="font-bold">{element.content}</span>:
                <Link to={element.route || "#"} className="text-gray-400 hover:text-white transition-colors duration-300">{element.content}</Link>
            }
                </li>
                )
            })}
        </ul>
    </footer>
  )
}

export default FooterComponet;
