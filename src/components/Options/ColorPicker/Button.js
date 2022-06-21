import React from "react";
import styled from "styled-components";

import Icon from "../../Icon";

const Button = ({ color, onClick }) => (
  <Wrapper color={color} onClick={onClick}>
    <Container color={color}>
      <Icon icon={["fas", "circle"]} />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background-color: ${({ theme, color }) => theme[color]["200"]};
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  font-size: 12px;
  color: ${({ theme, color }) => theme[color]["500"]};
`;

export default Button;
