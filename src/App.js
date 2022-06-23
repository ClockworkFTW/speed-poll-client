import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navigation } from "./components/Navigation";
import { Notification } from "./components/Notification";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { PollForm } from "./pages/PollForm/PollForm";
import { PollView } from "./pages/PollView";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { Profile } from "./pages/Profile/Profile";
import { NotFound } from "./pages/NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <Navigation />
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
    <Footer />
  </BrowserRouter>
);

export default App;
