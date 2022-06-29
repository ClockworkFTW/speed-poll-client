import React from "react";

import { Container, Input } from "./Radio.style";

export const Radio = ({ label, value, onChange }) => (
  <Container>
    <Input type="radio" checked={value} onChange={onChange} />
    {label}
  </Container>
);
