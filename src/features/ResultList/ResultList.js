import React from "react";

// Components
import { Result } from "./Result/Result";

// Styles
import { Container } from "./ResultList.style";

export const ResultList = ({ poll }) => {
  const totalVotes = poll.options.reduce(
    (prev, curr) => prev + curr.votes.length,
    0
  );

  const sortedOptions = poll.options.sort(
    (optionA, optionB) => optionB.votes.length - optionA.votes.length
  );

  return (
    <Container>
      {sortedOptions.map((option, index) => (
        <Result
          key={option.id}
          index={index}
          content={option.content}
          color={option.color}
          voteCount={option.votes.length}
          percent={Math.round((option.votes.length / totalVotes) * 100)}
        />
      ))}
    </Container>
  );
};
