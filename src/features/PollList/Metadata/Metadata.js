import React from "react";
import { Link } from "react-router-dom";
import * as dateFns from "date-fns";

// Styles
import { Container } from "./Metadata.style";

export const Metadata = ({ user, createdAt, linkToProfile }) => {
  const timeSinceCreation = dateFns.formatDistance(
    dateFns.parseISO(createdAt),
    new Date(),
    { addSuffix: true }
  );

  return (
    <Container>
      Asked by{" "}
      {linkToProfile ? (
        <Link to={`/profile/${user.id}`}>{user.username}</Link>
      ) : (
        `${user.username}`
      )}{" "}
      {timeSinceCreation}
    </Container>
  );
};
