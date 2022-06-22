import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <Container>
        <Menu>
          <Logo to="/">Speed Poll</Logo>
          <NavLink to="/create">Create Poll</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/poll/demo">Demo</NavLink>
        </Menu>
        {user ? (
          <Menu>
            <NavLink to="/profile">{user.username}</NavLink>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </Menu>
        ) : (
          <Menu>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </Menu>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  margin-right: 40px;
  font-size: 32px;
  font-weight: 700;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 20px;
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 12px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue["500"]};
  :hover {
    cursor: pointer;
  }
`;

export default Navigation;
