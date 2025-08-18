const LogoutBtn = ({ children,func }) => {
  return <button className="px-7 py-2  bg-red-600 text-white rounded-2xl"onClick={func}>{children}</button>;
};
export  default LogoutBtn;