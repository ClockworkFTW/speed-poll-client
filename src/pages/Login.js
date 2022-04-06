import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BASE_URL = "https://jnb-api.ngrok.io/auth";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const localLogin = async () => {
    try {
      const credentials = { email, password };

      // Authenticate user and set cookie
      await axios.post(`${BASE_URL}/local/login`, credentials, {
        withCredentials: true,
      });

      // Get user
      const res = await axios.get(`${BASE_URL}/user`, {
        withCredentials: true,
      });

      // Set user and navigate home
      if (res.status === 200 && res.data) {
        setUser(res.data);
        navigate("/");
      }
    } catch (error) {
      // Get the fucking error message...
      console.log(error.response);
    }
  };

  const googleLogin = () => {
    window.open(`${BASE_URL}/google/login`, "_self");
  };

  const facebookLogin = () => {
    window.open(`${BASE_URL}/facebook/login`, "_self");
  };

  const appleLogin = () => {
    window.open(`${BASE_URL}/apple/login`, "_self");
  };

  return (
    <Wrapper>
      <Container>
        <Header>Login with email</Header>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={localLogin}>Login</Button>
        <Header>Or log in with</Header>
        <Button onClick={googleLogin}>Google</Button>
        <Button onClick={facebookLogin}>Facebook</Button>
        <Button onClick={appleLogin}>Apple</Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 600px;
  text-align: center;
`;

const Header = styled.p``;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  margin-bottom: 10px;
`;

export default Login;
