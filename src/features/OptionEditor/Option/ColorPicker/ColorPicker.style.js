import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: absolute;
  left: 16px;
  right: ${({ isOpen }) => (isOpen ? "16px" : "unset")};
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;
