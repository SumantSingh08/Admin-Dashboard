function ViewToggle({ view, setView }) {
    return (
        <div className="flex border rounded-md overflow-hidden">
            <button
                onClick={() => setView("table")}
                className={`px-4 py-2 cursor-pointer
                     text-sm ${view === "table"
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-700"
                    }`}
            >
                Table
            </button>

            <button
                onClick={() => setView("card")}
                className={`px-4 py-2 cursor-pointer
                     text-sm ${view === "card"
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-700"
                    }`}
            >
                Cards
            </button>
        </div>
    );
}

export default ViewToggle;
