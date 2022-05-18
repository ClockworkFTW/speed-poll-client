import React from "react";

const PollMetadata = ({ poll }) => {
  const createdAt = new Date(poll.createdAt).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>
        By {poll.user.username} - {createdAt}
      </p>
    </div>
  );
};

export default PollMetadata;
