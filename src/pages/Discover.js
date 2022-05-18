import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistance, parseISO } from "date-fns";
import { decode } from "he";
import styled from "styled-components";

import * as pollAPI from "../api/poll";

const Create = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const getPolls = async () => {
      const fetchedPolls = await pollAPI.getPolls();
      console.log(fetchedPolls);
      setPolls(fetchedPolls);
    };

    getPolls();
  }, []);

  return (
    <Container>
      <h1>Discover</h1>
      {polls.map((poll) => {
        const voteCount = poll.options.reduce(
          (prev, curr) => prev + curr.votes.length,
          0
        );

        const timeSinceStart = formatDistance(
          parseISO(poll.createdAt),
          new Date(),
          { addSuffix: true }
        );

        return (
          <Poll key={poll.id} to={`/poll/${poll.id}`}>
            <VoteCount>{voteCount}</VoteCount>
            <div>
              <h3>{decode(poll.title)}</h3>
              <p>Started {timeSinceStart}</p>
            </div>
          </Poll>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
`;

const Poll = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
`;

const VoteCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 8px;
  background-color: #2f3542;
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
`;

export default Create;
