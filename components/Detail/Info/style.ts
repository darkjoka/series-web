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

export const Genre = styled.a`
  margin: 2px;
  padding: 10px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 10px;
    background-color: ${({ theme }) => theme.brand};
    bottom: 8px;
    left: 6px;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    &::before {
      width: 60px;
    }
  }
`;

export const GenreArea = styled.div`
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 10px;
  border-radius: 2px;
  padding: 10px 0;
`;
