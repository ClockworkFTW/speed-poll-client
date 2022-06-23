import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  background: #ffffff;
`;

export const Container = styled.div`
  max-width: 860px;
  margin: 0px auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  margin-right: 40px;
  font-size: 32px;
  font-weight: 700;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
`;
