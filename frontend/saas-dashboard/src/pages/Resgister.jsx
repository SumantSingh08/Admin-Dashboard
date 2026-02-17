import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setServerError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://admin-dashboard-backend-u7go.onrender.com/api/auth/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      setLoading(false);
      navigate("/dashboard");

    } catch (error) {
      setLoading(false);
      setServerError(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Create Your Account 🚀
        </h2>

        {serverError && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4 text-center">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "Must include letters and numbers",
                  },
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>



          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
