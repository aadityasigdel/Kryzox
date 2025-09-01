import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../hooks/getData.js";
import useUpdateData from "../../../hooks/updateData.js";
import WinnersList from "./ui/WinnersList";
import WinnerCard from "./ui/WinnerCard";

export default function RewardWinners() {
    const { fullmapId } = useParams();
    const { updateData, loading, error } = useUpdateData();
    const { getData, result = [], responseError } = useGetData();

    const [winnerData, setWinnerData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [successMessages, setSuccessMessages] = useState([]); // <-- added

    useEffect(() => {
        if (fullmapId) getData(`fullmap/${fullmapId}/winners`);
    }, [fullmapId, getData]);

    useEffect(() => {
        if (result.length) {
            setWinnerData((prev) => {
                const merged = { ...prev };
                result.forEach((w) => {
                    if (!merged[w.user.id]) {
                        merged[w.user.id] = {
                            position: w.position ?? null,
                            message: w.message ?? "",
                        };
                    }
                });
                return merged;
            });
        }
    }, [result]);

    if (!result.length)
        return <p className="text-white p-6">No winners found.</p>;

    const currentUser = result[currentIndex];

    const handlePositionSelect = (pos) =>
        setWinnerData((prev) => ({
            ...prev,
            [currentUser.user.id]: {
                ...prev[currentUser.user.id],
                position: Number(pos),
            },
        }));

    const handleMessageChange = (msg) =>
        setWinnerData((prev) => ({
            ...prev,
            [currentUser.user.id]: {
                ...prev[currentUser.user.id],
                message: msg,
            },
        }));

    // Submit all winners one by one and track success
    const handleSubmitAll = async () => {
        const newSuccessMessages = [];

        for (const [userId, data] of Object.entries(winnerData)) {
            const body = {
                position: data.position,
                message: data.message,
            };

            try {
                await updateData(`winners/${userId}`, body);
                newSuccessMessages.push(`User ${userId} rewarded successfully!`);
            } catch (err) {
                console.error("Failed to update user", userId, err);
            }
        }

        setSuccessMessages(newSuccessMessages);

        // Refetch updated data
        if (fullmapId) getData(`fullmap/${fullmapId}/winners`);
    };

    const handleNext = async () => {
        if (currentIndex < result.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            await handleSubmitAll();
        }
    };

    return (
        <section className="w-full min-h-screen px-[72px] pt-[65px] bg-gradient-to-b from-black to-gray-900">
            <h1 className="text-4xl font-bold bg-gradient-to-br from-teal-300 to-purple-500 bg-clip-text text-transparent mb-8">
                Reward Winners
            </h1>

            <div className="flex gap-10 bg-gray-600 rounded-2xl h-[500px] p-6">
                <WinnersList
                    winners={result}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />

                <WinnerCard
                    user={currentUser.user}
                    winnerData={winnerData[currentUser.user.id] || {}}
                    onSelectPosition={handlePositionSelect}
                    onChangeMessage={handleMessageChange}
                    onNext={handleNext}
                    isLast={currentIndex === result.length - 1}
                    loading={loading}
                    error={error || responseError}
                    successMessages={successMessages} 
                />
            </div>
        </section>
    );
}
