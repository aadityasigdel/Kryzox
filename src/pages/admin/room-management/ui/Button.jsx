import React from "react";

const Button = ({ children,onclick }) => {
  return (
    <button className="btn-color h-[70px] w-[296px] border border-[#636363] text-center text-[24px] text-white font-semibold"onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
