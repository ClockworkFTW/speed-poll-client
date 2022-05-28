import React from "react";
import { decode } from "he";

const PollMetadata = ({ poll }) => {
  const createdAt = new Date(poll.createdAt).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>{decode(poll.title)}</h1>
      <p>
        By {poll.user.username} - {createdAt}
      </p>
    </div>
  );
};

export default PollMetadata;
