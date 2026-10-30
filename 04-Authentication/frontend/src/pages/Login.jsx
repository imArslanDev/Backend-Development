import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans relative transition-colors duration-200">
      <ThemeToggle />
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-transparent dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="labelStyles">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="inputStyles"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="labelStyles">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="inputStyles"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="text-gray-700 dark:text-gray-300 cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="mr-1.5 rounded labelStyles"
              />
              Remember me
            </label>
            {/* <a
              href="/forgot-password"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Forgot password?
            </a> */}
          </div>

          <button type="submit" className="btnPrimary">
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
