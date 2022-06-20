import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decode } from "he";

import * as voteAPI from "../api/vote";

import {
  flashNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "../redux/notification";

const PollOptions = ({ poll, setPoll }) => {
  const dispatch = useDispatch();

  const [optionId, setOptionId] = useState(null);

  const handleCastVote = async (e) => {
    try {
      e.preventDefault();

      const updatedPoll = await voteAPI.castVote(poll.id, optionId);
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

  return (
    <form onSubmit={handleCastVote}>
      <p>Make a choice:</p>
      <ul>
        {poll.options
          .sort((a, b) => a.index - b.index)
          .map((option, index) => (
            <li key={index}>
              <label htmlFor={option.id}>
                <input
                  id={option.id}
                  type="radio"
                  value={option.content}
                  checked={option.id === optionId}
                  onChange={() => setOptionId(option.id)}
                />
                {decode(option.content)}
              </label>
            </li>
          ))}
      </ul>
      <button type="submit">Cast Vote</button>
    </form>
  );
};

export default PollOptions;
