import React from "react";

import { Container } from "./PageHeader.style";

export const PageHeader = ({ main, sub }) => (
  <Container>
    <h1>{main}</h1>
    <p>{sub}</p>
  </Container>
);
