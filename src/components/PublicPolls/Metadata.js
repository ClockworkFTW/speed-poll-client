import React from "react";
import { Link } from "react-router-dom";
import * as dateFns from "date-fns";

const Metadata = ({ user: { id, username }, createdAt, linkToProfile }) => {
  const timeSinceCreation = dateFns.formatDistance(
    dateFns.parseISO(createdAt),
    new Date(),
    { addSuffix: true }
  );

  return (
    <p>
      Asked by{" "}
      {linkToProfile ? (
        <Link to={`/profile/${id}`}>{username}</Link>
      ) : (
        `${username}`
      )}{" "}
      {timeSinceCreation}
    </p>
  );
};

export default Metadata;
