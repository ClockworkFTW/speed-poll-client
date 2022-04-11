import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/auth";

const Header = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <Container>
        <Logo to="/">Poll</Logo>
        {user ? (
          <Menu>
            <NavLink to="/profile">{user.username}</NavLink>
            <button onClick={handleSignOut}>sign out</button>
          </Menu>
        ) : (
          <Menu>
            <NavLink to="/sign-in">sign in</NavLink>
            <NavLink to="/sign-up">sign up</NavLink>
          </Menu>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 10px 20px;
  background: #000000;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: #ffffff;
`;

export default Header;
