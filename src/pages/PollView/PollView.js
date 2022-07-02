import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { decode } from "he";

// API
import { BASE_URL } from "../../api";
import * as pollAPI from "../../api/poll";
import * as voteAPI from "../../api/vote";
import * as commentAPI from "../../api/comment";

// Redux
import {
  flashNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

// Features
import { Metadata } from "../../features/PollList/Metadata";
import { OptionList } from "../../features/OptionList";
import { ResultList } from "../../features/ResultList";
import { CommentList } from "../../features/CommentList";
import { SettingList } from "../../features/SettingList";

// Components
import { Icon } from "../../components/Icon";
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import {
  ButtonPrimary,
  ButtonAnimated,
  ButtonTransparent,
} from "../../components/Button";

// Styles
import { Banner } from "./PollView.style";

export const PollView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pollId } = useParams();

  const [poll, setPoll] = useState(null);
  const [votes, setVotes] = useState([]);

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

  const castVotes = async () => {
    try {
      const updatedPoll = await voteAPI.createVote({ pollId: poll.id, votes });
      setPoll(updatedPoll);

      dispatch(
        flashNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Vote cast successfully!",
        })
      );
    } catch (error) {
      dispatch(
        flashNotification({ type: NOTIFICATION_TYPE_ERROR, message: error })
      );
    }
  };

  const createComment = async (comment) => {
    try {
      const updatedPoll = await commentAPI.createComment({
        ...comment,
        pollId: poll.id,
      });

      setPoll(updatedPoll);

      dispatch(
        flashNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Comment created successfully!",
        })
      );
    } catch (error) {
      dispatch(
        flashNotification({ type: NOTIFICATION_TYPE_ERROR, message: error })
      );
    }
  };

  return poll ? (
    <Main>
      <PageHeader main={decode(poll.question)}>
        <Metadata
          user={poll.user}
          createdAt={poll.createdAt}
          linkToProfile={true}
        />
      </PageHeader>
      {resultsVisible ? (
        <>
          <Banner>
            {resultsLive ? (
              <ButtonAnimated
                icon={["fas", "signal-stream"]}
                text="Live Results"
                color="green"
                onClick={() => setResultsLive(false)}
              />
            ) : (
              <ButtonPrimary
                icon={["fas", "arrows-rotate"]}
                text="Refresh Results"
                onClick={() => setResultsLive(true)}
              />
            )}

            <ButtonTransparent
              icon={["fas", "arrow-right"]}
              text="Back to Poll"
              onClick={() => setResultsVisible(false)}
            />
          </Banner>
          <ResultList poll={poll} />
          {poll.addComments && (
            <CommentList
              comments={poll.comments}
              createComment={createComment}
            />
          )}
        </>
      ) : (
        <>
          <p>
            {poll.allowMultipleVotes
              ? "Choose one or more options:"
              : "Choose an option:"}
          </p>
          <OptionList
            options={poll.options}
            votes={votes}
            setVotes={setVotes}
            allowMultipleVotes={poll.allowMultipleVotes}
          />
          <Banner>
            <ButtonPrimary text="Cast Vote" onClick={castVotes} />
            {poll.hideResults ? (
              <p>
                <Icon
                  icon={["fas", "circle-question"]}
                  style={{ marginRight: "6px" }}
                />
                Results Hidden by Creator
              </p>
            ) : (
              <ButtonTransparent
                icon={["fas", "arrow-right"]}
                text="Show Results"
                onClick={() => setResultsVisible(true)}
              />
            )}
          </Banner>
        </>
      )}
      <SettingList poll={poll} />
    </Main>
  ) : null;
};
