import styled from "styled-components";

export const ContainerPrimary = styled.button`
  padding: 12px 16px;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) =>
    theme.colors[color ? color : "blue"]["500"]};
  :hover {
    cursor: pointer;
  }
`;

export const ContainerTransparent = styled.button`
  padding: 12px 16px;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme, color }) =>
    theme.colors[color ? color : "neutral"]["800"]};
  background: none;
  :hover {
    cursor: pointer;
  }
`;
