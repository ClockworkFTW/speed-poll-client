import React from "react";

// Components
import { PageHeader } from "../../components/PageHeader";

// Styles
import { Container } from "../NotFound/NotFound.style";

export const NotFound = () => (
  <Container>
    <PageHeader
      main="Page Not Found"
      sub="The page you are looking for does not exist."
    />
  </Container>
);
