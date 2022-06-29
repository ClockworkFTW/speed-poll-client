import React from "react";

// Styles
import { Wrapper, Container } from "./Main.style";

export const Main = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
