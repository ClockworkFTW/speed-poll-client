import React from "react";
import * as dateFns from "date-fns";
import styled from "styled-components";

const Clock = ({ endDate, setEndDate }) => {
  // Generate array of 24 hours starting at endDate hour
  const hours = [...Array(24)].map(
    (_, hour) => (hour + dateFns.getHours(endDate)) % 24
  );

  // Generate array of 60 minutes starting at endDate minute
  const minutes = [...Array(60)].map(
    (_, minute) => (minute + dateFns.getMinutes(endDate)) % 60
  );

  return (
    <Container>
      <Column>
        {hours.map((hour) => (
          <Cell
            key={hour}
            active={hour === dateFns.getHours(endDate)}
            onClick={() => setEndDate(dateFns.setHours(endDate, hour))}
          >
            {hour.toString().padStart(2, "0")}
          </Cell>
        ))}
      </Column>
      <Column>
        {minutes.map((minute) => (
          <Cell
            key={minute}
            active={minute === dateFns.getMinutes(endDate)}
            onClick={() => setEndDate(dateFns.setMinutes(endDate, minute))}
          >
            {minute.toString().padStart(2, "0")}
          </Cell>
        ))}
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 312px;
  margin-left: 6px;
  padding: 12px 9px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const Column = styled.div`
  margin: 0px 3px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ theme, active }) => (active ? theme.white : theme.black)};
  background-color: ${({ theme, active }) =>
    active ? theme.blue["500"] : "none"};
  :hover {
    cursor: pointer;
    font-weight: 700;
    color: ${({ theme }) => theme.blue["500"]};
    background-color: ${({ theme }) => theme.blue["200"]};
  }
`;

export default Clock;
