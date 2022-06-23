import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns";

// Components
import { Icon } from "../../Icon";

// Styles
import {
  Wrapper,
  Header,
  Container,
  Button,
  WeekDay,
  Day,
} from "./Calendar.style";

// Types
import { months } from "./Calendar.types";

export const Calendar = ({ date, setDate }) => {
  const [offset, setOffset] = useState(0);
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    // Get first day of current calendar month
    const startDate = dateFns.startOfWeek(
      dateFns.startOfMonth(dateFns.addMonths(new Date(), offset))
    );

    // Get six weeks of days beginning with start date
    const days = [...Array(7 * 6)].map((_, index) =>
      dateFns.addDays(startDate, index)
    );

    setCalendar(days);
  }, [offset]);

  return calendar ? (
    <Wrapper>
      <Header>
        <div>
          {months[dateFns.getMonth(dateFns.addMonths(new Date(), offset))]}{" "}
          {dateFns.getYear(dateFns.addMonths(new Date(), offset))}
        </div>
        <div>
          <Button onClick={() => setOffset(offset - 1)}>
            <Icon icon={["far", "arrow-up"]} style={{ fontSize: "20px" }} />
          </Button>
          <Button onClick={() => setOffset(offset + 1)}>
            <Icon icon={["far", "arrow-down"]} style={{ fontSize: "20px" }} />
          </Button>
        </div>
      </Header>
      <Container>
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dotw) => (
          <WeekDay key={dotw}>{dotw}</WeekDay>
        ))}
        {calendar.map((day, index) => (
          <Day
            key={index}
            isSameDay={dateFns.isSameDay(day, date)}
            isSameMonth={dateFns.isSameMonth(
              day,
              dateFns.addMonths(new Date(), offset)
            )}
            onClick={() => setDate(day)}
          >
            {dateFns.getDate(day)}
          </Day>
        ))}
      </Container>
    </Wrapper>
  ) : null;
};
