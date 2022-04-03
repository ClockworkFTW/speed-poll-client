import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const localLogin = () => {
    try {
      const user = { username, password };
      axios.post("http://localhost:3005/auth/local", user, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = () => {
    window.open("http://localhost:3005/auth/google", "_self");
  };

  const facebookLogin = () => {
    window.open("http://localhost:3005/auth/facebook", "_self");
  };

  const appleLogin = () => {
    window.open("http://localhost:3005/auth/apple", "_self");
  };

  return (
    <Wrapper>
      <Container>
        <Header>Login with email</Header>
        <Input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
