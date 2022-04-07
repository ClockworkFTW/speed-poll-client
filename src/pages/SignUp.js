import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const BASE_URL = "https://jnb-api.ngrok.io/auth";

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const localSignUp = async () => {
    try {
      const credentials = { username, email, passwordOne, passwordTwo };

      const res = await axios.post(`${BASE_URL}/local/sign-up`, credentials, {
        withCredentials: true,
      });

      if (res.status === 200 && res.data.user) {
        setUser(res.data.user);
        navigate("/");
      }
    } catch (error) {
      // TODO: display error message
      console.log(error);
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
        <Button onClick={localSignUp}>Sign Up</Button>
        <Header>Or sign in with</Header>
        <Button onClick={googleSignIn}>Google</Button>
        <Button onClick={facebookSignIn}>Facebook</Button>
        <Button onClick={appleSignIn}>Apple</Button>
        <p>
          Already have an account? <Link to="/sign-in">Sign in</Link>
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

export default SignUp;
