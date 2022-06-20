import React, { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

import Icon from "../Icon";

const Option = memo(
  ({ uuid, content, setContent, delOption, moveOption, findOption, index }) => {
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
        <Input
          type="text"
          placeholder={`Option ${index + 1}`}
          value={content}
          onChange={(e) => setContent(uuid, e.target.value)}
        />
        <Controls>
          <Button onClick={() => delOption(uuid)}>
            <Icon icon={["far", "times"]} style={{ fontSize: "20px" }} />
          </Button>
          <Handle>
            <Icon icon={["far", "grip-lines"]} style={{ fontSize: "20px" }} />
          </Handle>
        </Controls>
      </Container>
    );
  }
);

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  opacity: ${({ opacity }) => opacity};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: white;
`;

const Controls = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 6px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const Handle = styled.div`
  margin-left: 12px;
  padding: 6px;
  cursor: move;
`;

export default Option;
