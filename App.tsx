import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./src/screens/login";
import HomePage from "./src/screens/home-page";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem("userLoggedIn");

    if (user === "true") {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}