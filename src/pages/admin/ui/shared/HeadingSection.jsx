import React from "react";
import Button from "../../overview/ui/Button";

const HeadingSection = ({
  heading,
  subheading,
  btn1Content,
  btn2Content,
  icon1: Icon1,
  icon2: Icon2,
  component,
}) => {
  return (
    <div className="h-auto w-full">
      {/* heading */}
      <h1 className="text-[36px] font-semibold text-[#80FFDB]">{heading}</h1>
      <section className="w-full flex justify-between">
        <p className="text-[18px] text-[#B05BDB] font-semibold">{subheading}</p>
        {/* buttons section */}
        <div className="flex gap-5">
          <Button>
            {component === "overview" && (
              <span>
                <Icon1 size={18} />
              </span>
            )}
            <span>{btn1Content}</span>
          </Button>
          {component === "overview" &&
            btn2Content !== null &&
            Icon2 !== null && (
              <Button>
                <span>
                  <Icon2 size={18} />
                </span>
                <span>{btn2Content}</span>
              </Button>
            )}
        </div>
      </section>
    </div>
  );
};

export default HeadingSection;
