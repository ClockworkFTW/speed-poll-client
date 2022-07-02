import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 0px;
`;

export const Divider = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.neutral["200"]};
  opacity: 0.5;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;
