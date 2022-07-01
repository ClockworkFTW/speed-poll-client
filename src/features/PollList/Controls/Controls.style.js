import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-left: 6px;
  padding: 4px 8px;
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.neutral["400"]};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.blue["500"] : theme.colors.neutral["200"]};
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.neutral["600"]};
    background-color: ${({ theme, active }) =>
      active ? theme.colors.blue["600"] : theme.colors.neutral["300"]};
  }
`;
