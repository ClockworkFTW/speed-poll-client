import React from "react";
import Skeleton from "react-loading-skeleton";

// Styles
import { Container } from "./Loader.style";

export const Loader = ({ rows, height }) =>
  [...Array(rows)].map(() => (
    <Container>
      <Skeleton height={height} />
    </Container>
  ));
