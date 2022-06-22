import React from "react";
import styled from "styled-components";

import Icon from "../../components/Icon";

const Statistics = ({ poll }) => {
  const voteCount = poll.options.reduce(
    (prev, curr) => prev + curr.votes.length,
    0
  );

  const commentCount = 0;
  const viewCount = 0;

  return (
    <Container>
      <Item>
        <Icon icon={["fas", "circle-check"]} style={{ opacity: "0.5" }} />
        <Text>{voteCount}</Text>
      </Item>
      <Item>
        <Icon icon={["fas", "message-dots"]} style={{ opacity: "0.5" }} />
        <Text>{commentCount}</Text>
      </Item>
      <Item>
        <Icon icon={["fas", "eye"]} style={{ opacity: "0.5" }} />
        <Text>{viewCount}</Text>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.neutral["400"]};
`;

const Text = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
`;

export default Statistics;
