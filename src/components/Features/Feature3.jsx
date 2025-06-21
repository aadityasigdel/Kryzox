import Button1 from "../../ui/Button1";
import Button2 from "../../ui/Button2";
const Feature3 = () => {
  return (
    <div className="text-center py-20 bg-[#211F31]">
      <section className="max-w-[600px]  m-auto mb-5">
        <h1 className="text-left text-[60px] font-semibold text-[#BA5CE2] pb-5">
          Ready to Dominate?
        </h1>
        <p className="text-[25px] inline text-[#d9cbcb]">
          Join millions of gamers and experience the future of competitive
          gaming with KRYZOX.
        </p>
      </section>
      {/* button section */}
      <section className="flex gap-5 items-center justify-center  mt-10">
        <Button1>Join KRYZOX</Button1>
        <Button2>Download Free</Button2>
      </section>
      {/* detail section */}
      <section className="flex gap-30 items-center justify-center text-[#c4bfbf] mt-10">
        <div className="text-left">
          <p className="text-[35px] text-[#9684DB] font-bold">50M+</p>
          <p>Active Players</p>
        </div>
        <div>
          <p className="text-[35px] text-[#9684DB] font-bold">1000+</p>
          <p>Pro Teams</p>
        </div>
        <div>
          <p className="text-[35px] text-[#9684DB] font-bold">24/7</p>
          <p>Support</p>
        </div>
        <div>
          <p className="text-[35px] text-[#9684DB] font-bold">99.9%</p>
          <p>Uptime</p>
        </div>
      </section>
    </div>
  );
};

export default Feature3;
