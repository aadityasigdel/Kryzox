import clsx from "clsx";

const FeatureCard1 = ({
  icon: Icon,
  title,
  description,
  iconBgColor = "linear-gradient(135deg, #c84de5, #79a5d5)",
  iconHoverColor = "rgba(121, 165, 213, 0.3)",
  glowColor = "red",
}) => {
  return (
    <div
      className={clsx(
        "group relative parent-container z-10 group min-h-[320px] w-full border border-[#443860] md:max-w-[300px] bg-[#28194A] rounded-xl text-left flex flex-col gap-5 pt-8 duration-500 ease-in-out hover:scale-105 md:hover:scale-110 px-7"
      )}
      style={{
        backgroundColor: "rgba(43, 32, 85, 0.6)",
      }}
    >
      {/* 4 circle for ping effect */}
      <div className="absolute h-[10px] w-[10px] left-[3%] top-[5%] z-10 rounded-full transition-colors group-hover:bg-[#c84de5] animate-ping"></div>
      <div className="absolute h-[5px] w-[5px] right-[10%] top-[10%] z-10 rounded-full transition-colors group-hover:bg-[#79a5d5] animate-ping delay-[500ms]"style={{animationDelay:"500ms"}}></div>
      <div className="absolute h-[5px] w-[5px] left-[5%] bottom-[20%] z-10 rounded-full transition-colors group-hover:bg-[#c84de5] animate-ping  delay-[500ms]"style={{animationDelay:"500ms"}}></div>
      <div className="absolute h-[10px] w-[10px] right-[10%] bottom-[10%] z-10 rounded-full transition-colors group-hover:bg-[#79a5d5] animate-ping"></div>

      <div
        className="absolute inset-0 z-0 hidden rounded-xl transition-colors group-hover:block"
        style={{ background: glowColor }}
      ></div>
      <div
        className=" reflection relative z-10 h-[65px] w-[65px] rounded-xl  text-white  grid place-content-center transition ease-in-out duration-500  overflow-hidden group-hover:rotate-15 group-hover:scale-110"
        style={{
          background: iconBgColor,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Icon size={35} />
      </div>
      <h1 className="text-2xl font-bold z-10 text-white group-hover:text-[#c84de5] transition-colors duration-500">
        {title}
      </h1>
      <p className="text-gray-300 z-10 group-hover:text-gray-100 transition-colors duration-500">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard1;
