import React, { useState } from "react";
import styled from "styled-components";

import PollBars from "./PollBars";
import PollPie from "./PollPie";

const PollResults = ({ options }) => {
  const [active, setActive] = useState(null);

  return (
    <Container>
      <PollBars options={options} active={active} setActive={setActive} />
      <PollPie options={options} active={active} setActive={setActive} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default PollResults;
