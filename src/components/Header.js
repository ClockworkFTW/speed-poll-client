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
        <Menu>
          <Logo to="/">Poll</Logo>
          <NavLink to="/create">Create</NavLink>
          <NavLink to="/discover">Discover</NavLink>
          <NavLink to="/leaderboards">Leaderboards</NavLink>
        </Menu>
        {user ? (
          <Menu>
            <NavLink to="/profile">{user.username}</NavLink>
            <Button onClick={handleSignOut}>sign out</Button>
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
  background: #2f3542;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  margin-right: 40px;
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
  margin-left: 20px;
  text-decoration: none;
  color: #ffffff;
`;

const Button = styled.button`
  margin-left: 20px;
`;

export default Header;
