import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import { BASE_URL } from "../api";
import * as pollAPI from "../api/poll";

import PollMetadata from "../components/PollMetadata";
import PollOptions from "../components/PollOptions";
import PollResults from "../components/PollResults";
import PollGeography from "../components/PollGeography";

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
  const [resultsLive, setResultsLive] = useState(true);

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

  useEffect(() => {
    if (resultsVisible && resultsLive) {
      const eventSource = new EventSource(`${BASE_URL}/poll/live/${pollId}`, {
        withCredentials: true,
      });

      eventSource.onmessage = (e) => {
        setPoll(JSON.parse(e.data));
      };

      eventSource.onerror = (e) => {
        setResultsLive(false);
      };

      return () => {
        eventSource.close();
      };
    }
  }, [resultsVisible, resultsLive]);

  return poll ? (
    <Container>
      <PollMetadata poll={poll} />
      {resultsVisible ? (
        <>
          <button onClick={() => setResultsLive(true)}>
            {resultsLive ? "Live Results" : "Refresh Results"}
          </button>
          <button onClick={() => setResultsVisible(false)}>Back to Poll</button>
          <PollResults options={poll.options} />
          <PollGeography options={poll.options} />
        </>
      ) : (
        <>
          <PollOptions poll={poll} setPoll={setPoll} />
          <button onClick={() => setResultsVisible(true)}>Show Results</button>
        </>
      )}
    </Container>
  ) : null;
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
`;

export default Poll;
