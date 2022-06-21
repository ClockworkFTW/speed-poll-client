import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Colors from "./Colors";

const ColorPicker = ({ color, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePicker = () => setIsOpen(!isOpen);

  const pickColor = (c) => {
    setColor(c);
    setIsOpen(false);
  };

  return (
    <Container isOpen={isOpen}>
      <Button color={color} onClick={togglePicker} />
      {isOpen && <Colors pickColor={pickColor} />}
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  position: absolute;
  left: 16px;
  right: ${({ isOpen }) => (isOpen ? "16px" : "unset")};
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 12px;
  background-color: ${({ theme }) => theme.white};
`;

export default ColorPicker;
