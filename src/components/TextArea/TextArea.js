import React from "react";

import { Container } from "./TextArea.style";

export const TextArea = ({ placeholder, value, onChange }) => (
  <Container
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
