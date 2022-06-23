import React from "react";
import * as dateFns from "date-fns";

// Components
import { Icon } from "../../../components/Icon";

// Styles
import { Container, Text } from "./Status.style";

export const Status = ({ createdAt }) => {
  const isLive = dateFns.isAfter(new Date(createdAt), new Date());

  return (
    <Container isLive={isLive}>
      <Icon icon={["fas", "circle-small"]} style={{ fontSize: "10px" }} />
      <Text>{isLive ? "Closed" : "Live"}</Text>
    </Container>
  );
};
