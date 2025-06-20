import "./herosection.css";
const HeroSection = () => {
  return (
    <div className="h-[auto] w-full bg-slate-900 text-white grid place-content-center pb-30 pt-20">
      <section className="h-auto w-[800px] text-center">
        <h1 className="title-container top-heading font-bold text-[80px] text-[#C44DE3] ">
          KRYZOX
        </h1>
        <div className="inline text-[18px] font-semibold">
          <span className="text-3xl text-[#C44DE3] ">EARN REAL MONEY </span>
          <span>through </span>
          <span className="text-2xl text-[#79A5D5]">skill-based gaming. </span>
          <span>Master your skills and </span>
          <span className=" text-[#C44DE3] ">get rewarded </span>
          <span>for your performance.</span>
        </div>

        {/* <div className="h-15 w-[400px]"></div> */}
      </section>
      {/* animated div section */}
      <div className="h-15 w-[800px] bg-[#482F6D] rounded-2xl border border-[#883EA8] flex items-center justify-center gap-2 font-bold mt-5">
        <span className="">💰</span>{" "}
        <span>Turn Your Gaming Skills Into</span>
        <span className="real-earning text-[#79A5D5]">REAL EARNINGS</span>
        <span className="">💰</span>
      </div>
      {/* buttons */}
      <section className="flex gap-5 text-[18px] pt-8 justify-center items-center">
        <button className="px-10 py-5 bg-[#B462E1] rounded-2xl text-white font-semibold">
          Download For Android
        </button>
        <button className="px-10 py-5 border-2 border-[#79A5D5] rounded-2xl text-[#79A5D5] font-semibold">
          Download For ios
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
