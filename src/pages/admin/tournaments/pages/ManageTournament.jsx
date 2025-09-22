import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useGetData from "../../../../hooks/getData";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const PendingPlayers = ({ postId, result }) => {
  return (
    <div>
      <div className="text-[18px] text-[#B05BDB] font-semibold mb-5">
        Pending Players for Tournament ID: {postId}
      </div>
      {data.length === 0 ? (
        <div>no pending player found</div>
      ) : (
        result.map((index, item) => {
          return (
            <TournamentRequestCard key={item?.postAppId || index} data={item} />
          );
        })
      )}
    </div>
  );
};

const ApprovedPlayers = ({ postId,result }) => {
  return (
    <div>
      <div className="text-[18px] text-[#B05BDB] font-semibold">
        Approved Players for Tournament ID: {postId}
      </div>
      {result.length === 0 ? (
        <div>no pending player found</div>
      ) : (
        data.map((index, item) => {
          return (
            <TournamentRequestCard key={item?.postAppId || index} data={item} />
          );
        })
      )}
    </div>
  );
};

const TournamentComplete = ({ postId }) => {
  return (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
      Tournament Completed Data for ID: {postId}
    </div>
  );
};

const RewardSelection = ({ postId }) => {
  return (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
      Reward Selection for Tournament ID: {postId}
    </div>
  );
};

const RewardPlayer = ({ postId }) => {
  return (
    <div className="text-[18px] text-[#B05BDB] font-semibold">
      Reward Players for Tournament ID: {postId}
    </div>
  );
};

const TabHeading = [
  { heading: "Pending Players", key: "pending" },
  { heading: "Approved Players", key: "approved" },
  { heading: "Rewards", key: "reward" },
  { heading: "Complete", key: "complete" },
];

const TournamentRequestCard = ({ data }) => {
  console.log({ dataFromTournamentRequestCard: data });
  const { user, post, status, requestAt } = data;
  console.log({
    user,
    post,
    status,
    requestAt,
  });

  // Format date from array
  const formatDate = (arr) => {
    if (!arr) return "";
    const [year, month, day, hour, minute] = arr;
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  return (
    <div className="bg-[#202020] text-[#B05BDB] rounded-2xl shadow-lg p-5 w-[320px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-[#80FFDB]">{post?.title}</h2>
        <span
          className={`px-2 py-1 text-xs rounded-md ${
            status === "PENDING"
              ? "bg-yellow-500 text-black"
              : status === "APPROVED"
              ? "bg-green-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Requester Info */}
      <div className="text-sm space-y-1 mb-3">
        <div className=" w-full flex justify-between">
          <span className="font-semibold">Requested By:</span>{" "}
          <span className="text-[#80FFDB]">{user?.name}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Email:</span>{" "}
          <span className="text-[#80FFDB]">{user?.email}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Mobile:</span>{" "}
          <span className="text-[#80FFDB]">{user?.mobileNo}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Balance:</span>{" "}
          <span className="text-[#80FFDB]">${user?.balance}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Requested At:</span>
          <span className="text-[#80FFDB]">{formatDate(requestAt)}</span>
        </div>
      </div>

      <hr className="border-gray-700 my-2" />

      {/* Tournament Info */}
      <div className="text-sm space-y-1">
        <div className="w-full flex justify-between">
          <span className="font-semibold">Game:</span>{" "}
          <span className="text-[#80FFDB]">{post?.game?.gameTitle}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Mode:</span>
          <span className="text-[#80FFDB]"> {post?.gameMode?.modeName}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Map:</span>{" "}
          <span className="text-[#80FFDB]">{post?.map?.mapTitle}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Entry Fee:</span>
          <span className="text-[#80FFDB]"> ${post?.entryFee}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Prize:</span>
          <span className="text-[#80FFDB]"> ${post?.winingPrices}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Start Time:</span>
          <span className="text-[#80FFDB]">{formatDate(post?.startTime)}</span>
        </div>
        <div className="w-full flex justify-between">
          <span className="font-semibold">Created By:</span>{" "}
          <span className="text-[#80FFDB]">{post?.user?.name}</span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between text-white gap-2 mt-6">
        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm">
          Reject
        </button>
        <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm">
          Approve
        </button>
      </div>
    </div>
  );
};

export default function TournamentManagePage() {
  const { tounamentId: postId } = useParams();
  const [activeTab, setActiveTab] = useState("pending");
  const [url, setUrl] = useState(
    `/turnmentApp/pending/${postId}?status=pending`
  );
  // this state is for storing the result
  const [data, setData] = useState([]);
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
    if (activeTab === "pending")
      setUrl(`/turnmentApp/pending/${postId}?status=PENDING`);
    if (activeTab === "approved")
      setUrl(`/turnmentApp/pending/${postId}?status=CREATOR_APPROVED`);
  }, [activeTab]);
  useEffect(() => {
    (async () => {
      await CommonDataFetchingFucntion(url);
    })();
  }, [url]);
  useEffect(() => {
    if (result) console.log({ result });
    if (responseError) console.log({ responseError });
  }, [result, responseError]);

  // common data fetching function
  const CommonDataFetchingFucntion = async (url) => {
    await getData(url);
  };
  return (
    <div className="w-full xl:px-[72px] py-[65px] text-white">
      {/* Tournament Info */}
      {/* <div className="mb-6 rounded-2xl p-4 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
        <h2 className="text-2xl font-bold">Tournament Details</h2>
        <p className="text-sm opacity-80">
          Manage players, approvals, and rewards
        </p>
      </div> */}
      <div className="mb-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold pb-5">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #80FFDB, #B05BDB)",
              WebkitBackgroundClip: "text",
            }}
          >
            Tournament Details
          </span>
        </h1>
        <section className="w-full flex flex-wrap justify-between">
          <p className="text-[18px] text-[#B05BDB] font-semibold">
            Manage players, approvals, and rewards
          </p>
        </section>
      </div>

      {/* Tab Heading like TestTabSection */}
      <div className="w-full h-[54px] py-1 px-1 flex items-center rounded-sm border-b bg-[#303030] border-[#3A3A3A] mb-6">
        {TabHeading.map((item) => (
          <button
            key={item.key}
            className={clsx(
              "h-full flex-1 text-gray-300",
              activeTab === item.key && "bg-[#121212] rounded-sm"
            )}
            onClick={() => setActiveTab(item.key)}
          >
            {item.heading}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {responseError ? (
        <div className="text-red-700 text-center">
          {responseError || "Something went wrong"}
        </div>
      ) : (
        <div className="mb-5 mt-10">
          {loading ? (
            <div className="flex justify-center">
              <ClipLoader color="white" />
            </div>
          ) : (
            (activeTab === "pending" && (
              <PendingPlayers postId={postId} result={result} status="pending"/>
            )) ||
            (activeTab === "approved" && (
              <ApprovedPlayers postId={postId} result={result} status="approved"/>
            )) ||
            (activeTab === "reward" && (
              <div>
                <RewardSelection postId={postId} />
                <RewardPlayer postId={postId} />
              </div>
            )) ||
            (activeTab === "complete" && <TournamentComplete postId={postId} />)
          )}
        </div>
      )}
    </div>
  );
}
