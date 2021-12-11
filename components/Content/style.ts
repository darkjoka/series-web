import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.main`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Main = styled.section`
  /* background: yellow; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 780px;
  }

  @media ${device.laptop} {
    max-width: 972px;
  }
  @media ${device.laptopM} {
    max-width: 1211.45px;
  }

  @media ${device.laptopL} {
    max-width: 1450px;
  }
`;
