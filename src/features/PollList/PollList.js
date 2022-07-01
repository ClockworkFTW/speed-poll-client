import React from "react";
import { Link } from "react-router-dom";
import { decode } from "he";
import * as dateFns from "date-fns";

// Components
import { Loader } from "./Loader/Loader";
import { Controls } from "./Controls";
import { Metadata } from "./Metadata";
import { Statistics } from "./Statistics";
import { Status } from "./Status";

// Styles
import { Wrapper, Container, Item, Top, Bot } from "./PollList.style";

export const PollList = (props) => {
  let { polls, sorting, setSorting, filtered, setFiltered, loading } = props;

  // Sort polls based on sorting flag
  polls = polls.sort((pollA, pollB) => {
    switch (sorting) {
      case "Recent":
        return new Date(pollB.createdAt) - new Date(pollA.createdAt);
      case "Votes":
        const voteCountA = pollA.options.reduce(
          (prev, curr) => prev + curr.votes.length,
          0
        );
        const voteCountB = pollB.options.reduce(
          (prev, curr) => prev + curr.votes.length,
          0
        );
        return voteCountB - voteCountA;
      case "Views":
        return pollB.views.length - pollA.views.length;
      default:
        break;
    }
  });

  // Filter out expired polls
  polls = polls.filter((poll) => {
    const { endDate } = poll;

    if (filtered) {
      return endDate ? dateFns.isAfter(new Date(endDate), new Date()) : true;
    } else {
      return true;
    }
  });

  return (
    <Wrapper>
      <Controls
        pollCount={polls.length}
        sorting={sorting}
        setSorting={setSorting}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <Container>
        {loading ? (
          <Loader rows={20} height={120} />
        ) : (
          polls.map((poll) => (
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
          ))
        )}
      </Container>
    </Wrapper>
  );
};
