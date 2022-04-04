import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (cookies.user) {
      console.log(jwt_decode(cookies.user));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
