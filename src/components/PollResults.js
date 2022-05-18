import React from "react";
import styled from "styled-components";

const colorScale = [
  "#ffa502",
  "#ff6348",
  "#ff4757",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
];

const PollResults = ({ options }) => {
  // Sort results
  const results = options.sort((a, b) => b.votes.length - a.votes.length);

  // Get total votes
  const totalVotes = options.reduce((acc, cur) => acc + cur.votes.length, 0);

  return (
    <Container>
      {results.map(({ content, votes }, i) => {
        const colorIndex = i % 6;
        const percent = Number.parseFloat(
          (votes.length / totalVotes) * 100
        ).toFixed(2);

        return (
          <Result>
            <Statistics>
              <span>
                {i + 1} - {content}
              </span>
              <span>
                {percent}% ({votes.length} votes)
              </span>
            </Statistics>
            <BarContainer>
              <BarContent percent={percent} colorIndex={colorIndex} />
            </BarContainer>
          </Result>
        );
      })}
    </Container>
  );
};

const Container = styled.ul``;

const Result = styled.li`
  margin-bottom: 12px;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 4px;
  background-color: #ced6e0;
  overflow: hidden;
`;

const BarContent = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: ${({ percent }) => `${percent}%`};
  background-color: ${({ colorIndex }) => colorScale[colorIndex]};
`;

export default PollResults;
