import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 24px;
  margin-left: ${({ margin }) => margin};
  margin-right: ${({ margin }) => margin};
  padding: 16px 20px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme, color }) =>
    `2px solid ${color ? theme.colors[color]["500"] : theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, color }) =>
    color ? theme.coloredShadow(color) : theme.shadow};
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  margin: 12px 0px 8px 0px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color]["100"] : theme.colors.neutral["100"]};
`;

export const BarContent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme, color }) => theme.colors[color]["500"]};
`;
