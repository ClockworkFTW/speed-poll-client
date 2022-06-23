import React from "react";

// Components
import { Icon } from "../Icon";

// Styles
import { Container } from "./Button.style";

export const Button = ({ text, icon, onClick }) => (
  <Container onClick={onClick}>
    {icon && <Icon icon={icon} />}
    {text}
  </Container>
);
