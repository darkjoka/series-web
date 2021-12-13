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

export const Genre = styled.div`
  background-color: gray;
  height: 50px;
  width: 120px;
  margin: 2px;
`;

export const GenreArea = styled.div`
  border-radius: 2px;
  border: 2px solid gray;
  display: flex;
`;

export const Description = styled.div`
  height: 180px;
  width: 100%;
  background-color: gray;
  margin-top: 10px;
  border-radius: 2px;
`;
