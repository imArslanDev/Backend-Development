import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  // 1. useState ko component ke andar move karein
  const [userData, setUserData] = useState({});

  const backendURL = "http://localhost:3000/api";

  const getUserData = async () => {
    try {
      // 2. Cookies/Tokens bhejne ke liye withCredentials: true zaroori hai
      let { data } = await axios.get(`${backendURL}/getuserdata`, {
        withCredentials: true,
      });
      setUserData(data);
    } catch (error) {
      console.log("Get User Data Error:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // 3. Value object ko bhi component ke andar rakhein taake updated state pass ho
  const Value = {
    backendURL,
    userData,
    setUserData,
    getUserData
  };

  return <DataContext.Provider value={Value}>{children}</DataContext.Provider>;
};

export default UserContext;