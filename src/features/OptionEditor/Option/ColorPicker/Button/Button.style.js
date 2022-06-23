import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background-color: ${({ theme, color }) => theme.colors[color]["200"]};
  :hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  font-size: 12px;
  color: ${({ theme, color }) => theme.colors[color]["500"]};
`;
