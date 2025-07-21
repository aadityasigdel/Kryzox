
import { Anvil } from "lucide-react";
import { Plus } from "lucide-react";
import Card from "../ui/shared/Card";
import AnalyticsChart from "./ui/Chart";
import RecentActivities from "./ui/RecentActivities";
import "./style.css";
import HeadingSection from "../ui/shared/HeadingSection";

// static datas
 const CardData = [
    {
      gradientColor: { color1: "#B05BDB", color2: "#202020" },
      heading: "Active Users",
      totalData: "12,000",
      totalPercentage: "+ 10%",
      icon: "/admin/overview/icon1.png",
    },
    {
      gradientColor: { color1: "#800080", color2: "#202020" },
      heading: "Active Rooms",
      totalData: "1234",
      totalPercentage: "+ 8%",
      icon: "/admin/overview/icon2.png",
    },
    {
      gradientColor: { color1: "#BA55D3", color2: "#202020" },
      heading: "Tournaments",
      totalData: "89",
      totalPercentage: "+ 16%",
      icon: "/admin/overview/icon3.png",
    },
    {
      gradientColor: { color1: "#7400BB", color2: "#202020" },
      heading: "Revenue",
      totalData: "$24,344",
      totalPercentage: "+ 24%",
      icon: "/admin/overview/icon4.png",
    },
  ];
 
  const profileDetail = [
    {
      username: "Krisha Sharma",
      data1: {
        device1: "Windows PC",
        location1: "Jhapa District, Nepal",
        datetime1: "23 June at 04:34",
      },
      data2: {
        device2: "Acer Nitro 5",
        location2: "Jhapa District, Nepal",
        datetime2: "23 June at 04:34",
      },
    },
  ]; 
  
// profile section design
const Profile = () => {
  return (
    <section className="flex items-center justify-evenly mt-5">
      {/* left section */}
      <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
        <img
          src="/admin/overview/profile.jpg"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      {/* right section */}
      <div className=" h-[70px]  w-[362px] bg-[#202020] rounded-md px-3">
        <div>
          <h1 className="font-semibold text-[#80FFDB]">
            {profileDetail[0].username}
          </h1>
        </div>
        {/* data1 */}
        <div className="text-[#B05BDB] text-[12px] flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] rounded full bg-[#85BB65]"></div>
            <div>
              <p>{profileDetail[0].data1.device1}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <p>{profileDetail[0].data1.location1}</p>
            </div>
            <div>
              <p>{profileDetail[0].data1.datetime1}</p>
            </div>
          </div>
        </div>
        {/* data2 */}
        <div className="text-[#B05BDB] text-[12px] flex justify-between mt-2">
          <div className="flex gap-2 items-center">
            <div className="h-[8px] w-[8px] rounded full bg-[#85BB65]"></div>
            <div>
              <p>{profileDetail[0].data2.device2}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <p>{profileDetail[0].data2.location2}</p>
            </div>
            <div>
              <p>{profileDetail[0].data2.datetime2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Overview = () => {
  return (
    <div className="min-h-[1024px] w-full min-w-[1148px] px-[72px] pt-[65px] bg-[#000] grid place-content-center">
      <HeadingSection heading={"Dashboard Overview"} subheading={"  Welcome Back! Here’s what’s happening in your gaming hub"} btn1Content={"Create Room"} btn2Content={"New Tournament"} icon1={Plus} icon2={Anvil} component={"overview"}/>
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
              component={"overview"}
            />
          );
        })}
      </section>
      {/* chart or analytical section */}
      <section className="w-full mt-10 flex justify-between">
        <AnalyticsChart />
        <RecentActivities />
      </section>
      {/* profile section */}
      <section
        className=" min-h-[236px] w-full border my-10 flex text-center profile relative"
        style={{
          borderRadius: "12px",
          backgroundImage: "linear-gradient(to bottom,#000000,#202020)",
        }}
      >
        <div className="flex-1 h-full pt-5">
          <h1 className="admin-heading relative text-[28px] font-semibold text-[#80FFDB]">
            Admin
          </h1>
          <div>
            <Profile />
          </div>
          <div>
            <Profile />
          </div>
        </div>
        <div className="flex-1 border pt-5">
          <h1 className="admin-heading relative text-[28px] font-semibold text-[#80FFDB]">
            KX-Assist
          </h1>
          <div>
            <Profile />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
