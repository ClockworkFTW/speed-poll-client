import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Column = styled.div`
  :after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const Setting = styled.div`
  float: left;
  margin: 0px 12px 12px 0px;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;
