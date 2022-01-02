import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  width: 94%;
  margin: 8px auto;

  @media ${device.tablet} {
    width: 300px;
    margin: 8px 16px;
    padding: 2px;
  }
`;
export const Teaser = styled.div`
  width: 300px;
  margin: auto;
`;
export const Content = styled.div`
  width: 300px;
  margin: auto;
  height: 36px;
`;
export const Title = styled.a``;
