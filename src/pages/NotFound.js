import React from "react";
import styled from "styled-components";

const NotFound = () => (
  <Container>
    <h1>Page not found...</h1>
  </Container>
);

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
`;

export default NotFound;
