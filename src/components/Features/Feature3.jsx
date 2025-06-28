import Button1 from "../../ui/Button1";
import Button2 from "../../ui/Button2";
const Feature3 = () => {
  return (
    <div className="text-center py-20 bg-[#211F31]">
      <section className="max-w-[600px]  m-auto mb-5">
        <h1 className="text-[30px] font-semibold text-[#BA5CE2] pb-5  md:text-[40px] lg:text[60px] md:text-left">
          Ready to Dominate?
        </h1>
        <p className=" text-[18px] inline text-[#d9cbcb] md:text-[25px]">
          Join millions of gamers and experience the future of competitive
          gaming with KRYZOX.
        </p>
      </section>
      {/* button section */}
      <section className="flex flex-wrap gap-5 items-center justify-center  mt-10">
        <Button1>Join KRYZOX</Button1>
        <Button2>Download Free</Button2>
      </section>
      {/* detail section */}
      <section className=" max-w-4xl mx-auto grid grid-cols-2 text-[#c4bfbf] mt-10 leading-8 md:grid-cols-4 gap-y-5 text-center">
        <div className="">
          <p className=" text-[#9684DB] font-bold tex-2xl md:text-4xl ">50M+</p>
          <p>Active Players</p>
        </div>
        <div>
          <p className=" text-[#9684DB] font-bold tex-2xl md:text-4xl ">1000+</p>
          <p>Pro Teams</p>
        </div>
        <div>
          <p className=" text-[#9684DB] font-bold tex-2xl md:text-4xl ">24/7</p>
          <p>Support</p>
        </div>
        <div>
          <p className=" text-[#9684DB] font-bold tex-2xl md:text-4xl ">99.9%</p>
          <p>Uptime</p>
        </div>
      </section>
    </div>
  );
};

export default Feature3;
