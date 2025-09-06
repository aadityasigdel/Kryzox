import { useEffect, useState } from "react";
import useAxios from "../../../../lib/axios.config";
import NoProfile from "../../../../assets/Profile/NoProfile.jpg";

const UserImage = ({ imagename, alt , size }) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const axiosInstance = useAxios();

    useEffect(() => {
        if (!imagename) return;

        let isMounted = true;
        const fetchImage = async () => {
            setLoading(true);
            try {
                const res = await axiosInstance.get(
                    `/users/download/${imagename}`,
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

    if (loading)
        return (
            <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse" />
        );
    if (error) return <div className="text-red-500 text-xs">{error}</div>;

    return (
        <img
            src={imgUrl || NoProfile}
            alt={alt}
            style={{ width: size, height: size }}
            className=" rounded-full object-cover"
        />
    );
};

export default UserImage;
