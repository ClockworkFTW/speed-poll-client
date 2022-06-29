import React from "react";

// Components
import { Option } from "./Option";

// Styles
import { Container } from "./OptionList.style";

export const OptionList = (props) => {
  const { options, votes, setVotes, allowMultipleVotes } = props;

  const sortedOptions = options.sort((a, b) => a.index - b.index);

  return (
    <Container>
      {sortedOptions.map((option) => (
        <Option
          key={option.id}
          option={option}
          votes={votes}
          setVotes={setVotes}
          allowMultipleVotes={allowMultipleVotes}
        />
      ))}
    </Container>
  );
};
