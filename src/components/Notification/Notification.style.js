import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  grid-area: notification;
`;

export const Center = styled.div`
  max-width: 860px;
  margin: 20px auto;
`;

export const Container = styled.div`
  margin: 0px 20px;
  border-radius: 4px;
  overflow: hidden;
  color: ${({ theme, color }) => theme.colors[color]["700"]};
  background-color: ${({ theme, color }) => theme.colors[color]["200"]};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 3px 20px;
  font-weight: 500;
`;

export const grow = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const ProgressBar = styled.div`
  height: 6px;
  animation: 5s ${grow};
  background-color: ${({ theme, color }) => theme.colors[color]["300"]};
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 6px;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme, color }) => theme.colors[color]["700"]};
`;
