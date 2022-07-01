import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.ul``;

export const Item = styled.li`
  margin-bottom: 20px;
  padding: 20px 26px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.1s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

export const Bot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  margin-top: 20px;
`;
