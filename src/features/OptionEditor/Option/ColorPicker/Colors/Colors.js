import React from "react";

// Components
import { Button } from "../Button";

// Styles
import { Wrapper, Container } from "./Colors.style";

// Types
import { colors } from "./Colors.types";

export const Colors = ({ pickColor }) => (
  <Wrapper>
    {colors.map((c) => (
      <Container key={c}>
        <Button color={c} onClick={() => pickColor(c)} />
      </Container>
    ))}
  </Wrapper>
);
