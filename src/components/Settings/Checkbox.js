import React from "react";
import styled from "styled-components";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <Container>
      <Label>
        <Input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 12px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const Label = styled.label`
  display: block;
  padding: 12px;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin-right: 6px;
`;

export default Checkbox;
