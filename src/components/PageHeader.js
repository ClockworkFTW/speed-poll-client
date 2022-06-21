import React from "react";
import styled from "styled-components";

const PageHeader = ({ main, sub }) => (
  <Container>
    <h1>{main}</h1>
    <p>{sub}</p>
  </Container>
);

const Container = styled.div`
  margin-bottom: 40px;
`;

export default PageHeader;
