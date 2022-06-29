import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 20px;
  color: ${({ theme, color }) => theme.colors[color]["700"]};
  background-color: ${({ theme, color }) => theme.colors[color]["200"]};
`;

export const Text = styled.span`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 700;
`;
