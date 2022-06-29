import React from "react";
import { decode } from "he";

// Components
import { Checkbox } from "../../../components/Checkbox";
import { Radio } from "../../../components/Radio";

// Style
import { Container } from "./Option.style";

export const Option = (props) => {
  const { option, votes, setVotes, allowMultipleVotes } = props;

  const isSelected = votes.find((vote) => vote === option.id) ? true : false;

  const setVoteCheckbox = () => {
    if (votes.find((vote) => vote === option.id)) {
      setVotes(votes.filter((vote) => vote !== option.id));
    } else {
      setVotes([...votes, option.id]);
    }
  };

  const setVoteRadio = () => {
    setVotes([option.id]);
  };

  return (
    <Container>
      {allowMultipleVotes ? (
        <Checkbox
          label={decode(option.content)}
          value={isSelected}
          onChange={setVoteCheckbox}
        />
      ) : (
        <Radio
          label={decode(option.content)}
          value={isSelected}
          onChange={setVoteRadio}
        />
      )}
    </Container>
  );
};
