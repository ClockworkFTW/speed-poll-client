import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.1s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;
