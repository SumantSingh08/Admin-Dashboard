import { useEffect, useState } from "react";
import axios from "axios";
import StatusCard from "../components/StatusCard";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Derived Stats
  const totalUsers = users.length;
  const totalCompanies = new Set(users.map(u => u.company.name)).size;
  const totalCities = new Set(users.map(u => u.address.city)).size;
  const totalDomains = new Set(users.map(u => u.website.split(".")[1])).size;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium animate-pulse">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome back 👋 Here’s what’s happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Total Users */}
        <StatusCard
          title="Total Users"
          value={totalUsers}
          color="blue"
        />

        {/* Companies */}
        <StatusCard
          title="Companies"
          value={totalCompanies}
          color="green"
        />

        {/* Cities */}
        <StatusCard
          title="Cities"
          value={totalCities}
          color="purple"
        />

        {/* Domains */}
        <StatusCard
          title="Domains"
          value={totalDomains}
          color="orange"
        />

      </div>
    </div>
  );
}

export default Dashboard;
