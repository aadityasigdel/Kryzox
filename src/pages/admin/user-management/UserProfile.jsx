import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/v1/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error("Error fetching user:", err));
    }, [id]);

    if (!user) return <p className="text-white p-4">Loading...</p>;

    return (
        <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
            <img
                src={`/uploads/${user.imageName}`}
                alt={user.name}
                className="w-32 h-32 rounded-full mb-4"
            />
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Mobile:</strong> {user.mobileNo}
            </p>
            <p>
                <strong>Balance:</strong> {user.balance}
            </p>
            <p>
                <strong>PU ID:</strong> {user.puId}
            </p>
            <p>
                <strong>FU ID:</strong> {user.fuId}
            </p>
            <p>
                <strong>Roles:</strong>{" "}
                {user.roles.map((r) => r.name).join(", ")}
            </p>
            <p>
                <strong>Remark:</strong> {user.uremark}
            </p>
        </div>
    );
}
