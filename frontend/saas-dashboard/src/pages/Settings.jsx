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
    <div className="max-w-5xl mx-auto space-y-10">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your profile and preferences
          </p>
        </div>

        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
          Account
        </span>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

        <form onSubmit={handleSave}>

          {/* Profile Section */}
          <div className="p-10 space-y-8">

            <div className="flex items-center gap-6">

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-md">
                {profile.name?.charAt(0) || "U"}
              </div>

              <div>
                <h2 className="text-xl font-semibold dark:text-white">
                  Profile Information
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Update your personal details
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Bio
              </label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Write something about yourself..."
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Appearance Section */}
          <div className="p-10 space-y-6">

            <div>
              <h2 className="text-xl font-semibold dark:text-white">
                Appearance
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Customize how your dashboard looks
              </p>
            </div>

            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div>
                <p className="font-medium dark:text-white">
                  Dark Mode
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Switch between light and dark themes
                </p>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className={`relative w-14 h-7 rounded-full transition duration-300 ${darkMode ? "bg-blue-600" : "bg-gray-300"
                  }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${darkMode ? "translate-x-7" : ""
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Footer Actions */}
          <div className="p-6 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">

            {success && (
              <p className="text-green-600 text-sm">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition shadow-md disabled:opacity-60"
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
