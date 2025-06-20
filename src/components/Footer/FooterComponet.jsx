import { Link } from "react-router-dom"
const FooterComponet = ({data}) => {
  return (
    <footer>
        <ul className="flex flex-col gap-5">
            {data.map((element,index)=>{
                return(
                <li key={index}>
                    {index===0 ? <Link to={element.route || "#"} className="font-bold">{element.content}</Link>:
                <Link to={element.route || "#"} className="text-gray-400">{element.content}</Link>
            }
                </li>
                )
            })}
        </ul>
    </footer>
  )
}

export default FooterComponet;
