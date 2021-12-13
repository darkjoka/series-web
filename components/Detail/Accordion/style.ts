import styled from "styled-components";
import { device } from "../../../shared/constants/device";

export const Wrapper = styled.div`
  margin: 8px 0;
  border: 2px solid gray;
`;

export const Head = styled.div`
  width: 94%;
  height: 52px;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;

  @media ${device.tablet} {
    display: flex;
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }
`;

export const Body = styled.div`
  width: 94%;
  overflow: hidden;
`;

export const Item = styled.div`
  height: 64px;
  margin: 8px 0;

  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-last-child(1) {
    border: none;
  }
`;
