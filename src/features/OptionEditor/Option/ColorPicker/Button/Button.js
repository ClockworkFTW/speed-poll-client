import React from "react";

// Components
import { Icon } from "../../../../../components/Icon";

// Styles
import { Wrapper, Container } from "./Button.style";

export const Button = ({ color, onClick }) => (
  <Wrapper color={color} onClick={onClick}>
    <Container color={color}>
      <Icon icon={["fas", "circle"]} />
    </Container>
  </Wrapper>
);
