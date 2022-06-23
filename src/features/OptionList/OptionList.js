import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decode } from "he";

// API
import * as voteAPI from "../../api/vote";

// Redux
import {
  flashNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

// Components
import { Checkbox } from "../../components/Checkbox";

export const OptionList = ({ pollId, options, setPoll }) => {
  const dispatch = useDispatch();

  const [optionId, setOptionId] = useState(null);

  const castVote = async () => {
    try {
      const updatedPoll = await voteAPI.castVote(pollId, optionId);
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
    <div>
      <p>Make a choice:</p>
      <ul>
        {options
          .sort((optionA, optionB) => optionA.index - optionB.index)
          .map((option) => (
            <li key={option.id}>
              <Checkbox
                label={decode(option.content)}
                value={option.id === optionId}
                onChange={() => setOptionId(option.id)}
              />
            </li>
          ))}
      </ul>
      <button onClick={castVote}>Cast Vote</button>
    </div>
  );
};
