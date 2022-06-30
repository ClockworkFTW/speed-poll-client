import React from "react";

import { Container } from "./Avatar.style";

export const Avatar = ({ user, size }) => (
  <Container name={user.username} round={true} size={size} />
);
