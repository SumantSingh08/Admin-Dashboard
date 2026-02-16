function StatusCard({ title, value, color }) {

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <h2 className="text-3xl font-bold mt-2 dark:text-white">
            {value}
          </h2>
        </div>

        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          📊
        </div>
      </div>

    </div>
  );
}

export default StatusCard;
