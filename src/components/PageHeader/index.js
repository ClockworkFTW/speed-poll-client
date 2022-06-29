import React from "react";
import styled from "styled-components";

export const PageHeader = ({ main, sub, children }) => (
  <Container>
    <h1>{main}</h1>
    {sub && <p>{sub}</p>}
    {children && <div>{children}</div>}
  </Container>
);

const Container = styled.div`
  margin-bottom: 40px;
`;
