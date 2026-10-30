import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useContext } from "react";
import { DataContext } from "./context/UserContext";

const App = () => {
  const {userData, setUserData, getUserData } = useContext(DataContext);
  
  return (
    <Routes>
      <Route path="/" element={ userData? <Home /> : <Navigate to={"/login"}/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;