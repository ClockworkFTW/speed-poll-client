import React from "react";
import * as dateFns from "date-fns";
import styled from "styled-components";

import Icon from "../Icon";

const Status = ({ createdAt }) => {
  const isLive = dateFns.isAfter(new Date(createdAt), new Date());

  return (
    <Container isLive={isLive}>
      <Icon icon={["fas", "circle-small"]} style={{ fontSize: "10px" }} />
      <Text>{isLive ? "Closed" : "Live"}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 20px;
  color: ${({ theme, isLive }) =>
    isLive ? theme.red["700"] : theme.green["700"]};
  background-color: ${({ theme, isLive }) =>
    isLive ? theme.red["200"] : theme.green["200"]};
`;

const Text = styled.span`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 700;
`;

export default Status;
