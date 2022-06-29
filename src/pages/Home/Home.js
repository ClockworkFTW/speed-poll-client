import React, { useState, useEffect } from "react";

// API
import * as pollAPI from "../../api/poll";

// Features
import { PollList } from "../../features/PollList";

// Components
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";

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
    <Main>
      <PageHeader
        main="Public Polls"
        sub="Below are the public polls created by Speed Poll members."
      />
      <PollList polls={polls} />
    </Main>
  );
};
