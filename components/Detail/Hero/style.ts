import styled from "styled-components";
import { device } from "../../../shared/constants/device";

export const Wrapper = styled.div`
  background-color: gray;
  width: 94%;
  margin: 0 auto;
  aspect-ratio: 1067/600;

  @media ${device.tablet} {
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }
`;
