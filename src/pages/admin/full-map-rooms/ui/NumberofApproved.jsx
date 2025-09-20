// hook
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../../../../hooks/getData.js";

export const useNumberofApproved = () => {
    const { fullmapId } = useParams();
    const { getData, result } = useGetData();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!fullmapId) return;
        setLoading(true);
        getData(`fullmapApp/fullmap/${fullmapId}?status=CREATOR_APPROVED`);
    }, [fullmapId]);

    useEffect(() => {
        if (result) {
            setCount(Array.isArray(result) ? result.length : 0);
            setLoading(false);
        }
    }, [result]);

    return { count, loading };
};
