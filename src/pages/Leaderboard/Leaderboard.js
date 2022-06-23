import React from "react";

// Components
import { PageHeader } from "../../components/PageHeader";

// Styles
import { Container } from "../Leaderboard/Leaderboard.style";

export const Leaderboard = () => (
  <Container>
    <PageHeader
      main="Leaderboard"
      sub="Poll creators with the most votes are ranked here."
    />
  </Container>
);
