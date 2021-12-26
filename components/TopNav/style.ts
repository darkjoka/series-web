import styled from "styled-components";

import { device } from "../../shared/constants/device";

export const Wrapper = styled.nav`
  height: 64px;
  width: 100%;
  border: 2px solid gray;
  position: fixed;
  background-color: white;
  z-index: 2;
`;

export const Main = styled.div`
  height: 100%;
  background-color: lightgray;
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

export const Logo = styled.div`
  height: 40px;
  width: 40px;
  background-color: yellow;
  grid-area: logo;
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
  background-color: azure;
  grid-area: theme;
`;

export const Hamburger = styled.div`
  height: 40px;
  width: 40px;
  background-color: green;
  grid-area: hamburger;

  @media ${device.laptopM} {
    display: none;
  }
`;
