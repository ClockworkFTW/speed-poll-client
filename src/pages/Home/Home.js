import React, { useState, useEffect } from "react";

// API
import * as pollAPI from "../../api/poll";

// Features
import { PollList } from "../../features/PollList";

// Components
import { PageHeader } from "../../components/PageHeader";

// Styles
import { Container } from "./Home.style";

export const Home = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const getPolls = async () => {
      const fetchedPolls = await pollAPI.getPolls();
      setPolls(fetchedPolls);
    };

    getPolls();
  }, []);

  return (
    <Container>
      <PageHeader
        main="Public Polls"
        sub="Below are the public polls created by Speed Poll members."
      />
      <PollList polls={polls} />
    </Container>
  );
};
