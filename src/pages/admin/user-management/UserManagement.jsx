import Button from "./ui/Button";
import Card from "../ui/shared/Card";
import HeadingSection from "../ui/shared/HeadingSection";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import "./style.css";
// static datas
const CardData = [
  {
    gradientColor: { color1: "#B05BDB", color2: "#202020" },
    heading: "Total Users",
    totalData: "12,323",
    icon: "/admin/user-management/profile1.png",
  },
  {
    gradientColor: { color1: "#800080", color2: "#202020" },
    heading: "Active Today",
    totalData: "8,342",
    icon: "/admin/user-management/profile2.png",
  },
  {
    gradientColor: { color1: "#BA55D3", color2: "#202020" },
    heading: "New Users",
    totalData: "+234",
    icon: "/admin/user-management/profile2.png",
  },
  {
    gradientColor: { color1: "#7400BB", color2: "#202020" },
    heading: "Banned Users",
    totalData: "21",
    icon: "/admin/user-management/profile2.png",
  },
];

const users = [
  {
    name: "Krisha Sharma",
    email: "krisha@example.com",
    appId: "325423154",
    status: "Active",
    games: "PUBG, Free Fire",
    levels: "36",
    lastSeen: "2 mins ago",
    profile: "/admin/user-management/profile.jpg",
  },
  {
    name: "Krisha Sharma",
    email: "krisha@example.com",
    status: "Active",
    games: "Free Fire",
    levels: "12",
    lastSeen: "3 mins ago",
    profile: "/admin/user-management/profile.jpg",
  },
];

const SearchComponent = () => {
  return (
    <div
      className="h-[110px] w-full my-10 flex justify-between items-center px-9"
      style={{
        borderRadius: "6.61px",
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      {/* Search bar  */}
      <div className="relative flex-1 min-w-[847px] h-[58px]">
        <img
          src="/admin/user-management/searchIcon.png"
          alt="Search"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none z-10"
        />
        <input
          type="text"
          placeholder="Search users..."
          className="absolute inset-0 w-full h-full text-white placeholder:text-white pl-16 pr-4"
          style={{
            borderRadius: "6.61px",
            background: "linear-gradient(to top, #000000, #202020)",
          }}
        />
      </div>

      {/* Filter button  */}
      <button className="flex items-center justify-center w-12 h-12 p-2 ml-4 hover:bg-gray-700 rounded-md transition-colors">
        <img
          src="/admin/user-management/filter.png"
          alt="Filter"
          className="w-full h-full object-contain"
        />
      </button>
    </div>
  );
};

// profile component
const ProfileData = ({ name, email, appId, profile }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full">
        <img
          src={profile}
          className="h-full w-full object-cover rounded-full"
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

// table component
const UserTable = () => {
  return (
    <div className="flex-1 overflow-y-auto rounded-tl-2xl rounded-tr-2xl">
      <table className="relative min-w-full bg-white">
        <thead className="table-heading h-[74px] w-full sticky top-0 bg-[#242424] text-[#fff] ">
          <tr className="">
            <th className="py-3 px-4 text-left">User</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Games</th>
            <th className="py-3 px-4 text-left">Levels</th>
            <th className="py-3 px-4 text-left">Last Seen</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody
          className=""
          style={{
            background: "linear-gradient(to bottom, #000000, #202020)",
          }}
        >
          {[...new Array(10)].map((ele) => {
            return users.map((user, index) => (
              <tr key={index}>
                <td className="py-4 px-4">
                  <ProfileData
                    name={user.name}
                    email={user.email}
                    appId={user.appId}
                    profile={user.profile}
                  />
                </td>
                <td className="py-4 px-4">
                  <Button> {user.status}</Button>
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {user.games}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  <Button>{user.levels}</Button>
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {user.lastSeen}
                </td>
                <td className="py-4 px-4 text-sm font-medium">
                  <button className="text-2xl text-white">
                    <PiDotsThreeVerticalBold />
                  </button>
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

const UserManagement = () => {
  return (
    <div
      className="h-screen overflow-y-auto w-full bg-[#000] pt-[65px] px-[72px] flex flex-col justify-center"
      style={{
        background: "linear-gradient(to bottom, #000000, #202020)",
      }}
    >
      {/* heading section */}
      <HeadingSection
        heading={"User Management"}
        subheading={"Manage your gaming community members"}
        btn1Content={"Add New User"}
        component={"user-management"}
      />
      {/* card section */}
      {/* card section */}
      <section className="flex gap-10 mt-10">
        {CardData.map((item, index) => {
          return (
            <Card
              key={index}
              gradientColor={item.gradientColor}
              heading={item.heading}
              totalData={item.totalData}
              totalPercentage={item.totalPercentage}
              icon={item.icon}
              component={"user-management"}
            />
          );
        })}
      </section>
      {/* searchbar section */}
      <SearchComponent />
      {/* table section */}
      <UserTable />
    </div>
  );
};

export default UserManagement;
