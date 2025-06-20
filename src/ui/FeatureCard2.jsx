
const FeatureCard2 = ({
  icon: Icon,
  title,
  description,
  bg,
  content1,
  price,
}) => {
  // bg is for card top section
  // content1 is for top section first div
  // price is for second div of top section of the card
  return (
    <div className="group h-[430px] w-[300px] bg-[#28194A] rounded-md text-left flex flex-col gap-5  duration-500 ease-in-out hover:scale-110">
      <section  className={`h-[200px] bg-gradient-to-r ${bg} grid place-content-center relative text-sm `}>
<div className="absolute left-5 px-4 py-2.5 bg-black text-white rounded-3xl top-5">{content1 || "test message"}</div>
<div className="absolute right-5 px-4 py-2.5 bg-black text-white rounded-3xl top-5">{price || "test message"}</div>
        <div className="h-[60px] w-[60px] rounded-md bg-[#791479] text-white grid place-content-center transition ease-in-out duration-500 group-hover:scale-120">
          <Icon />
        </div>
      </section>
      <section className="pl-7">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-300 py-5">{description}</p>
        <button class="bg-gradient-to-r from-[#D974FB] to-[#A5BDFE] text-white font-semibold py-3 px-20 rounded-xl">
          Play & Earn
        </button>
      </section>
    </div>
  );
};

export default FeatureCard2;
