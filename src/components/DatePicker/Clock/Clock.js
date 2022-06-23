import React from "react";
import * as dateFns from "date-fns";

// Styles
import { Container, Column, Cell } from "./Clock.style";

export const Clock = ({ date, setDate }) => {
  // Generate array of 24 hours starting at date hour
  const hours = [...Array(24)].map(
    (_, hour) => (hour + dateFns.getHours(date)) % 24
  );

  // Generate array of 60 minutes starting at date minute
  const minutes = [...Array(60)].map(
    (_, minute) => (minute + dateFns.getMinutes(date)) % 60
  );

  return (
    <Container>
      <Column>
        {hours.map((hour) => (
          <Cell
            key={hour}
            active={hour === dateFns.getHours(date)}
            onClick={() => setDate(dateFns.setHours(date, hour))}
          >
            {hour.toString().padStart(2, "0")}
          </Cell>
        ))}
      </Column>
      <Column>
        {minutes.map((minute) => (
          <Cell
            key={minute}
            active={minute === dateFns.getMinutes(date)}
            onClick={() => setDate(dateFns.setMinutes(date, minute))}
          >
            {minute.toString().padStart(2, "0")}
          </Cell>
        ))}
      </Column>
    </Container>
  );
};
