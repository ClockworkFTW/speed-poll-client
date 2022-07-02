import React from "react";

// Components
import { Option } from "./Option";

// Styles
import { Wrapper, Container } from "./OptionList.style";

export const OptionList = (props) => {
  const { options, votes, setVotes } = props;
  const { multipleChoice, preventDuplicateVoting } = props;

  const sortedOptions = options.sort((a, b) => a.index - b.index);

  const header = multipleChoice
    ? `Choose one or more options${
        preventDuplicateVoting ? " (you may only vote once):" : ":"
      }`
    : `Choose an option${
        preventDuplicateVoting ? " (you may only vote once):" : ":"
      }`;

  return (
    <Wrapper>
      <p>{header}</p>
      <Container>
        {sortedOptions.map((option) => (
          <Option
            key={option.id}
            option={option}
            votes={votes}
            setVotes={setVotes}
            multipleChoice={multipleChoice}
          />
        ))}
      </Container>
    </Wrapper>
  );
};
