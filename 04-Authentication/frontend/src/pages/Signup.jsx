import { useContext, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { DataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { backendURL, setUserData, getUserData } = useContext(DataContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
    setAvatarFile(file); // Real file save karein
    setAvatarPreview(URL.createObjectURL(file)); // Preview ke liye
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, email, password } = formData;
    try {
      let formData = new FormData()
      formData.append("firstName", firstName)
      formData.append("lastName", lastName)
      formData.append("userName", userName)
      formData.append("email", email)
      formData.append("password", password)
      
      if(avatarPreview) {
        formData.append("profileImage", avatarFile)
      }

      let {data} = await axios.post(
        `${backendURL}/signup`, formData,
        { withCredentials: true, 
          headers: {"Content-Type": "multipart/form-data"}
         },
      );
      await getUserData()
      setUserData(data)
      navigate("/")

      console.log("Signup Form Data:", data);

      // Remove the Form
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
      })
      setAvatarFile(null)
      setAvatarPreview(null)

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans relative transition-colors duration-200">
      <ThemeToggle />
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-transparent dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create Account
        </h2>

        <div className="flex justify-center mb-6">
          <label htmlFor="avatar-input" className="cursor-pointer relative">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-28 h-28 rounded-full object-cover object-top border-4 border-indigo-600 shadow-sm"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 flex items-center justify-center relative shadow-inner">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="absolute bottom-0 right-0 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white dark:border-gray-800">
                  +
                </span>
              </div>
            )}
          </label>
          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="labelStyles">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="inputStyles"
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <label className="labelStyles">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="inputStyles"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="labelStyles">userName</label>
            <input
              type="text"
              name="userName"
              placeholder="johndoe"
              value={formData.userName}
              onChange={handleChange}
              required
              className="inputStyles"
            />
          </div>

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

          <button type="submit" className="btnPrimary">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
