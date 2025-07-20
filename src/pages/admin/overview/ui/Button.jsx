import React from "react";

const Button = ({ children, func }) => {
  return (
    <button
      className="h-[38.48px] px-3 text-white text-[13.13px] flex items-center gap-2"
      style={{
        backgroundImage: "linear-gradient(to right,#80FFDB,#B05BDB)",
        borderRadius:"8.855px"
      }}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
