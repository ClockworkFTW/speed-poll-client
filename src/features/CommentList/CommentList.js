import React from "react";

// Components
import { CommentForm } from "./CommentForm";
import { CommentItem } from "./CommentItem";

// Styles
import { Wrapper, Container, Group, Label } from "./CommentList.style";

export const CommentList = ({ comments, createComment }) => {
  const parentComments = comments.filter((comment) => !comment.parentId);

  return (
    <Wrapper>
      <Group>
        <Label>Comments</Label>
        <CommentForm createComment={createComment} />
      </Group>
      <Container>
        {parentComments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            comments={comments}
            createComment={createComment}
          />
        ))}
      </Container>
    </Wrapper>
  );
};
