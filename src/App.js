import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import Notification from "./components/Notification";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Notification />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<ProtectedRoute redirectPath="/sign-in" />}>
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dfe4ea;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export default App;
