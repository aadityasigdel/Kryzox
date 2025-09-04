const ProfileData = ({ name, email, appId, profile }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full">
        <img
          src={profile}
          className="h-full w-full object-cover rounded-full"
          alt={name}
        />
      </div>
      <div className="ml-4">
        <div className="text-[20px] font-semibold text-[#80FFDB]">{name}</div>
        <div className="text-sm text-[#B05BDB]">{email}</div>
        {appId && <div className="text-sm text-[#B05BDB]">App Id: {appId}</div>}
      </div>
    </div>
  );
};

export default ProfileData;
