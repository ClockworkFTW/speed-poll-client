import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import Options from "../components/Options";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([
    { dragId: uuidv4(), content: "" },
    { dragId: uuidv4(), content: "" },
  ]);

  return (
    <Container>
      <h1>Create</h1>
      <Group>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          type="text"
          placeholder="Type your question here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Group>
      <Group>
        <Label htmlFor="description">Description (optional)</Label>
        <TextArea
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Group>
      <Group>
        <Label htmlFor="option-1">Answer Options</Label>
        <Options options={options} setOptions={setOptions} />
      </Group>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
`;

const Group = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
`;

export default Create;
