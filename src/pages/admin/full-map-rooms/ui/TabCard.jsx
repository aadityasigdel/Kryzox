import clsx from "clsx";

const TabCard = ({ TabCardData }) => {
  return (
    <div
      className="h-[268px] w-[292px] bg-[#202020] p-[22px]"
      style={{ borderRadius: "12px" }}
    >
      {TabCardData.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "flex text-white justify-between",
              index === 0 && "mb-5",
              index === TabCardData.length - 1 && "mt-5"
            )}
          >
            <div
              className={clsx(
                index === 0 ? "text-[18px] text-[#80FFDB]" : "text-[#B05BDB]",
                "font-semibold"
              )}
            >
              {index !== TabCardData.length - 1 && item.left}
              {index === TabCardData.length - 1 && (
                <img
                  src={item.left}
                  alt="setting_image"
                  className="w-full object-cover"
                />
              )}
            </div>
            <div
              className={clsx(
                "text-[#80FFDB]",
                index === 6 && "text-[#85BB65]"
              )}
            >
              {index === 0 ? (
                <button className="bg-[#B05BDB] text-[#80FFDB] text-sm rounded-4xl px-2">
                  {item.right}
                </button>
              ) : (
                item.right
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TabCard;
