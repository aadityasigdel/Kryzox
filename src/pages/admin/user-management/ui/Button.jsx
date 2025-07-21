
const Button = ({ children, func }) => {
  return (
    <button
      className="h-[30px] px-5 text-white text-[13.13px] flex items-center gap-2 rounded-2xl"
      style={{
        backgroundImage: "linear-gradient(to right,#80FFDB,#B05BDB)"
      }}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
