import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as dateFns from "date-fns";

// API
import * as pollAPI from "../../api/poll";

// Redux
import {
  flashNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "../../redux/notification";

// Features
import { OptionEditor } from "../../features/OptionEditor";
import { SettingEditor } from "../../features/SettingEditor";

// Components
import { Main } from "../../components/Main";
import { PageHeader } from "../../components/PageHeader";
import { ButtonPrimary } from "../../components/Button";

// Styles
import { Group, Label, TextArea } from "./PollForm.style";

export const PollForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");

  const [options, setOptions] = useState([
    { uuid: uuidv4(), content: "", color: "red" },
    { uuid: uuidv4(), content: "", color: "green" },
  ]);

  const [settings, setSettings] = useState({
    privatePoll: false,
    allowMultipleVotes: false,
    addComments: false,
    loginToVote: false,
    hideResults: false,
    enableCaptcha: false,
    setEndDate: false,
    endDate: dateFns.startOfTomorrow(),
  });

  const handleCreatePoll = async () => {
    try {
      const poll = await pollAPI.createPoll({ question, options, settings });

      dispatch(
        flashNotification({
          type: NOTIFICATION_TYPE_SUCCESS,
          message: "Poll created successfully!",
        })
      );

      navigate(`/poll/${poll.id}`, { state: { poll } });
    } catch (error) {
      dispatch(
        flashNotification({ type: NOTIFICATION_TYPE_ERROR, message: error })
      );
    }
  };

  return (
    <Main>
      <PageHeader
        main="Create a Poll"
        sub="Complete the below fields to create your poll."
      />
      <Group>
        <Label htmlFor="question">Poll Question</Label>
        <TextArea
          id="question"
          type="text"
          placeholder="Type your question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </Group>
      <Group>
        <Label>Poll Options</Label>
        <OptionEditor options={options} setOptions={setOptions} />
      </Group>
      <Group>
        <Label>Poll Settings</Label>
        <SettingEditor settings={settings} setSettings={setSettings} />
      </Group>
      <ButtonPrimary text="Create Poll" onClick={handleCreatePoll} />
    </Main>
  );
};
