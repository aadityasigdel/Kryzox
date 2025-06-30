import clsx from "clsx";

const FeatureCard1 = ({
  icon: Icon,
  title,
  description,
  iconBgColor = "linear-gradient(135deg, #c84de5, #79a5d5)",
  iconHoverColor = "rgba(121, 165, 213, 0.3)",
  hoverbg = "hover:from-[#412076] hover:to-[#37669E]",
}) => {
  return (
    <div
      className={clsx(
        "parent-container group min-h-[320px] w-full border border-[#443860] md:max-w-[300px] bg-[#28194A] rounded-xl text-left flex flex-col gap-5 pt-8 duration-500 ease-in-out hover:scale-110 px-5",
        "hover:bg-gradient-to-r",
        hoverbg
      )}
      style={{
        backgroundColor: "rgba(43, 32, 85, 0.6)",
      }}
    >
      <div className="relative reflection h-[65px] w-[65px] rounded-xl  text-white  grid place-content-center transition ease-in-out duration-500  overflow-hidden group-hover:rotate-15 group-hover:scale-110"
      style={{
        background: iconBgColor,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
      >
        <Icon size={35} />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard1;
