import React, { memo, useCallback } from "react";
import update from "immutability-helper";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import Option from "./Option";

import { colors } from "./ColorPicker/Colors";

const Options = memo(({ options, setOptions }) => {
  const [_, drop] = useDrop(() => ({ accept: "OPTION" }));

  const addOption = () => {
    setOptions([
      ...options,
      {
        uuid: uuidv4(),
        content: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ]);
  };

  const delOption = (uuid) => {
    if (options.length === 2) return;
    setOptions(options.filter((option) => option.uuid !== uuid));
  };

  const findOption = useCallback(
    (uuid) => {
      const option = options.filter((o) => o.uuid === uuid)[0];
      return {
        option,
        index: options.indexOf(option),
      };
    },
    [options]
  );

  const moveOption = useCallback(
    (uuid, atIndex) => {
      const { option, index } = findOption(uuid);
      setOptions(
        update(options, {
          $splice: [
            [index, 1],
            [atIndex, 0, option],
          ],
        })
      );
    },
    [findOption, options, setOptions]
  );

  const setProp = (uuid, prop, value) => {
    setOptions(
      options.map((option) => {
        if (option.uuid === uuid) {
          return { ...option, [prop]: value };
        } else {
          return option;
        }
      })
    );
  };

  return (
    <>
      <div ref={drop}>
        {options.map((option, index) => (
          <Option
            key={option.uuid}
            uuid={option.uuid}
            content={option.content}
            color={option.color}
            delOption={delOption}
            findOption={findOption}
            moveOption={moveOption}
            setProp={setProp}
            index={index}
          />
        ))}
      </div>
      <Button onClick={addOption}>Add Option</Button>
    </>
  );
});

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

export default Options;
