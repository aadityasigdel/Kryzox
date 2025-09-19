import { useEffect, useState } from "react";
import useAxios from "../../../../lib/axios.config";

const WinnerImg = ({ user, creator_SS, player_SS }) => {
    const axiosInstance = useAxios();

    const ImageLoader = ({ imagename, alt }) => {
        const [imgUrl, setImgUrl] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            if (!imagename) return;
            let isMounted = true;

            const fetchImage = async () => {
                setLoading(true);
                try {
                    const res = await axiosInstance.get(
                        `/rooms/image/${imagename}`,
                        {
                            responseType: "blob",
                        }
                    );
                    if (isMounted) {
                        const url = URL.createObjectURL(res.data);
                        setImgUrl(url);
                    }
                } catch (err) {
                    if (isMounted) setError("Failed to load image");
                } finally {
                    if (isMounted) setLoading(false);
                }
            };

            fetchImage();

            return () => {
                isMounted = false;
                if (imgUrl) URL.revokeObjectURL(imgUrl);
            };
        }, [imagename]);

        console.log("creator_SS:", creator_SS, "player_SS:", player_SS);

        if (loading)
            return (
                <div className="mt-3 h-48 w-full bg-gray-700 animate-pulse rounded-lg" />
            );
        if (error)
            return (
                <div className="mt-3 h-48 w-full flex items-center justify-center bg-[#1a1a1a] text-red-500 rounded-lg">
                    {error}
                </div>
            );

        return (
            <img
                src={imgUrl || null}
                alt={alt}
                className="rounded-lg mt-3 h-48 w-full object-cover"
            />
        );
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Creator */}
            <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                <p className="text-sm">
                    <span className="font-bold">Player1:</span>{" "}
                    {user?.name || "Unknown"}
                </p>
                {creator_SS ? (
                    <ImageLoader
                        imagename={creator_SS}
                        alt="Creator Screenshot"
                    />
                ) : (
                    <div className="mt-3 h-48 w-full flex items-center justify-center bg-[#1a1a1a] rounded-lg text-gray-400">
                        No Screenshot
                    </div>
                )}
            </div>

            {/* Opponent */}
            <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                <p className="text-sm">
                    <span className="font-bold">Player2:</span> TBD
                </p>
                {player_SS ? (
                    <ImageLoader
                        imagename={player_SS}
                        alt="Player Screenshot"
                    />
                ) : (
                    <div className="mt-3 h-48 w-full flex items-center justify-center bg-[#1a1a1a] rounded-lg text-gray-400">
                        No Screenshot
                    </div>
                )}
            </div>
        </div>
    );
};

export default WinnerImg;
