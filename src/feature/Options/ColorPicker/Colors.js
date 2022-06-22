import React from "react";
import styled from "styled-components";

import Button from "./Button";

export const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
];

const Colors = ({ pickColor }) => (
  <Wrapper>
    {colors.map((c) => (
      <Container key={c}>
        <Button color={c} onClick={() => pickColor(c)} />
      </Container>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const Container = styled.div`
  margin-left: 12px;
  :first-of-type {
    margin-left: 0px;
  }
`;

export default Colors;
