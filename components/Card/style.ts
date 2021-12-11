import styled from "styled-components";

import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  border: 2px solid gray;
  padding: 4px;
  border-radius: 2px;

  @media ${device.tablet} {
    flex-direction: column;
    width: 186px;
    margin: 8px;
    padding: 2px;
  }
`;

export const Teaser = styled.div`
  height: 150px;
  aspect-ratio: 250/350;
  background-color: gray;

  @media ${device.tablet} {
    height: 250px;
  }
`;

export const Content = styled.div`
  background-color: white;

  @media ${device.tablet} {
    margin-top: -68px;
    background-color: white;
    height: 100px;
  }
`;
