import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.h1`
  text-align: center;
  width: 100%;
  display: block;
  @media ${device.laptop} {
    width: 90%;
  }
`;
