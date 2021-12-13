import styled from "styled-components";
import { device } from "../../../shared/constants/device";

export const Wrapper = styled.div`
  width: 94%;
  margin: 8px auto;
  border: 2px solid gray;
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
`;

export const Body = styled.div`
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
