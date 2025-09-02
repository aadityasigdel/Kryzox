import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useGetData from "../../../../hooks/getData";
import ClipLoader from "react-spinners/ClipLoader";
const TabHeading = [
  { heading: "All Tournaments", key: "All-Tournaments" },
  { heading: "Upcoming", key: "Upcoming" },
  { heading: "Ongoing", key: "Ongoing" },
  { heading: "Completed", key: "Completed" },
];

const TableHeading = [
  { heading: "Tournament Name", key: "Tournament-Name" },
  { heading: "Game", key: "Game" },
  { heading: "Status", key: "Status" },
  { heading: "Participants", key: "Participants" },
  { heading: "Prize Pool", key: "Prize-Pool" },
  { heading: "Start Date & Time", key: "Start-Date-Time" },
  { heading: "End Date & Time", key: "End-Date-Time" },
  { heading: "Actions", key: "Actions" },
];
const TableContent = [
  {
    tournamentName: "Tournament 2",
    game: "Game B",
    status: "Ongoing",
    participants: 32,
    prizePool: "$2000",
    startDateTime: "2023-10-02 11:00 AM",
    endDateTime: "2023-10-02 03:00 PM",
  },
  {
    tournamentName: "Tournament 1",
    game: "Game A",
    status: "Upcoming",
    participants: 16,
    prizePool: "$1000",
    startDateTime: "2023-10-01 10:00 AM",
    endDateTime: "2023-10-01 02:00 PM",
  },
  {
    tournamentName: "Tournament 3",
    game: "Game C",
    status: "Completed",
    participants: 64,
    prizePool: "$3000",
    startDateTime: "2023-09-30 09:00 AM",
    endDateTime: "2023-09-30 01:00 PM",
  },
];
const DataTable = ({ setLoading }) => {
  const [tableContent, setTableContent] = useState([]);
  const {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();

  useEffect(() => {
    (async () => {
      await getData("/posts");
    })();
  }, []);
  // display the result
  useEffect(() => {
    if (result.content) {
      console.log({ result: result.content });
      setTableContent(result.content);
    }
    if (responseError) {
      console.log({ responseError });
    }
  }, [result, responseError]);

  const formatDate = (timestamp) => {
    // If it's seconds (10 digits), convert to milliseconds
    const date = new Date(Number(timestamp) * 1000);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      {loading ? (
        <div className="h-[100px] w-full flex items-center justify-center">
          <ClipLoader color="white" />
        </div>
      ) : (
        <table className="min-w-full bg-white">
          <thead className="table-heading h-[74px] w-full sticky top-0 bg-[#242424] text-[#fff] ">
            <tr className="text-center">
              {TableHeading.map((item, index) => (
                <th key={index} className="py-3 px-4 whitespace-nowrap">
                  {item.heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className=""
            style={{
              background: "linear-gradient(to bottom, #000000, #202020)",
            }}
          >
            {/* Table rows will go here */}
            {tableContent?.map((item, index) => (
              <tr
                key={index}
                className="border-b text-white text-[14px] border-gray-700 hover:bg-gray-800"
              >
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">
                  <button className="px-4 py-2 rounded-4xl bg-[#33CCFF33] text-[#33CCFF] whitespace-nowrap">
                    <p className="inline-block">{item.game.gameTitle}</p>
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button
                    className={clsx(
                      "px-4 py-2 rounded-4xl border flex items-center justify-center", // 👈 added flex + items-center
                      item.status === "ONGOING" &&
                        "bg-[#22C55E33] text-[#4ADE80] border-[#22C55E33]",
                      item.status === "PENDING" &&
                        "bg-[#3B82F633] border-[#3B82F633] text-[#60A5FA]",
                      item.status === "COMPLETED" &&
                        "bg-[#A855F733] border-[#A855F733] text-[#C084FC]"
                    )}
                  >
                    {item.status === "ONGOING" && (
                      <img
                        src="/admin/tournament/tab/medal.png"
                        alt={item.title}
                        className="w-4 h-4 mr-2"
                      />
                    )}
                    {item.status === "PENDING" && (
                      <img
                        src="/admin/tournament/tab/calendar.png"
                        alt={item.title}
                        className="w-4 h-4 mr-2"
                      />
                    )}
                    {item.status === "COMPLETED" && (
                      <img
                        src="/admin/tournament/tab/winner.png"
                        alt={item.title}
                        className="w-4 h-4 mr-2"
                      />
                    )}
                    {item.status}
                  </button>
                </td>
                <td className="py-3 px-4 flex">
                  <p>{item?.participants || 60}</p>
                  <p className="text-gray-400">/100</p>
                </td>
                <td className="py-3 px-4">{item?.prizePool || "$200"}</td>
                <td className="py-3 px-4">
                  {new Date(
                    item.startTime[0],
                    item.startTime[1] - 1,
                    item.startTime[2],
                    item.startTime[3],
                    item.startTime[4]
                  ).toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  {item?.endDateTime || "2023-09-30 01:00 PM"}
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <Link
                    to="#"
                    className="h-[30px] bg-[#121417] border border-[#21252B] rounded-[6px] flex gap-2 items-center justify-center px-4 py-4"
                  >
                    {/* view section */}
                    <img src="/admin/tournament/tab/eye.png" alt="view" />
                    <p className="text-[#33CCFF] text-[14px]">View</p>
                  </Link>
                  {/* setting or manage */}
                  <Link
                    to="#"
                    className=" h-[30px] bg-[#121417] border border-[#21252B] rounded-[6px] flex gap-2 items-center justify-center px-4 py-4"
                  >
                    {item.status === "Completed" ? (
                      <img
                        src="/admin/tournament/tab/winner.png"
                        alt="manage"
                      />
                    ) : (
                      <img
                        src="/admin/tournament/tab/setting.png"
                        alt="manage"
                      />
                    )}
                    <p
                      className={clsx(
                        "text-[14px]",
                        item.status === "Completed"
                          ? "text-[#C084FC]"
                          : "text-[#33CCFF]"
                      )}
                    >
                      {item.status === "Completed" ? "Results" : "Manage"}
                    </p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
const TabSection = () => {
  const [activeTab, setActiveTab] = useState("All-Tournaments");
  const changeTab = (key) => {
    setActiveTab(key);
  };
  return (
    <div
      className="w-full h-auto"
      style={{ background: "linear-gradient(to bottom, #000000, #202020)" }}
    >
      {/* tab heading */}
      <div className="w-full h-[54px] py-1 px-1 flex items-center rounded-sm border-b bg-[#303030] border-[#3A3A3A] mt-5">
        {TabHeading.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "h-full flex-1 text-gray-300",
              activeTab === item.key && "bg-[#121212] rounded-sm"
            )}
            onClick={() => changeTab(item.key)}
          >
            {item.heading}
          </button>
        ))}
      </div>
      {/* table section */}
      <DataTable />
    </div>
  );
};

export default TabSection;
