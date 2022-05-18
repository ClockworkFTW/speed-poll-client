import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import * as pollAPI from "../api/poll";

import PollMetadata from "../components/PollMetadata";
import PollOptions from "../components/PollOptions";
import PollChart from "../components/PollChart";
import PollResults from "../components/PollResults";

import {
  flashNotification,
  NOTIFICATION_TYPE_ERROR,
} from "../redux/notification";

const Poll = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pollId } = useParams();

  const [poll, setPoll] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);

  useEffect(() => {
    const getPoll = async () => {
      if (location.state && location.state.poll) {
        return setPoll(location.state.poll);
      }

      try {
        const fetchedPoll = await pollAPI.getPoll(pollId);
        setPoll(fetchedPoll);
      } catch (error) {
        dispatch(
          flashNotification({ type: NOTIFICATION_TYPE_ERROR, message: error })
        );
      }
    };

    getPoll();
  }, []);

  return poll ? (
    <Container>
      <PollMetadata poll={poll} />
      {resultsVisible ? (
        <>
          <PollChart options={poll.options} />
          <PollResults options={poll.options} />
        </>
      ) : (
        <PollOptions poll={poll} setPoll={setPoll} />
      )}
      <button onClick={() => setResultsVisible(!resultsVisible)}>
        {resultsVisible ? "Back to Poll" : "Show Results"}
      </button>
    </Container>
  ) : null;
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
`;

export default Poll;
