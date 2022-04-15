import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import Icon from "./Icon";

const Options = ({ options, setOptions }) => {
  const setOption = (dragId, content) => {
    const newOptions = options.map((answer) => {
      if (answer.dragId === dragId) {
        return { ...answer, content };
      } else {
        return answer;
      }
    });

    setOptions(newOptions);
  };

  const addOption = () => {
    const newAnser = { dragId: uuidv4(), content: "" };

    setOptions([...options, newAnser]);
  };

  const delOption = (dragId) => {
    const newOptions = options.filter((answer) => answer.dragId !== dragId);

    setOptions(newOptions);
  };

  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    const newOptions = Array.from(options);
    const [removed] = newOptions.splice(source.index, 1);
    newOptions.splice(destination.index, 0, removed);

    setOptions(newOptions);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "#70a1ff" : "#ffffff",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    padding: isDraggingOver ? "6px" : "0px",
    background: isDraggingOver ? "#ced6e0" : "#dfe4ea",
  });

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="options">
          {(provided, snapshot) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {options.map((answer, index) => (
                <Draggable
                  key={answer.dragId}
                  draggableId={answer.dragId}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Option
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Input
                        id={`option-${index + 1}`}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={answer.content}
                        onChange={(e) =>
                          setOption(answer.dragId, e.target.value)
                        }
                      />
                      <Controlls>
                        <DragHandle>
                          <Icon icon={["far", "grip-lines"]} />
                        </DragHandle>
                        {options.length > 2 && (
                          <DeleteButton
                            onClick={() => delOption(answer.dragId)}
                          >
                            <Icon icon={["far", "times"]} />
                          </DeleteButton>
                        )}
                      </Controlls>
                    </Option>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <AddButton onClick={addOption}>Add Option</AddButton>
    </>
  );
};

const List = styled.div`
  border-radius: 4px;
  transition: padding 0.2s;
`;

const Option = styled.div`
  position: relative;
  margin-bottom: 6px;
  border-radius: 4px;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  outline: 2px solid #5352ed;
  border: none;
  background: none;
`;

const Controlls = styled.div`
  position: absolute;
  top: 0px;
  right: 16px;
  bottom: 0px;
  display: flex;
  align-items: center;
`;

const DragHandle = styled.div`
  padding: 0px 6px;
`;

const DeleteButton = styled.button`
  margin-left: 6px;
  padding: 0px 6px;
  border: none;
  outline: none;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 12px 16px;
  color: #ffffff;
  background-color: #2f3542;
  border: none;
  border-radius: 4px;
  outline: none;
  :hover {
    cursor: pointer;
  }
`;

export default Options;
