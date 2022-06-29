import React from "react";

import { Container, Banner, BarContainer, BarContent } from "./Result.style";

export const Result = ({ index, content, color, voteCount, percent }) => (
  <Container
    color={!index ? color : undefined}
    margin={index ? "12px" : "none"}
  >
    <Banner>
      <h3>{content}</h3>
      <h3>{percent}%</h3>
    </Banner>
    <BarContainer color={!index ? color : undefined}>
      <BarContent color={color} width={percent} />
    </BarContainer>
    <p>{voteCount} Votes</p>
  </Container>
);
