import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { localSignIn } from "../redux/auth";

import { useOauth } from "../hooks";

import { BASE_URL } from "../api";

const SignIn = () => {
  useOauth();

  const { user, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLocalSignIn = () => {
    dispatch(localSignIn({ email, password }));
  };

  const handleGoogleSignIn = () => {
    window.open(`${BASE_URL}/auth/google/sign-in`, "_self");
  };

  const handleFacebookSignIn = () => {
    window.open(`${BASE_URL}/auth/facebook/sign-in`, "_self");
  };

  const handleAppleSignIn = () => {
    window.open(`${BASE_URL}/auth/apple/sign-in`, "_self");
  };

  return user ? (
    <Navigate to="/" replace />
  ) : (
    <Container>
      {loading && <p>Loading...</p>}
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
      <Button onClick={handleLocalSignIn}>Sign In</Button>
      <Header>Or sign in with</Header>
      <Button onClick={handleGoogleSignIn}>Google</Button>
      <Button onClick={handleFacebookSignIn}>Facebook</Button>
      <Button onClick={handleAppleSignIn}>Apple</Button>
      <p>
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0px auto;
  padding: 20px;
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
