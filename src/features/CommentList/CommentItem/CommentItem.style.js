import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 0px 20px 20px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplyButton = styled.span`
  font-weight: 700;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue["500"]};
  }
`;
