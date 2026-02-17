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
       <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

  {/* Header Section */}
  <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white">
    <div className="flex items-center gap-5">
      
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold">
        {user.name?.charAt(0)}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-sm opacity-90">{user.company?.name}</p>
      </div>
    </div>
  </div>

  {/* Details Section */}
  <div className="p-8 grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">

    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
        <p className="font-medium">{user.email}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
        <p className="font-medium">{user.phone}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          {user.website}
        </a>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
        <p className="font-medium">{user.address?.city}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Street</p>
        <p className="font-medium">{user.address?.street}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Company Catchphrase</p>
        <p className="font-medium italic">
          {user.company?.catchPhrase}
        </p>
      </div>
    </div>

  </div>
</div>

    );
}

export default UserDetail;
