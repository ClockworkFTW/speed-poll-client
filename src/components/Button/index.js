import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

const Button = ({ text, icon, onClick }) => (
  <Container onClick={onClick}>
    {icon && <Icon icon={icon} />}
    {text}
  </Container>
);

const Container = styled.button``;

export default Button;
