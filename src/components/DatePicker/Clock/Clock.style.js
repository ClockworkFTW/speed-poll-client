import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 312px;
  margin-left: 6px;
  padding: 12px 9px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

export const Column = styled.div`
  margin: 0px 3px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.blue["500"] : "none"};
  :hover {
    cursor: pointer;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue["500"]};
    background-color: ${({ theme }) => theme.colors.blue["200"]};
  }
`;
