import styled, { css, keyframes } from "styled-components";

const baseButtonStyle = css`
  padding: 12px 16px;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius};
`;

const pulse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContainerAnimated = styled.button`
  ${baseButtonStyle}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) =>
    theme.colors[color ? color : "blue"]["500"]};
  transition: all 0.2s ease-in-out;
  animation: ${pulse} infinite 1s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${({ theme, color }) =>
      theme.colors[color ? color : "blue"]["600"]};
  }
`;

export const ContainerPrimary = styled.button`
  ${baseButtonStyle}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) =>
    theme.colors[color ? color : "blue"]["500"]};
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: ${({ theme, color }) =>
      theme.colors[color ? color : "blue"]["600"]};
  }
`;

export const ContainerTransparent = styled.button`
  ${baseButtonStyle}
  color: ${({ theme, color }) =>
    theme.colors[color ? color : "neutral"]["800"]};
  background: none;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${({ theme, color }) =>
      theme.colors[color ? color : "neutral"]["500"]};
  }
`;
