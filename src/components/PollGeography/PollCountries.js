import React from "react";
import styled from "styled-components";

const PollGeo = ({ countries, active, setActive }) => {
  const x = Math.ceil(countries.length / 3);

  return (
    <Container>
      {[...Array(3)].map((_, i) => (
        <List key={i}>
          {countries.map(({ country, countryCode, voteCount }, j) =>
            j >= i * x && j < (i + 1) * x ? (
              <Item
                key={countryCode}
                onMouseEnter={() => setActive(countryCode)}
                onMouseLeave={() => setActive(null)}
                isActive={countryCode === active}
              >
                <Text>{voteCount}</Text>
                <Image
                  src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
                  width="24"
                  height="18"
                />
                <Text>{country}</Text>
              </Item>
            ) : null
          )}
        </List>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  padding: 6px;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "#ced6e0" : "none")};
`;

const Image = styled.img`
  margin: 0px 10px;
`;

const Text = styled.span``;

export default PollGeo;
