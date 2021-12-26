import styled from "styled-components";

import { device } from "../../shared/constants/device";

export const Wrapper = styled.nav`
  height: 64px;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 2;
`;

export const Main = styled.div`
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-areas: "hamburger logo theme";
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
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
    grid-template-areas: "logo links theme";
  }
`;

export const Logo = styled.a`
  height: 40px;
  width: 40px;
  cursor: pointer;
  grid-area: logo;
  display: grid;
  place-items: center;
`;

export const NavLinks = styled.div`
  height: 40px;
  width: 120px;
  background-color: gray;
  grid-area: links;
  display: none;

  @media ${device.laptopM} {
    display: block;
  }
`;

export const ThemeIcon = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  grid-area: theme;
  display: grid;
  place-items: center;
`;

export const Hamburger = styled.div`
  height: 40px;
  width: 40px;
  grid-area: hamburger;
  display: grid;
  place-items: center;
  cursor: pointer;

  @media ${device.laptopM} {
    display: none;
  }
`;
