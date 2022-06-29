import React from "react";
import { Link } from "react-router-dom";
import { decode } from "he";

// Components
import { Metadata } from "./Metadata";
import { Statistics } from "./Statistics";
import { Status } from "./Status";

// Styles
import { Container, Item, Top, Bot } from "./PollList.style";

export const PollList = ({ polls }) => (
  <Container>
    {polls.map((poll) => (
      <Link key={poll.id} to={`/poll/${poll.id}`}>
        <Item>
          <Top>
            <div>
              <h3>{decode(poll.question)}</h3>
              <Metadata user={poll.user} createdAt={poll.createdAt} />
            </div>
          </Top>
          <Bot>
            <Statistics poll={poll} />
            <Status endDate={poll.endDate} />
          </Bot>
        </Item>
      </Link>
    ))}
  </Container>
);
