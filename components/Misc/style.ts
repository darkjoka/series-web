import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  background-color: gray;
  display: none;
  width: 200px;
  min-width: 200px;
  height: 200px;

  @media ${device.laptopM} {
    display: block;
  }
`;
