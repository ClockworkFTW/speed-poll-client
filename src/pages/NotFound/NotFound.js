import React from "react";

// Components
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";

export const NotFound = () => (
  <Main>
    <PageHeader
      main="Page Not Found"
      sub="The page you are looking for does not exist."
    />
  </Main>
);
