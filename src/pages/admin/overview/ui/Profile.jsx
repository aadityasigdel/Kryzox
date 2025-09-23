const Profile = ({ username, devices }) => {
  return (
    <section className="flex items-center justify-evenly mt-5">
      {/* Avatar */}
      <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
        <img
          src="/admin/overview/profile.jpg"
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      {/* Info */}
      <div className="h-[70px] w-[362px] bg-[#202020] rounded-md px-3">
        <h1 className="font-semibold text-[#80FFDB]">{username}</h1>

        {devices.map((d, i) => (
          <div
            key={i}
            className={`text-[#B05BDB] text-[12px] flex justify-between ${
              i > 0 ? "mt-2" : ""
            }`}
          >
            <div className="flex gap-2 items-center">
              <div className="h-[8px] w-[8px] rounded-full bg-[#85BB65]"></div>
              <p>{d.device}</p>
            </div>

            <div className="flex gap-2">
              <p>{d.location}</p>
              <p>{d.datetime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
