import React from "react";
import styled from "styled-components";

import Calendar from "./Calendar";
import Clock from "./Clock";

const DatePicker = ({ date, setDate }) => (
  <Container>
    <Calendar date={date} setDate={setDate} />
    <Clock date={date} setDate={setDate} />
  </Container>
);

const Container = styled.div`
  display: flex;
`;

export default DatePicker;
