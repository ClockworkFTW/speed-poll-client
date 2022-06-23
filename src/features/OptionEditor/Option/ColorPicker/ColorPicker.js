import React, { useState } from "react";

// Components
import { Button } from "./Button";
import { Colors } from "./Colors";

// Styles
import { Container } from "./ColorPicker.style";

export const ColorPicker = ({ color, setColor }) => {
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
