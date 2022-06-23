import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.neutral["400"]};
`;

export const Text = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
`;
