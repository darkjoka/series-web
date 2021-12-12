import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.main`
  margin: 0 auto;
  @media ${device.tablet} {
    display: flex;
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }

  @media ${device.laptop} {
    max-width: 810px;
  }
  @media ${device.laptopM} {
    max-width: 1100px;
  }
`;

export const Main = styled.section`
  /* background: yellow; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    /* width: 10px; */
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.laptopM} {
    justify-content: center;
  }
`;
