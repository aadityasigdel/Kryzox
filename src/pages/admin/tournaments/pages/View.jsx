// import useUpdateData from "../../../../hooks/updateData";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData";
import { ClipLoader } from "react-spinners";

// const ViewTournament = ({ data, turnmentStatus }) => {
//   console.log({ dataFromTournamentRequestCard: data });
//   const { user, postAppId, post, status, requestAt } = data;
//   console.log({
//     user,
//     post,
//     status,
//     requestAt,
//   });
//   const {
//     updateData,
//     result: updateResult,
//     responseError: updateError,
//     setResponseError: updateSetUpdateErrror,
//     loading: updateLoading,
//     statusCode: updateStatusCode,
//   } = useUpdateData();

//   useEffect(() => {
//     if (updateError) toast.error(updateError || "something went wrong");
//   }, [updateError]);
//   // Format date from array
//   const formatDate = (arr) => {
//     if (!arr) return "";
//     const [year, month, day, hour, minute] = arr;
//     return `${year}-${month}-${day} ${hour}:${minute}`;
//   };

//   // approved the user
//   const approveUser = async () => {
//     await updateData(`/turnmentApp/approve/${postAppId}`);
//   };

//   return (
//     <div className="bg-[#202020] text-[#B05BDB] rounded-2xl shadow-lg p-5 w-[320px]">
//       {/* Header */}
//       <div className="mb-10 relative">
//         <h1 className="text-4xl md:text-5xl font-bold pb-5">
//           <span
//             className="text-transparent bg-clip-text"
//             style={{
//               background: "linear-gradient(45deg, #80FFDB, #B05BDB)",
//               WebkitBackgroundClip: "text",
//             }}
//           >
//             Tournament Details
//           </span>
//         </h1>
//         <section className="w-full flex flex-wrap justify-between">
//           <p className="text-[18px] text-[#B05BDB] font-semibold">
//             view tournament in details
//           </p>
//         </section>
//       </div>
//       <div className="flex justify-between items-center mb-5">
//         <h2 className="text-lg font-bold text-[#80FFDB]">{post?.title}</h2>
//         <span
//           className={`px-2 py-1 text-xs rounded-md ${
//             status === "PENDING"
//               ? "bg-yellow-500 text-black"
//               : status === "APPROVED"
//               ? "bg-green-500 text-black"
//               : "bg-red-500 text-white"
//           }`}
//         >
//           {status}
//         </span>
//       </div>

//       {/* Requester Info */}
//       <div className="text-sm space-y-1 mb-3">
//         <div className=" w-full flex justify-between">
//           <span className="font-semibold">Requested By:</span>{" "}
//           <span className="text-[#80FFDB]">{user?.name}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Email:</span>{" "}
//           <span className="text-[#80FFDB]">{user?.email}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Mobile:</span>{" "}
//           <span className="text-[#80FFDB]">{user?.mobileNo}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Balance:</span>{" "}
//           <span className="text-[#80FFDB]">${user?.balance}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Requested At:</span>
//           <span className="text-[#80FFDB]">{formatDate(requestAt)}</span>
//         </div>
//       </div>

//       <hr className="border-gray-700 my-2" />

//       {/* Tournament Info */}
//       <div className="text-sm space-y-1">
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Game:</span>{" "}
//           <span className="text-[#80FFDB]">{post?.game?.gameTitle}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Mode:</span>
//           <span className="text-[#80FFDB]"> {post?.gameMode?.modeName}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Map:</span>{" "}
//           <span className="text-[#80FFDB]">{post?.map?.mapTitle}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Entry Fee:</span>
//           <span className="text-[#80FFDB]"> ${post?.entryFee}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Prize:</span>
//           <span className="text-[#80FFDB]"> ${post?.winingPrices}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Start Time:</span>
//           <span className="text-[#80FFDB]">{formatDate(post?.startTime)}</span>
//         </div>
//         <div className="w-full flex justify-between">
//           <span className="font-semibold">Created By:</span>{" "}
//           <span className="text-[#80FFDB]">{post?.user?.name}</span>
//         </div>
//       </div>

//       {/* Footer Actions */}
//       {/* {turnmentStatus === "pending" && (
//         <div className="flex justify-between text-white gap-2 mt-6">
//           <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm">
//             Reject
//           </button>
//           <button
//             className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm"
//             disabled={updateLoading}
//             onClick={approveUser}
//           >
//             {loading ? <ClipLoader size={15} /> : "Approve"}
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// };
// export default ViewTournament;

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-[#1e1e1e] px-4 py-4 rounded-lg">
    <span className="text-gray-400 font-medium">{label}</span>
    <span className="text-[#80FFDB] font-semibold">{value || "—"}</span>
  </div>
);

const TournamentDetailCard = ({ data }) => {
  const {
    title,
    content,
    status,
    addedDate,
    startTime,
    entryFee,
    winingPrices,
    perKill,
    totalParticipant,
    game,
    gameMode,
    map,
    gameID,
    gamePw,
    user,
  } = data;
console.log({tournamentDetailPageCardData:data})
  const formatDate = (arr) => {
    if (!arr) return "";
    const [year, month, day, hour, minute] = arr;
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  return (
    <div className=" mx-auto space-y-1">
      {/* Header Card */}
      <div className="bg-[#121212] rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-[#80FFDB]">{title}</h2>
          <span
            className={`px-3 py-1 text-sm rounded-md font-semibold ${
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
        <p className="text-gray-300">{content}</p>
      </div>

      {/* Tournament Info */}
      <div className="bg-[#121212] rounded-2xl shadow-lg space-y-4 p-6">
        <h3 className="text-lg font-semibold text-[#B05BDB]">
          Tournament Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-10">
          <InfoRow label="Added Date" value={formatDate(addedDate)} />
          <InfoRow label="Start Time" value={formatDate(startTime)} />
          <InfoRow label="Entry Fee" value={`$${entryFee}`} />
          <InfoRow label="Prize Pool" value={`$${winingPrices}`} />
          {perKill && <InfoRow label="Per Kill" value={`$${perKill}`} />}
          <InfoRow label="Participants" value={totalParticipant} />
        </div>
      </div>

      {/* Game Details */}
      <div className="bg-[#121212] rounded-2xl shadow-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#B05BDB]">Game Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-10">
          <InfoRow label="Game" value={game?.gameTitle} />
          <InfoRow label="Description" value={game?.gameDescription} />
          <InfoRow label="Mode" value={gameMode?.modeName} />
          <InfoRow label="Map" value={map?.mapTitle} />
          <InfoRow label="Game ID" value={gameID} />
          <InfoRow label="Game Password" value={gamePw} />
        </div>
      </div>

      {/* Organizer Info */}
      <div className="bg-[#121212] rounded-2xl shadow-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-[#B05BDB]">Organizer Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-10">
          <InfoRow label="Name" value={user?.name} />
          <InfoRow label="Email" value={user?.email} />
          <InfoRow label="Mobile" value={user?.mobileNo} />
          <InfoRow label="Balance" value={`$${user?.balance}`} />
          <InfoRow label="Remark" value={user?.uremark} />
          <InfoRow
            label="Roles"
            value={user?.roles?.map((r) => r.name).join(", ")}
          />
        </div>
      </div>
    </div>
  );
};

const ViewTournament = () => {
  const { tournamentId } = useParams();
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
      await getData(`/posts/${tournamentId}`);
    })();
  }, []);
  useEffect(()=>{
if(result) console.log({tournamentDetail:result})
  },[result])
  return (
    <div className="w-full xl:px-[72px] pt-[65px] ">
      {/* Header */}
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
            Everything You Need to Know About This Tournament
          </p>
        </section>
      </div>
      {/* tournament detail section */}
      {responseError && !loading && <div>{responseError}</div>}
      {loading && (
        <div className="flex justify-center">
          <ClipLoader color="white" />
        </div>
      )}
      {!loading && result && (
        <div>
          <TournamentDetailCard data={result} />
        </div>
      )}
    </div>
  );
};
export default ViewTournament;
