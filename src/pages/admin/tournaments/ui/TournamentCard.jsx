import clsx from "clsx";

const TournamentCard = ({
  gradientColor,
  heading,
  totalData,
  icon,
  bottomContent,
}) => {
  return (
    <div
      className="h-[144px] w-[228px] bg-[blueviolet] pl-[27px] py-4"
      style={{
        borderRadius: "12px",
        backgroundImage: `linear-gradient(to right,${gradientColor.color1},${gradientColor.color2})`,
      }}
    >
      {/* heading */}
      <h1 className="font-medium text-[#B05BDB]">
        {heading}
      </h1>
      {/*  icon section */}
      <div className="w-full pr-[27px] flex items-center justify-between">
        <h3 className="text-[26px] font-semibold text-[#80FFDB]">{totalData}</h3>
        <span>
          <img src={icon} alt={heading}/>
        </span>
      </div>
      {/* bottom content section */}
      <p className="text-[12px] text-[#C0C0C0] font-medium">{bottomContent}</p>
    </div>
  );
};
export default TournamentCard;
