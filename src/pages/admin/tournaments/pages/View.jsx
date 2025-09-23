const ViewTournament = ({ data, turnmentStatus }) => {
  console.log({ dataFromTournamentRequestCard: data });
  const { user, postAppId, post, status, requestAt } = data;
  console.log({
    user,
    post,
    status,
    requestAt,
  });
  const {
    updateData,
    result: updateResult,
    responseError: updateError,
    setResponseError: updateSetUpdateErrror,
    loading: updateLoading,
    statusCode: updateStatusCode,
  } = useUpdateData();

  useEffect(() => {
    if (updateError) toast.error(updateError || "something went wrong");
  }, [updateError]);
  // Format date from array
  const formatDate = (arr) => {
    if (!arr) return "";
    const [year, month, day, hour, minute] = arr;
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  // approved the user
  const approveUser = async () => {
    await updateData(`/turnmentApp/approve/${postAppId}`);
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
      {/* {turnmentStatus === "pending" && (
        <div className="flex justify-between text-white gap-2 mt-6">
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm">
            Reject
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm"
            disabled={updateLoading}
            onClick={approveUser}
          >
            {loading ? <ClipLoader size={15} /> : "Approve"}
          </button>
        </div>
      )} */}
    </div>
  );
};
export default ViewTournament;