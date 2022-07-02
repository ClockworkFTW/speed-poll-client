import React from "react";
import CountUp from "react-countup";
import { decode } from "he";

// Hooks
import { usePrevious } from "../../../hooks";

// Styles
import { Container, Banner, BarContainer, BarContent } from "./Result.style";

export const Result = ({ index, content, color, voteCount, percent }) => {
  const prevPercent = usePrevious(percent);

  return (
    <Container
      color={!index ? color : undefined}
      margin={index ? "12px" : "none"}
    >
      <Banner>
        <h3>{decode(content)}</h3>
        <h3>
          <CountUp
            start={prevPercent ? prevPercent : 0}
            end={percent}
            duration={1}
            suffix="%"
          />
        </h3>
      </Banner>
      <BarContainer color={!index ? color : undefined}>
        <BarContent color={color} width={percent} />
      </BarContainer>
      <p>{voteCount} Votes</p>
    </Container>
  );
};
