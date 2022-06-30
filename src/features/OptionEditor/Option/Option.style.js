import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 12px;
  opacity: ${({ opacity }) => opacity};
`;

export const Controls = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
`;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  font-size: 20px;
  :hover {
    cursor: ${({ cursor }) => cursor};
  }
`;
