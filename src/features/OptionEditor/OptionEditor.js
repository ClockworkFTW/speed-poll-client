import React, { memo, useCallback } from "react";
import update from "immutability-helper";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";

// Components
import { Button } from "../../components/Button";
import { Option } from "./Option";

// Styles
import { Wrapper, Container } from "./OptionEditor.style";

// Types
import { colors } from "./Option/ColorPicker/Colors/Colors.types";

export const OptionEditor = ({ options, setOptions }) => (
  <DndProvider backend={HTML5Backend}>
    <DndConsumer options={options} setOptions={setOptions} />
  </DndProvider>
);

const DndConsumer = memo(({ options, setOptions }) => {
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
    <Wrapper>
      <Container ref={drop}>
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
      </Container>
      <Button text="Add Option" onClick={addOption} />
    </Wrapper>
  );
});
