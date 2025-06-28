import clsx from "clsx";
const FooterIcons = ({icon:Icon,color}) => {
  return (
    <div className={clsx("h-10 w-10 rounded-full bg-[#281C4D] grid place-content-center",color,"transition-all duration-300 hover:scale-110")}>
      <Icon className="w-5 h-5" />
    </div>
  )
}

export default FooterIcons
