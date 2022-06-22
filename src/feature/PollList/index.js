import React from "react";
import { Link } from "react-router-dom";
import { decode } from "he";
import styled from "styled-components";

import Metadata from "./Metadata";
import Statistics from "./Statistics";
import Status from "./Status";

const PollList = ({ polls }) => (
  <ul>
    {polls.map((poll) => (
      <Link to={`/poll/${poll.id}`}>
        <Item key={poll.id}>
          <Top>
            <div>
              <h3>{decode(poll.question)}</h3>
              <Metadata user={poll.user} createdAt={poll.createdAt} />
            </div>
          </Top>
          <Bot>
            <Statistics poll={poll} />
            <Status createdAt={poll.createdAt} />
          </Bot>
        </Item>
      </Link>
    ))}
  </ul>
);

const Item = styled.li`
  margin-bottom: 20px;
  padding: 20px 26px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

const Bot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  margin-top: 20px;
`;

export default PollList;
