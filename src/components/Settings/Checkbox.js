import React from "react";
import styled from "styled-components";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <Container>
      <Input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </Container>
  );
};

const Container = styled.label`
  display: block;
  padding: 12px 16px;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-right: 12px;
`;

export default Checkbox;
