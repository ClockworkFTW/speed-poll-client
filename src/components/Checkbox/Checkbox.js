import React from "react";

import { Container, Input } from "./Checkbox.style";

export const Checkbox = ({ label, value, onChange }) => (
  <Container>
    <Input type="checkbox" checked={value} onChange={onChange} />
    {label}
  </Container>
);
