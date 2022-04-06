import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = ({ user, setUser }) => {
  const logout = async () => {
    try {
      const res = await axios.get("https://jnb-api.ngrok.io/auth/logout", {
        withCredentials: true,
      });

      if (res.status === 200) {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{user ? `Welcome ${user.username}` : "Please log in"}</h1>
      {user ? (
        <Button onClick={logout}>logout</Button>
      ) : (
        <Link to="/login">login</Link>
      )}
    </div>
  );
};

const Button = styled.button``;

export default Home;
