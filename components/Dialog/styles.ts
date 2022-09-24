import { animated } from "@react-spring/web";
import styled from "styled-components";

export const Wrapper = styled(animated.div)`
  z-index: 3;
`;
export const BackDrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.primaryText};
`;

export const Content = styled(animated.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 80%;
  background-color: ${({ theme }) => theme.altBackground};
  aspect-ratio: 16/9;
  transform: translateX(-50%) translateY(-50%);
`;
