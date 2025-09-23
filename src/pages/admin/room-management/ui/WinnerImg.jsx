import { useEffect, useState } from "react";
import useAxios from "../../../../lib/axios.config";

const WinnerImg = ({ users = [], creator_SS, player_SS }) => {
    const axiosInstance = useAxios();

    const ImageLoader = ({ imagename, alt }) => {
        const [imgUrl, setImgUrl] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            if (!imagename) return;
            let isMounted = true;
            let objectUrl;

            const fetchImage = async () => {
                setLoading(true);
                try {
                    const res = await axiosInstance.get(
                        `/rooms/image/${imagename}`,
                        { responseType: "blob" }
                    );
                    if (isMounted) {
                        objectUrl = URL.createObjectURL(res.data);
                        setImgUrl(objectUrl);
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
                if (objectUrl) URL.revokeObjectURL(objectUrl);
            };
        }, [imagename]);

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
            imgUrl && (
                <img
                    src={imgUrl}
                    alt={alt || "Screenshot"}
                    className="rounded-lg mt-3 max-h-50 bg-cover w-full object-scale-down"
                />
            )
        );
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Player 1 */}
            <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                <p className="text-sm">
                    <span className="font-bold">
                        {users[1]?.name || "Player 1"}:
                    </span>
                </p>
                {player_SS ? (
                    <ImageLoader
                        imagename={player_SS}
                        alt={`${users[0]?.name || "Player 1"} Screenshot`}
                    />
                ) : (
                    <div className="mt-3 h-48 w-full flex items-center justify-center bg-[#1a1a1a] rounded-lg text-gray-400">
                        No Screenshot
                    </div>
                )}
            </div>

            {/* Player 2 */}
            <div className="bg-[#2a2a2a]/60 p-4 rounded-lg">
                <p className="text-sm">
                    <span className="font-bold">
                        {users[0]?.name || "Player 2"}:
                    </span>
                </p>
                {creator_SS ? (
                    <ImageLoader
                        imagename={creator_SS}
                        alt={`${users[1]?.name || "Player 2"} Screenshot`}
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
