import React from "react";

// Components
import { Calendar } from "./Calendar";
import { Clock } from "./Clock";

// Style
import { Container } from "./DatePicker.style";

export const DatePicker = ({ date, setDate }) => (
  <Container>
    <Calendar date={date} setDate={setDate} />
    <Clock date={date} setDate={setDate} />
  </Container>
);
