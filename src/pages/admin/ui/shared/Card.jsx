import React from "react";
import clsx from "clsx";
const Card = ({
  gradientColor,
  heading,
  totalData,
  totalPercentage,
  icon,
  component,
}) => {
  return (
    <div
      className={clsx("h-[144px] w-[228px] flex items-center justify-between gap-4 px-[23px] ",component==="overview" && "pt-[26px]")}
      style={{
        borderRadius: "12px",
        backgroundImage: `linear-gradient(to right,${gradientColor.color1},${gradientColor.color2})`,
      }}
    >
      {/* left */}
      <div>
        <h1 className="text-[#B05BDB]">{heading}</h1>
        <p className="text-[26px] text-[#80FFDB] font-semibold">{totalData}</p>
        {/* footer */}
        {component === "overview" && (
          <div className="flex items-center">
            <img src="/admin/overview/cardanalytics.png" alt="analytic_icon" />
            <span className="text-[#85BB65]">{totalPercentage}</span>
          </div>
        )}
      </div>
      {/* right */}
      <div className="h-[50px] w-[50px] bg-cover">
        <img src={icon} alt={heading} className="object-cover" />
      </div>
    </div>
  );
};

export default Card;
