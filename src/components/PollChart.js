import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryTooltip } from "victory";
import styled from "styled-components";

const colorScale = [
  "#ffa502",
  "#ff6348",
  "#ff4757",
  "#2ed573",
  "#1e90ff",
  "#3742fa",
];

const PollChart = ({ options }) => {
  // Initialize data
  const [data, setData] = useState(
    options.map((option, i) =>
      i === options.length - 1
        ? { y: 100, label: option.content }
        : { y: 0, label: option.content }
    )
  );

  // Format data and trigger animation
  useEffect(() => {
    setData(
      options.map((option) => ({
        y: option.votes.length,
        label: option.content,
      }))
    );
  }, [options]);

  return (
    <Container>
      <VictoryPie
        data={data}
        colorScale={colorScale}
        animate={{ duration: 500 }}
        labelComponent={<VictoryTooltip flyoutPadding={10} />}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;

export default PollChart;
