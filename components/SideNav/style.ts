import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;
export const BackDrop = styled.div`
  height: 100vh;
  background-color: gray;
`;

export const Nav = styled(animated.div)`
  width: 300px;
  height: 100vh;
  background-color: white;
  position: absolute;
`;
