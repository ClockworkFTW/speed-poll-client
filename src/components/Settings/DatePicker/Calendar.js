import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns";
import styled from "styled-components";

import Icon from "../../Icon";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = ({ endDate, setEndDate }) => {
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
            isSameDay={dateFns.isSameDay(day, endDate)}
            isSameMonth={dateFns.isSameMonth(
              day,
              dateFns.addMonths(new Date(), offset)
            )}
            onClick={() => setEndDate(day)}
          >
            {dateFns.getDate(day)}
          </Day>
        ))}
      </Container>
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  width: 264px;
  height: 312px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 12px 12px 0px 12px;
  font-weight: 700;
`;

const Button = styled.button`
  margin-left: 6px;
  padding: 6px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 36px);
  grid-template-rows: repeat(7, 36px);
  grid-auto-flow: row;
  padding: 6px;
`;

const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: ${({ isSameDay }) => (isSameDay ? "700" : "400")};
  background-color: ${({ isSameDay }) => (isSameDay ? "#4199ff" : "none")};
  color: ${({ isSameDay, isSameMonth }) => {
    if (isSameDay) return "#ffffff";
    if (isSameMonth) return "#000000";
    return "#929292;";
  }};
  :hover {
    cursor: pointer;
    font-weight: 700;
    background-color: ${({ isSameDay }) => (isSameDay ? "#4199ff" : "#b3d6ff")};
    color: ${({ isSameDay }) => (isSameDay ? "#ffffff" : "#4199ff")};
  }
`;

export default Calendar;
