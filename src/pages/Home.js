import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as pollAPI from "../api/poll";

import PageHeader from "../components/PageHeader";
import PublicPolls from "../components/PublicPolls";

const Home = () => {
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
      <PublicPolls polls={polls} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 20px;
`;

export default Home;
