import React from "react";

import { Container } from "./PageHeader.style";

export const PageHeader = ({ main, sub, children }) => (
  <Container>
    <h1>{main}</h1>
    {sub && <p>{sub}</p>}
    {children}
  </Container>
);
