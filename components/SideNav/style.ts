import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`;
export const BackDrop = styled(animated.div)`
  height: 100vh;
  background-color: gray;
`;

export const Nav = styled(animated.div)`
  width: 300px;
  height: 100vh;
  background-color: white;
  position: absolute;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Close = styled.div`
  height: 40px;
  margin: 8px;
  padding: 8px;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
`;

export const NavLink = styled.a`
  margin: 8px 0;
  padding: 8px;
`;
