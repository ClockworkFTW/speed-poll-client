import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import * as dateFns from "date-fns";
import styled from "styled-components";

import PageHeader from "../components/PageHeader";
import Options from "../feature/Options";
import PollSettings from "../feature/PollSettings";

import * as pollAPI from "../api/poll";

import {
  flashNotification,
  NOTIFICATION_TYPE_SUCCESS,
  NOTIFICATION_TYPE_ERROR,
} from "../redux/notification";

const Create = () => {
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
    <DndProvider backend={HTML5Backend}>
      <Container>
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
          <Options options={options} setOptions={setOptions} />
        </Group>
        <Group>
          <Label>Poll Settings</Label>
          <PollSettings settings={settings} setSettings={setSettings} />
        </Group>
        <Button onClick={handleCreatePoll}>Create Poll</Button>
      </Container>
    </DndProvider>
  );
};

const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 20px;
`;

const Group = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.h4`
  display: block;
  margin-bottom: 6px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  :focus {
    border: ${({ theme }) => `solid 2px ${theme.blue["500"]}`};
  }
`;

const Button = styled.button`
  padding: 12px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue["500"]};
  :hover {
    cursor: pointer;
  }
`;

export default Create;
