import styled from "styled-components";

export const Wrapper = styled.footer`
  grid-area: footer;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 20px;
  text-align: center;
`;
