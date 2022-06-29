import React from "react";
import * as dateFns from "date-fns";

// Components
import { Icon } from "../../../components/Icon";

// Styles
import { Container, Text } from "./Status.style";

export const Status = ({ endDate }) => {
  const isLive = endDate
    ? dateFns.isAfter(new Date(endDate), new Date())
    : true;

  return (
    <Container color={isLive ? "green" : "red"}>
      <Icon icon={["fas", "circle-small"]} style={{ fontSize: "10px" }} />
      <Text>{isLive ? "Live" : "Closed"}</Text>
    </Container>
  );
};
