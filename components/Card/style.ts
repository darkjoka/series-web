import styled from "styled-components";
import Image from "next/image";

import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  /* border: 2px solid gray; */
  padding: 4px;
  border-radius: 2px;
  display: flex;
  width: 94%;
  margin: 8px auto;

  @media ${device.tablet} {
    flex-direction: column;
    width: 186px;
    margin: 8px;
    padding: 2px;
  }
`;

export const Teaser = styled(Image)`
  height: 150px;
  aspect-ratio: 250/350;

  @media ${device.tablet} {
    height: 250px;
  }
`;

export const Content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 4px; */
  margin-left: 4px;

  @media ${device.tablet} {
    margin-top: -68px;
    background-color: white;
    height: 100px;
    margin-left: 0;
    z-index: 1;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const Description = styled.p`
  margin: 0;

  @media ${device.tablet} {
    font-size: 82%;
    height: 50px;
  }
`;

export const Rating = styled.p`
  text-align: right;

  margin: 0;
  font-size: 22px;
`;
