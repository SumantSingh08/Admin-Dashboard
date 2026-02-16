import { useEffect, useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Load saved settings
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    const savedTheme = localStorage.getItem("theme");

    if (savedProfile) {
      setProfile(savedProfile);
    }

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Save Settings
  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    setTimeout(() => {
      localStorage.setItem("profile", JSON.stringify(profile));
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      setLoading(false);
      setSuccess("Settings saved successfully ✅");
    }, 800);
  };

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your profile and preferences
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8">

        <form onSubmit={handleSave} className="space-y-6">

          {/* Profile Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Profile Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            {/* Bio */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">
                Bio
              </label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="3"
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write something about yourself..."
              />
            </div>
          </div>

          {/* Theme Section */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Appearance
            </h2>

            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div>
                <p className="font-medium dark:text-white">
                  Dark Mode
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Toggle between light and dark theme
                </p>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${darkMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${darkMode ? "translate-x-6" : ""
                    }`}
                ></div>
              </button>
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="bg-green-100 text-green-600 p-3 rounded text-sm">
              {success}
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Settings;
