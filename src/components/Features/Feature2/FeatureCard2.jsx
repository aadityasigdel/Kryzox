const FeatureCard2 = ({ icon, title, description, bg, content1, price }) => {
  // bg is for card top section
  // content1 is for top section first div
  // price is for second div of top section of the card
  return (
    <div className="group relative min-h-[410px] w-full md:max-w-[300px] bg-[#28194A] rounded-3xl border-[.1px] border-[#552555] text-left flex flex-col gap-5  duration-500 ease-in-out hover:scale-105 md:hover:scale-110">

      <section
        className={`min-h-[200px] bg-gradient-to-r grid place-content-center relative border-[#552555] rounded-t-3xl font-semibold text-sm overflow-hidden`}
        style={{ background: bg }}
      >
        {/* horizontal and vertical scan line effect */}
        <div
          className="absolute inset-0 hidden group-hover:block transition-all duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200, 77, 229, 0.4) 50%, transparent 100%)",
            animation: "scanHorizontal 1.5s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute inset-0 hidden group-hover:block transition-all duration-500"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(121, 165, 213, 0.3) 50%, transparent 100%)",
            animation: "scanVertical 2s ease-in-out infinite",
            animationDelay: "0.5s",
          }}
        ></div>
        {/* horizontal and vertical scan line effect ended here */}
        <div className="absolute left-5 px-4 py-1.5 bg-black text-[#6e95c2] rounded-3xl top-5">
          {content1 || "test message"}
        </div>
        <div
          className="absolute right-5 px-4 py-1.5  backdrop-blur-lg  text-white rounded-3xl top-5 animate-pulse"
          style={{
            backgroundColor: "rgba(200, 77, 229, 0.9)",
            borderColor: "rgba(200, 77, 229, 0.5)",
            boxShadow: "0 0 20px rgba(200, 77, 229, 0.25)",
          }}
        >
          {price || "test message"}
        </div>
        <div className="h-[60px] w-[60px] rounded-md text-white grid place-content-center transition ease-in-out duration-500 shadow-lg group-hover:scale-120">
          <span className=" group-hover:scale-110 transition-transform duration-500 relative text-6xl md:text-7xl">
            {icon}
          </span>
        </div>
      </section>
      <section className="pl-7 pr-5">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-300 py-5 pb-7 text-sm">{description}</p>
        <button class="bg-gradient-to-r from-[#D974FB] to-[#A5BDFE] text-white font-semibold py-3 px-20 rounded-xl">
          Play & Earn
        </button>
      </section>
      {/* Animated corner highlights */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-l-transparent border-t-transparent group-hover:border-l-[#c84de5] group-hover:border-t-[#c84de5]  transition-all duration-500 rounded-tl-3xl group-hover:scale-110"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-r-transparent border-t-transparent group-hover:border-r-[#c84de5] group-hover:border-t-[#c84de5]  transition-all duration-500 rounded-tr-3xl group-hover:scale-110"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-l-transparent border-b-transparent group-hover:border-l-[#c84de5] group-hover:border-b-[#c84de5]  transition-all duration-500 rounded-bl-3xl group-hover:scale-110"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-r-transparent border-b-transparent group-hover:border-r-[#c84de5] group-hover:border-b-[#c84de5]  transition-all duration-500 rounded-br-3xl group-hover:scale-110"></div>
    </div>
  );
};

export default FeatureCard2;
