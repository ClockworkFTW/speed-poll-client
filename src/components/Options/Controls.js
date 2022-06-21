import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

const Controls = ({ delOption }) => (
  <Container>
    <Control onClick={delOption} cursor="pointer">
      <Icon icon={["far", "times"]} />
    </Control>
    <Control cursor="grab">
      <Icon icon={["far", "grip-lines"]} />
    </Control>
  </Container>
);

const Container = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  font-size: 20px;
  :hover {
    cursor: ${({ cursor }) => cursor};
  }
`;

export default Controls;
