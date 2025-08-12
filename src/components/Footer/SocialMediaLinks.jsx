import clsx from "clsx";
const SocialMediaLinks = ({icon,alternative,color,link}) => {
  return (
    <div className={clsx("h-10 w-10 rounded-full bg-[#281C4D] grid place-content-center",color,"transition-all duration-300 hover:scale-110")}>
      <a href={link} target="_blank"><img src={icon}  alt={alternative} className="w-8 h-8 object-cover rounded-full" /></a>
    </div>
  )
}
export default SocialMediaLinks;


