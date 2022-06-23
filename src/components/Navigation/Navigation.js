import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth";

// Components
import { Button } from "../Button";

// Styles
import { Wrapper, Container, Menu, Logo, NavLink } from "./Navigation.style";

export const Navigation = () => {
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
            <NavLink to={`/profile/${user.id}`}>{user.username}</NavLink>
            <Button text="Sign Out" onClick={handleSignOut} />
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
