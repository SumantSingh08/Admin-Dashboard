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
    <div className="max-w-7xl mx-auto px-4 space-y-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Welcome back 👋 Here’s a quick summary of your platform activity.
          </p>
        </div>
      </div>


      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatusCard
          title="Total Users"
          value={totalUsers}
          icon="👥"
          color="blue"
          trend="+12%"
        />

        <StatusCard
          title="Companies"
          value={totalCompanies}
          icon="🏢"
          color="green"
          trend="+5%"
        />

        <StatusCard
          title="Cities"
          value={totalCities}
          icon="🌍"
          color="purple"
          trend="+3%"
        />

        <StatusCard
          title="Domains"
          value={totalDomains}
          icon="🌐"
          color="orange"
          trend="+8%"
        />

      </div>

    </div>

  );
}

export default Dashboard;
