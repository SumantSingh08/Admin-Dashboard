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
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <h1 className="text-2xl font-bold dark:text-white">
          Users Management
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            placeholder="Search..."
            className="border p-2 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() =>
              setSortOrder(sortOrder === "asc" ? "desc" : "asc")
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            {sortOrder === "asc" ? "A–Z" : "Z–A"}
          </button>

          <ViewToggle view={view} setView={setView} />
        </div>
      </div>

      {view === "table" && (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
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
                  className="border-t hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.company.name}</td>

                  {/* Details Column */}
                  <td className="p-4">
                    <button
                      onClick={() => navigate(`/users/${user.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline cursor-pointer"
                    >
                      View Profile →
                    </button>
                  </td>
                </tr>
              ))}

              {currentUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="p-6 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}


      {/* Card View */}
      {view === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="font-bold text-lg dark:text-white">
                {user.name}
              </h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <p className="text-sm mt-2">{user.company.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Users;
