import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data));
    }, [id]);

    if (!user)
        return <div className="text-center p-10 animate-pulse">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow space-y-4">
            <h1 className="text-2xl font-bold dark:text-white">
                {user.name}
            </h1>

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
        </div>
    );
}

export default UserDetail;
