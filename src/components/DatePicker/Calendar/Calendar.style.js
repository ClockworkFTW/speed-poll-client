import styled from "styled-components";

export const Wrapper = styled.div`
  width: 264px;
  height: 312px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 12px 12px 0px 12px;
  font-weight: 700;
`;

export const Button = styled.button`
  margin-left: 6px;
  padding: 6px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  grid-template-rows: repeat(7, 36px);
  grid-auto-flow: row;
  padding: 6px;
`;

export const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: ${({ isSameDay }) => (isSameDay ? "700" : "400")};
  background-color: ${({ theme, isSameDay }) =>
    isSameDay ? theme.colors.blue["500"] : "none"};
  color: ${({ theme, isSameDay, isSameMonth }) => {
    if (isSameDay) return theme.colors.white;
    if (isSameMonth) return theme.colors.neutral["800"];
    return theme.colors.neutral["400"];
  }};
  :hover {
    cursor: pointer;
    font-weight: 700;
    background-color: ${({ theme, isSameDay }) =>
      isSameDay ? theme.colors.blue["500"] : theme.colors.blue["200"]};
    color: ${({ theme, isSameDay }) =>
      isSameDay ? theme.colors.white : theme.colors.blue["500"]};
  }
`;
