import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 12px;
  opacity: ${({ opacity }) => opacity};
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 88px 16px 52px;
  outline: none;
  border: solid 2px transparent;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow};
  :focus {
    border: ${({ theme }) => `solid 2px ${theme.colors.blue["500"]}`};
  }
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
