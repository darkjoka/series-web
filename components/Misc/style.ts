import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  display: none;
  @media ${device.laptopM} {
    min-width: 200px;
    height: 200px;
    display: block;
  }
`;

export const Main = styled.div<{ stay: boolean }>`
  width: 200px;
  position: ${({ stay }) => (stay ? "fixed" : "")};
  top: 28px;
`;

export const Helper = styled.span`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 160px;
`;
