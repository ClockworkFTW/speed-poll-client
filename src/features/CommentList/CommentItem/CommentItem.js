import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as dateFns from "date-fns";

// Components
import { CommentForm } from "../CommentForm";
import { Avatar } from "../../../components/Avatar";
import { Icon } from "../../../components/Icon";

// Styles
import {
  Wrapper,
  Container,
  Content,
  Metadata,
  ReplyButton,
} from "./CommentItem.style";

export const CommentItem = ({ comment, comments, createComment }) => {
  const [replying, setReplying] = useState(false);

  const childComments = comments.filter((c) => c.parentId === comment.id);

  const timeSinceCreation = dateFns.formatDistance(
    dateFns.parseISO(comment.createdAt),
    new Date(),
    { addSuffix: true }
  );

  return (
    <Wrapper>
      <Container>
        <Avatar user={comment.user} size="50px" />
        <Content>
          <Link to={`/profile/${comment.user.id}`}>
            {comment.user.username}
          </Link>
          <p>{comment.text}</p>
          <Metadata>
            <span>{timeSinceCreation}</span>
            <Icon
              icon={["fas", "circle-small"]}
              style={{ margin: "0px 12px", fontSize: "4px" }}
            />
            <ReplyButton onClick={() => setReplying(true)}>Reply</ReplyButton>
          </Metadata>
          {replying && (
            <CommentForm
              parentId={comment.id}
              closeForm={() => setReplying(false)}
              createComment={createComment}
            />
          )}
        </Content>
      </Container>
      {childComments.map((childComment) => (
        <CommentItem
          key={childComment.id}
          comment={childComment}
          comments={comments}
          createComment={createComment}
        />
      ))}
    </Wrapper>
  );
};
