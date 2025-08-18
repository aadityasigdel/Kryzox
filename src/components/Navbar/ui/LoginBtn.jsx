import clsx from "clsx";
const AuthBtn = ({ children, className }) => {
  return (
    <button
      className={clsx(
        "px-7 py-2 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]",
        className
      )}
      style={{
        backgroundImage: "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
      }}
    >
      {children}
    </button>
  );
};
export default AuthBtn;