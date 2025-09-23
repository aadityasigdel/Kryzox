import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useGetData from "../../../../hooks/getData";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { setTournaments } from "../../../../store/slices/tournament.slice";
const TabHeading = [
  { heading: "All Tournaments", key: "All-Tournaments" },
  { heading: "Upcoming", key: "PENDING" },
  { heading: "Ongoing", key: "ONGOING" },
  { heading: "Completed", key: "COMPLETED" },
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
// const TableContent = [
//   {
//     tournamentName: "Tournament 2",
//     game: "Game B",
//     status: "Ongoing",
//     participants: 32,
//     prizePool: "$2000",
//     startDateTime: "2023-10-02 11:00 AM",
//     endDateTime: "2023-10-02 03:00 PM",
//   },
//   {
//     tournamentName: "Tournament 1",
//     game: "Game A",
//     status: "Upcoming",
//     participants: 16,
//     prizePool: "$1000",
//     startDateTime: "2023-10-01 10:00 AM",
//     endDateTime: "2023-10-01 02:00 PM",
//   },
//   {
//     tournamentName: "Tournament 3",
//     game: "Game C",
//     status: "Completed",
//     participants: 64,
//     prizePool: "$3000",
//     startDateTime: "2023-09-30 09:00 AM",
//     endDateTime: "2023-09-30 01:00 PM",
//   },
// ];
const DataTable = ({loading}) => {
  const { tournaments, tournamentLoading } = useSelector(
    (state) => state.tournament
  );
  return (
    <div className="w-full overflow-x-auto">
      {loading || tournamentLoading ? (
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
            {tournaments?.map((item, index) => (
              <tr
                key={index}
                className="border-b text-white text-[14px] border-gray-700 hover:bg-gray-800"
              >
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">
                  <button className="px-4 py-2 rounded-4xl bg-[#33CCFF33] text-[#33CCFF] whitespace-nowrap">
                    <p className="inline-block">{item.game?.gameTitle}</p>
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
                  <p>{item?.totalParticipant}</p>
                  <p className="text-gray-400">/100</p>
                </td>
                <td className="py-3 px-4">{item?.winingPrices}</td>
                <td className="py-3 px-4">
                  {Array.isArray(item?.startTime) && item.startTime.length >= 5
                    ? new Date(
                        item.startTime[0],
                        item.startTime[1] - 1,
                        item.startTime[2],
                        item.startTime[3],
                        item.startTime[4]
                      ).toLocaleString()
                    : "N/A"}
                </td>

                <td className="py-3 px-4">
                  {item?.endDateTime || "2023-09-30 01:00 PM"}
                </td>
                <td className="py-3 px-4 flex gap-2">
                  <Link
                    to={`/admin/tournaments/view/${item.postId}`}
                    className="h-[30px] bg-[#121417] border border-[#21252B] rounded-[6px] flex gap-2 items-center justify-center px-4 py-4"
                  >
                    {/* view section */}
                    <img src="/admin/tournament/tab/eye.png" alt="view" />
                    <p className="text-[#33CCFF] text-[14px]">View</p>
                  </Link>
                  {/* setting or manage */}
                  <Link
                    to={`/admin/tournaments/manage/${item.postId}`}
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
const TestTabSection = () => {
  const [activeTab, setActiveTab] = useState("All-Tournaments");
  const [tableContent, setTableContent] = useState([]);
  const dispatch = useDispatch();
  const { tournaments, filterTournaments } = useSelector(
    (state) => state.tournament
  );
  // this one is for fetching all tournament data
  const {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();
  const { tournamentLoading } = useSelector((state) => state.tournament);
  // display the result

  useEffect(() => {
    if (responseError) {
      console.log({ responseError });
      dispatch(setTournaments([]));
      return; // stop here, don’t process result
    }

    if (result) {
      console.log({ result: result?.content || result });
      dispatch(setTournaments(result?.content || result));
    }
  }, [result, responseError]);

  // fetch tournament data according to their status
  const fetchStatusData = async (status) => {
    if (status === "All-Tournaments") {
      await getData("/posts");
    } else {
      await getData(`/posts/status/${status}`);
    }
  };
  useEffect(() => {
    fetchStatusData(activeTab);
  }, [activeTab]);
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
      {responseError ? (
        <div className="w-full h-[300px] flex items-center justify-center text-red-700">
          Something went wrong
        </div>
      ) : (!loading || !tournamentLoading) && tournaments.length === 0 ? (
        <div className="w-full h-[300px] flex items-center justify-center text-red-700">
          No data found
        </div>
      ) : (
        <DataTable loading={loading}/>
      )}
    </div>
  );
};

export default TestTabSection;
