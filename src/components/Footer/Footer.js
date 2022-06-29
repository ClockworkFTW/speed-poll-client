import React from "react";

// Components
import { Icon } from "../Icon";

// Styles
import { Wrapper, Container } from "./Footer.style";

export const Footer = () => (
  <Wrapper>
    <Container>
      <p>
        Created with <Icon icon={["far", "heart"]} /> by Nik Boyle
      </p>
    </Container>
  </Wrapper>
);
