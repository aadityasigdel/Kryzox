import clsx from "clsx";

const FeatureCard1 = ({
  icon: Icon,
  title,
  description,
  hoverbg = "hover:from-[#412076] hover:to-[#37669E]"
}) => {
  return (
    <div className={clsx("group h-[320px] w-[300px] bg-[#28194A] rounded-xl px-7 text-left flex flex-col gap-5 pt-8 duration-500 ease-in-out hover:scale-110","hover:bg-gradient-to-r",
          hoverbg
        )}>
      <div
        className= "h-[60px] w-[60px] rounded-md bg-[#791479] text-white grid place-content-center transition ease-in-out duration-500 group-hover:rotate-15 group-hover:scale-110">
        <Icon />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard1;
