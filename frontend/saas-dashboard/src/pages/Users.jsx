import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ViewToggle from "../components/ViewToggle";

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("table");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const usersPerPage = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setFilteredUsers(res.data);
        setLoading(false);
      } catch {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let updated = [...users];

    if (search) {
      updated = updated.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    updated.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFilteredUsers(updated);
    setCurrentPage(1);
  }, [search, sortOrder, users]);

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (loading)
    return <div className="text-center p-10 animate-pulse">Loading...</div>;

  if (error)
    return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto space-y-8 px-4">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Users Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage, search and view user profiles
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          {/* Search */}
          <div className="relative">
            <input
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              🔍
            </span>
          </div>

          {/* Sort Button */}
          <button
            onClick={() =>
              setSortOrder(sortOrder === "asc" ? "desc" : "asc")
            }
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transition font-medium"
          >
            {sortOrder === "asc" ? "Sort A–Z" : "Sort Z–A"}
          </button>

          <ViewToggle view={view} setView={setView} />
        </div>
      </div>

      {/* TABLE VIEW */}
      {view === "table" && (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">

          <table className="min-w-full text-sm">

            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-4 font-medium dark:text-white">
                    {user.name}
                  </td>

                  <td className="p-4 text-gray-600 dark:text-gray-300">
                    {user.email}
                  </td>

                  <td className="p-4 text-gray-600 dark:text-gray-300">
                    {user.company.name}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => navigate(`/users/${user.id}`)}
                      className="text-blue-600 hover:text-indigo-600 font-medium transition"
                    >
                      View Profile →
                    </button>
                  </td>
                </tr>
              ))}

              {currentUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      )}

      {/* CARD VIEW */}
      {view === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {currentUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {user.email}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {user.company.name}
              </p>

              <div className="mt-4 text-blue-600 font-medium text-sm">
                View Profile →
              </div>
            </div>
          ))}

        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 pt-6">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition disabled:opacity-40"
        >
          ← Previous
        </button>

        <span className="text-gray-600 dark:text-gray-300 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition disabled:opacity-40"
        >
          Next →
        </button>

      </div>

    </div>

  );
}

export default Users;
