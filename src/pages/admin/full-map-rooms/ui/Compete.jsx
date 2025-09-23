import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateData from "../../../../hooks/updateData.js";
import Button from "../../ui/shared/Button";

const Compete = () => {
    const nav = useNavigate();
    const { fullmapId } = useParams();
    const { updateData, loading, responseError, statusCode } = useUpdateData();
    const [infoMessage, setInfoMessage] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);



    const handleComplete = () => {
        setShowConfirm(true);
    };

    const confirmAction = async () => {
        setShowConfirm(false);
        await updateData(`/fullmap/${fullmapId}/complete`);
    };

    const cancelAction = () => {
        setShowConfirm(false);
    };

    useEffect(() => {
        if (statusCode === 200) {
            setInfoMessage(
                "Tournament completed successfully! You cannot make changes or add more players."
            );
            setTimeout(() => {
                nav("/admin/full-map-rooms");
            }, 1500);
        }
    }, [statusCode, nav]);

    return (
        <div className="flex flex-col gap-4 items-center font-extrabold text-2xl relative">
            <Button func={handleComplete}>
                {loading ? "Completing..." : "Complete"}
            </Button>

            {responseError && (
                <p className="text-red-500 text-sm">{responseError}</p>
            )}

            {infoMessage && (
                <p className="text-green-500 text-sm text-center">
                    {infoMessage}
                </p>
            )}

            {showConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-5 w-80 max-w-[90%] text-center shadow-lg">
                        <h2 className="text-lg font-semibold text-purple-400 mb-2">
                            Confirm Completion
                        </h2>
                        <p className="text-gray-300 mb-4 text-sm">
                            Are you sure you want to complete this tournament?{" "}
                            <br />
                            You cannot make changes or add more players after
                            completing.
                        </p>
                        <div className="flex justify-between gap-3">
                            <button
                                onClick={cancelAction}
                                className="flex-1 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmAction}
                                className="flex-1 px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white font-medium transition"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Compete;
