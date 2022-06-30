import React, { memo } from "react";
import { useDrag, useDrop } from "react-dnd";

// Components
import { Icon } from "../../../components/Icon";
import { Input } from "../../../components/Input";
import { ColorPicker } from "./ColorPicker";

// Styles
import { Container, Controls, Control } from "./Option.style";

export const Option = memo((props) => {
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
        style={{ padding: "16px 88px 16px 52px" }}
      />
      <Controls>
        <Control onClick={delOption} cursor="pointer">
          <Icon icon={["far", "times"]} />
        </Control>
        <Control cursor="grab">
          <Icon icon={["far", "grip-lines"]} />
        </Control>
      </Controls>
    </Container>
  );
});
