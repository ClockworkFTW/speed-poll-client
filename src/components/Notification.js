import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  clearNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from "../redux/notification";

import Icon from "./Icon";

const Header = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearNotification());
  };

  const { type, message } = useSelector((state) => state.notification);

  let icon = "";
  let color = "";
  let background = "";

  switch (type) {
    case NOTIFICATION_TYPE_SUCCESS:
      icon = "square-check";
      color = "#ffffff";
      background = "#2ed573";
      break;
    case NOTIFICATION_TYPE_WARNING:
      icon = "triangle-exclamation";
      color = "#ffffff";
      background = "#ffa502";
      break;
    case NOTIFICATION_TYPE_ERROR:
      icon = "circle-exclamation";
      color = "#ffffff";
      background = "#ff4757";
      break;
    default:
      break;
  }

  return message ? (
    <Container color={color} background={background}>
      <span onClick={handleClose}>
        <Icon icon={["far", icon]} style={{ margin: "0px 10px 0px 0px" }} />
        {message}
      </span>
      <button onClick={handleClose}>close</button>
    </Container>
  ) : null;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 4px;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`;

export default Header;
