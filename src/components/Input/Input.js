import React from "react";

import { Container } from "./Input.style";

export const Input = ({ type, value, onChange, style }) => (
  <Container type={type} value={value} onChange={onChange} style={style} />
);
