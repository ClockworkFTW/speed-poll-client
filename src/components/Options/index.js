import React, { memo, useCallback } from "react";
import update from "immutability-helper";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import Option from "./Option";

const Options = memo(({ options, setOptions }) => {
  const [_, drop] = useDrop(() => ({ accept: "OPTION" }));

  const addOption = () =>
    setOptions([...options, { uuid: uuidv4(), content: "" }]);

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

  const setContent = (uuid, content) =>
    setOptions(
      options.map((option) => {
        if (option.uuid === uuid) {
          return { ...option, content };
        } else {
          return option;
        }
      })
    );

  return (
    <>
      <div ref={drop}>
        {options.map((option, index) => (
          <Option
            key={option.uuid}
            uuid={option.uuid}
            content={option.content}
            delOption={delOption}
            findOption={findOption}
            moveOption={moveOption}
            setContent={setContent}
            index={index}
          />
        ))}
      </div>
      <button onClick={addOption}>Add Option</button>
    </>
  );
});

export default Options;
