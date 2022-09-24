import { animated } from "@react-spring/web";
import styled from "styled-components";
import { device } from "../../../shared/constants/device";

export const Wrapper = styled.div`
  width: 94%;
  margin: 8px auto;
  box-shadow: ${({ theme }) => `0px 10px ${24}px ${-4.2 / theme.shadowStrength}px ${theme.shadow}`};
  @media ${device.tablet} {
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 52px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;
  align-items: center;
`;

export const Body = styled(animated.div)`
  overflow: hidden;
  background: radial-gradient(at top, rgba(0, 0, 0, 0.2), transparent 80%) no-repeat;
  background-size: 100% 10px;
`;

export const Item = styled.div`
  height: 64px;
  margin: 8px 0;

  border-bottom: 1px solid ${({ theme }) => theme.primaryBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;

  &:nth-last-child(1) {
    border: none;
  }
`;

export const Title = styled.div``;
export const Size = styled.div`
  width: 100%;
  padding: 0 16px;
`;
export const DownloadLink = styled.a`
  background-color: ${({ theme }) => theme.tertiaryBackground};
  padding: 0 16px;
  height: 44px;
  display: flex;
  align-items: center;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;
