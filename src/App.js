import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Notification from "./components/Notification";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PollForm from "./pages/PollForm";
import PollView from "./pages/PollView";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Notification />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/poll/:pollId" element={<PollView />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route element={<ProtectedRoute redirectPath="/sign-in" />}>
        <Route path="/create" element={<PollForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
