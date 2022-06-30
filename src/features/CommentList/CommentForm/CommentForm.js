import React, { useState } from "react";

// Components
import { Icon } from "../../../components/Icon";
import { TextArea } from "../../../components/TextArea";
import { ButtonPrimary } from "../../../components/Button";

// Styles
import { Container, Banner } from "./CommentForm.style";

export const CommentForm = ({ parentId, closeForm, createComment }) => {
  const [text, setText] = useState("");

  return (
    <Container>
      <TextArea
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Banner>
        <p>
          <Icon icon={["fas", "circle-question"]} /> HTML and links are not
          allowed.
        </p>
        {parentId ? (
          <div>
            <ButtonPrimary
              text="Cancel"
              onClick={closeForm}
              style={{ marginRight: "12px" }}
            />
            <ButtonPrimary
              text="Reply"
              onClick={() => createComment({ parentId, text })}
            />
          </div>
        ) : (
          <ButtonPrimary
            text="Create Comment"
            onClick={() => createComment({ parentId, text })}
          />
        )}
      </Banner>
    </Container>
  );
};
