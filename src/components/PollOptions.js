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

  const [vote, setVote] = useState(null);

  const handleCastVote = async (e) => {
    try {
      e.preventDefault();

      const poll = await voteAPI.castVote(vote);
      setPoll(poll);

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
        {poll.options.map((option, index) => (
          <li key={index}>
            <label htmlFor={option.uuid}>
              <input
                id={option.uuid}
                type="radio"
                value={option.content}
                checked={option.uuid === vote}
                onChange={() => setVote(option.uuid)}
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
