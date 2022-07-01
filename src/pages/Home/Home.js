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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPolls = async () => {
      try {
        setLoading(true);
        const fetchedPolls = await pollAPI.getPolls();
        setPolls(fetchedPolls);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPolls();
  }, []);

  // Aggregation settings
  const [sorting, setSorting] = useState("Recent");
  const [filtered, setFiltered] = useState(false);

  return (
    <Main>
      <PageHeader
        main="Public Polls"
        sub="Below are the public polls created by Speed Poll members."
      />
      <PollList
        polls={polls}
        sorting={sorting}
        setSorting={setSorting}
        filtered={filtered}
        setFiltered={setFiltered}
        loading={loading}
      />
    </Main>
  );
};
