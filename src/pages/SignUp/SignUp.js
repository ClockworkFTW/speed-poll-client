import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

// API
import { BASE_URL } from "../api";

// Redux
import { localSignUp } from "../redux/auth";

// Hooks
import { useOauth } from "../hooks";

// Styles
import { Container, Header, Input, Button } from "./SignUp.style";

export const SignUp = () => {
  useOauth();

  const { user, loading } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const dispatch = useDispatch();

  const handleLocalSignUp = () => {
    dispatch(localSignUp({ username, email, passwordOne, passwordTwo }));
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
      <Header>Sign up with email</Header>
      <Input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={passwordOne}
        onChange={(e) => setPasswordOne(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Verify Password"
        value={passwordTwo}
        onChange={(e) => setPasswordTwo(e.target.value)}
      />
      <Button onClick={handleLocalSignUp}>Sign Up</Button>
      <Header>Or sign in with</Header>
      <Button onClick={handleGoogleSignIn}>Google</Button>
      <Button onClick={handleFacebookSignIn}>Facebook</Button>
      <Button onClick={handleAppleSignIn}>Apple</Button>
      <p>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </Container>
  );
};
