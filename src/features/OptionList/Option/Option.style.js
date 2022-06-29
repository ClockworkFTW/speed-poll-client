import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 20px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
`;
