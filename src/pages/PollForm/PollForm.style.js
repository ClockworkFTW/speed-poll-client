import styled from "styled-components";

export const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 20px;
`;

export const Group = styled.div`
  margin-bottom: 40px;
`;

export const Label = styled.h4`
  display: block;
  margin-bottom: 6px;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 16px;
  outline: none;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  :focus {
    border: ${({ theme }) => `solid 2px ${theme.colors.blue["500"]}`};
  }
`;
