import React, { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

import ColorPicker from "./ColorPicker";
import Controls from "./Controls";

const Option = memo((props) => {
  const { setProp, delOption, moveOption, findOption } = props;
  const { uuid, content, color, index } = props;

  const originalIndex = findOption(uuid).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "OPTION",
      item: { uuid, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { uuid: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveOption(droppedId, originalIndex);
        }
      },
    }),
    [uuid, originalIndex, moveOption]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "OPTION",
      hover({ uuid: draggedId }) {
        if (draggedId !== uuid) {
          const { index: overIndex } = findOption(uuid);
          moveOption(draggedId, overIndex);
        }
      },
    }),
    [findOption, moveOption]
  );

  return (
    <Container ref={(node) => drag(drop(node))} opacity={isDragging ? 0 : 1}>
      <ColorPicker color={color} setColor={(c) => setProp(uuid, "color", c)} />
      <Input
        type="text"
        placeholder={`Option ${index + 1}`}
        value={content}
        onChange={(e) => setProp(uuid, "content", e.target.value)}
      />
      <Controls delOption={() => delOption(uuid)} />
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  margin-bottom: 12px;
  opacity: ${({ opacity }) => opacity};
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 88px 16px 52px;
  outline: none;
  border: solid 2px transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  :focus {
    border: ${({ theme }) => `solid 2px ${theme.blue["500"]}`};
  }
`;

export default Option;
