import React from "react";
import { Link } from "react-router-dom";
import * as dateFns from "date-fns";

// Styles
import { Container, Divider, Section } from "./SettingList.style";

export const SettingList = ({ poll }) => {
  const formatDate = (timestamp) => {
    const date = dateFns.format(new Date(timestamp), "MMMM d, yyyy");
    const time = dateFns.format(new Date(timestamp), "h:mm a");
    return `on ${date} at ${time}`;
  };

  return (
    <Container>
      <Divider />
      <Section>
        <h3>Creator</h3>
        <p>
          This is a {poll.privatePoll ? "private" : "public"} poll created by{" "}
          <Link to={`/profile/${poll.user.id}`}>{poll.user.username}</Link> from{" "}
          {poll.country}.
        </p>
        <p>
          It was created {formatDate(poll.createdAt)} and{" "}
          {poll.endDate
            ? `ends ${formatDate(poll.endDate)}.`
            : "does not have an end date."}
        </p>
      </Section>
      <Section>
        <h3>Configuration</h3>
        <p>
          {poll.hideResults
            ? "The creator has chosen to hide the results of this poll."
            : "The results of this poll are publicly available at any time."}
        </p>
        <p>
          {poll.allowMultipleVotes
            ? "Users may submit multiple votes."
            : "Users may only submit one vote. Duplicate votes are checked based on IP-Address."}
        </p>
        <p>
          {poll.loginToVote
            ? "Users must be logged in to vote on this poll."
            : "Anonymous users may vote on this poll."}
        </p>
        <p>
          {poll.addComments
            ? "Comments have been enabled by the creator."
            : "Comments have been disabled by the creator."}
        </p>
      </Section>
      <Section>
        <h3>Disclaimer</h3>
        <p>The poll was neither created nor endorsed by Speed Poll.</p>
        <p>
          Please note that the creator of this poll can change these settings at
          any time.
        </p>
        <p>
          Speed Poll makes great efforts to prevent vote manipulation, but
          cannot guarantee that it won't occur in rare cases.
        </p>
      </Section>
    </Container>
  );
};
