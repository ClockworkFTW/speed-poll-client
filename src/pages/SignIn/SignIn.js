import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

// API
import { BASE_URL } from "../../api";

// Redux
import { localSignIn } from "../../redux/auth";

// Hooks
import { useOauth } from "../../hooks";

// Style
import { Container, Header, Input, Button } from "./SignIn.style";

export const SignIn = () => {
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
