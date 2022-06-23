import styled from "styled-components";

export const Container = styled.button`
  padding: 12px 16px;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue["500"]};
  :hover {
    cursor: pointer;
  }
`;
