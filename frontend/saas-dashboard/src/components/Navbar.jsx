import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // if installed
import { useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/settings" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            AdminPanel
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Logout */}
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition cursor-pointer"
            >
              Logout
            </button>

          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 pb-4">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                location.pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={logout}
            className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm cursor-pointer"
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
