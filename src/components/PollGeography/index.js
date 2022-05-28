import React, { useState } from "react";
import styled from "styled-components";

import PollMap from "./PollMap";
import PollCountries from "./PollCountries";

const PollGeography = ({ options }) => {
  const [active, setActive] = useState(null);

  // Extract votes
  const votes = options.map((option) => option.votes).flat();

  // Generate countries object
  let countries = votes.reduce((prev, curr) => {
    const { country, countryCode } = curr;

    if (prev[countryCode]) {
      const next = { country, voteCount: prev[countryCode].voteCount + 1 };
      return { ...prev, [countryCode]: next };
    } else {
      const next = { country, voteCount: 1 };
      return { ...prev, [countryCode]: next };
    }
  }, {});

  // Convert countries object to sorted array
  countries = Object.entries(countries)
    .map(([countryCode, rest]) => ({ ...rest, countryCode }))
    .sort((a, b) => b.voteCount - a.voteCount);

  return (
    <Container>
      <PollCountries
        countries={countries}
        active={active}
        setActive={setActive}
      />
      <PollMap countries={countries} active={active} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default PollGeography;
