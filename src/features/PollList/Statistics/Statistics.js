import React from "react";

// Components
import { Icon } from "../../../components/Icon";

// Styles
import { Container, Item, Text } from "./Statistics.style";

export const Statistics = ({ poll }) => {
  const voteCount = poll.options.reduce(
    (prev, curr) => prev + curr.votes.length,
    0
  );

  const commentCount = 0;

  const viewCount = poll.views.length;

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
