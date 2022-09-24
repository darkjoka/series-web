import styled from "styled-components";
import { device } from "../../shared/constants/device";

export const NavWrapper = styled.div`
  width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    max-width: 610px;
  }
  @media ${device.tabletM} {
    max-width: 810px;
  }
`;

export const Nav = styled.div`
  display: flex;
  cursor: pointer;
  padding: 8px;
`;
