import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => (
  <div>
    <h1>{user ? `Welcome ${user.displayName}` : "Please log in"}</h1>
    <Link to="/login">login</Link>
  </div>
);

export default Home;
