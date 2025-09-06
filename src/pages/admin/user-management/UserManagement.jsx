import { useEffect, useState } from "react";
import Card from "../ui/shared/Card";
import HeadingSection from "../ui/shared/HeadingSection";
import UserTable from "./ui/UserData.jsx";
import useGetData from "../../../hooks/getData.js";
import AddUsers from "./ui/AddUsers.jsx";
import "./style.css";

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

const UserManagement = () => {
    const { getData, result: usersData, loading, responseError } = useGetData();
    const [openAddUser, setOpenAddUser] = useState(false);

    useEffect(() => {
        getData("/users/");
    }, []);

    return (
        <div
            className="w-full bg-[#000] pt-[65px] px-[72px] flex flex-col justify-center"
            style={{
                background: "linear-gradient(to bottom, #000000, #202020)",
            }}
        >
            <HeadingSection
                heading={"User Management"}
                subheading={"Manage your gaming community members"}
                btn1Content={"Add New User"}
                component={"user-management"}
                onBtn1Click={() => setOpenAddUser(true)}
            />
            <section className="flex gap-10 mt-10">
                {loading
                    ? CardData.map((_, index) => (
                          <div
                              key={index}
                              className="w-52 h-32 rounded-xl bg-[#1c1c1c] animate-pulse"
                          >
                              <div className="flex flex-col justify-between p-4 h-full">
                                  <div className="h-6 bg-[#2a2a2a] rounded w-3/4 mb-2"></div>
                                  <div className="h-4 bg-[#2a2a2a] rounded w-1/2"></div>
                              </div>
                          </div>
                      ))
                    : CardData.map((item, index) => (
                          <Card
                              key={index}
                              gradientColor={item.gradientColor}
                              heading={item.heading}
                              totalData={item.totalData}
                              icon={item.icon}
                              component="user-management"
                          />
                      ))}
            </section>

            {!loading && !responseError && <UserTable users={usersData} />}

            <AddUsers open={openAddUser} setOpen={setOpenAddUser} />
        </div>
    );
};

export default UserManagement;
