import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 20px;
  color: ${({ theme, isLive }) =>
    isLive ? theme.colors.red["700"] : theme.colors.green["700"]};
  background-color: ${({ theme, isLive }) =>
    isLive ? theme.colors.red["200"] : theme.colors.green["200"]};
`;

export const Text = styled.span`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 700;
`;
