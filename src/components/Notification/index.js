import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

import {
  clearNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

import Icon from "../../components/Icon";

const Header = () => {
  const dispatch = useDispatch();

  const handleCloseNotification = () => {
    dispatch(clearNotification());
  };

  const { type, message } = useSelector((state) => state.notification);

  let icon = "";
  let color = "";

  switch (type) {
    case NOTIFICATION_TYPE_SUCCESS:
      icon = "square-check";
      color = "green";
      break;
    case NOTIFICATION_TYPE_WARNING:
      icon = "triangle-exclamation";
      color = "yellow";
      break;
    case NOTIFICATION_TYPE_ERROR:
      icon = "circle-exclamation";
      color = "red";
      break;
    default:
      break;
  }

  return message ? (
    <Wrapper>
      <Container color={color}>
        <Content>
          <span>
            <Icon icon={["fas", icon]} style={{ margin: "0px 10px 0px 0px" }} />
            {message}
          </span>
          <Button onClick={handleCloseNotification} color={color}>
            <Icon icon={["fas", "times"]} />
          </Button>
        </Content>
        <ProgressBar color={color} />
      </Container>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  max-width: 860px;
  margin: 20px auto;
`;

const Container = styled.div`
  margin: 0px 20px;
  border-radius: 4px;
  overflow: hidden;
  color: ${({ theme, color }) => theme[color]["700"]};
  background-color: ${({ theme, color }) => theme[color]["200"]};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 3px 20px;
  font-weight: 500;
`;

const grow = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const ProgressBar = styled.div`
  height: 6px;
  animation: 5s ${grow};
  background-color: ${({ theme, color }) => theme[color]["300"]};
`;

const Button = styled.button`
  cursor: pointer;
  padding: 6px;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme, color }) => theme[color]["700"]};
`;

export default Header;
