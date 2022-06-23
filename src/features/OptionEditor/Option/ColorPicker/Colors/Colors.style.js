import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  margin-left: 12px;
  :first-of-type {
    margin-left: 0px;
  }
`;
