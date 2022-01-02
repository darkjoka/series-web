import Image from "next/image";
import styled from "styled-components";
import { device } from "../../../shared/constants/device";

export const Wrapper = styled.div`
  width: 94%;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const HeroBg = styled(Image)`
  aspect-ratio: 1067/600;
`;
