import React from "react";
import styled from "styled-components";

import Calendar from "./Calendar";
import Clock from "./Clock";

const DatePicker = ({ endDate, setEndDate }) => (
  <Container>
    <Calendar endDate={endDate} setEndDate={setEndDate} />
    <Clock endDate={endDate} setEndDate={setEndDate} />
  </Container>
);

const Container = styled.div`
  display: flex;
`;

export default DatePicker;
