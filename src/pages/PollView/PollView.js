import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { decode } from "he";

// API
import { BASE_URL } from "../../api";
import * as pollAPI from "../../api/poll";

// Redux
import {
  flashNotification,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

// Features
import { Metadata } from "../../features/PollList/Metadata";
import { OptionList } from "../../features/OptionList";
import { ResultList } from "../../features/ResultList";

// Components
import { Button } from "../../components/Button";

// Styles
import { Container } from "./PollView.style";

export const PollView = () => {
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
      <h1>{decode(poll.question)}</h1>
      <Metadata
        user={poll.user}
        createdAt={poll.createdAt}
        linkToProfile={true}
      />
      {resultsVisible ? (
        <>
          <Button
            text="Back to Poll"
            onClick={() => setResultsVisible(false)}
          />
          <Button
            text={resultsLive ? "Live Results" : "Refresh Results"}
            onClick={() => setResultsLive(true)}
          />
          <ResultList poll={poll} />
        </>
      ) : (
        <>
          <OptionList
            pollId={poll.id}
            options={poll.options}
            setPoll={setPoll}
          />
          <Button text="Show Results" onClick={() => setResultsVisible(true)} />
        </>
      )}
    </Container>
  ) : null;
};
