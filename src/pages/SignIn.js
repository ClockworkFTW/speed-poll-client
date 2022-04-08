import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { useQueryError } from "../hooks";

const BASE_URL = "https://jnb-api.ngrok.io/auth";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useQueryError();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const localSignIn = async () => {
    try {
      const credentials = { email, password };

      const res = await axios.post(`${BASE_URL}/local/sign-in`, credentials, {
        withCredentials: true,
      });

      if (res.status === 200 && res.data.user) {
        setUser(res.data.user);
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const googleSignIn = () => {
    window.open(`${BASE_URL}/google/sign-in`, "_self");
  };

  const facebookSignIn = () => {
    window.open(`${BASE_URL}/facebook/sign-in`, "_self");
  };

  const appleSignIn = () => {
    window.open(`${BASE_URL}/apple/sign-in`, "_self");
  };

  return (
    <Wrapper>
      <Container>
        {error && <Header>{error}</Header>}
        <Header>Sign in with email</Header>
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
        <Button onClick={localSignIn}>Sign In</Button>
        <Header>Or sign in with</Header>
        <Button onClick={googleSignIn}>Google</Button>
        <Button onClick={facebookSignIn}>Facebook</Button>
        <Button onClick={appleSignIn}>Apple</Button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
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
  width: 600px;
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

export default SignIn;
