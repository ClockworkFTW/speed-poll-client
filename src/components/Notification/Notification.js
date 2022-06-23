import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux
import {
  clearNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

// Components
import { Icon } from "../../components/Icon";

// Styles
import {
  Wrapper,
  Container,
  Content,
  Button,
  ProgressBar,
} from "./Notification.style";

export const Notification = () => {
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
