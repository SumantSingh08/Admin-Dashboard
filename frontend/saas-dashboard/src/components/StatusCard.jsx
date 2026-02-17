function StatusCard({ title, value, icon, color, trend }) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="text-2xl font-bold mt-1 dark:text-white">
            {value}
          </h2>

          <p className="text-xs text-green-500 mt-2 font-medium">
            {trend} this month
          </p>
        </div>

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${colors[color]} flex items-center justify-center text-white text-xl shadow-md`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatusCard;
