import styled from "styled-components";

import { device } from "../../shared/constants/device";

export const Wrapper = styled.div`
  padding: 4px;
  border-radius: 2px;
  display: flex;
  width: 94%;
  margin: 8px auto;
  box-shadow: ${({ theme }) => `0px 0px ${24}px ${-4.2 / theme.shadowStrength}px ${theme.shadow}`};

  @media ${device.tablet} {
    flex-direction: column;
    width: 186px;
    margin: 8px;
    padding: 2px;
    box-shadow: none;
  }
`;

export const Teaser = styled.div`
  min-height: 150px;
  max-height: 150px;
  aspect-ratio: 250/350;
  background-color: ${({ theme }) => theme.tertiaryBackground};

  @media ${device.tablet} {
    height: 250px;
  }
`;

export const Content = styled.div<{ hasTeaser: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4px;

  @media ${device.tablet} {
    margin-top: 62px;
    background-color: ${({ theme }) => theme.altBackground};
    height: 100px;
    margin-left: 0;
    margin-bottom: 4px;
    z-index: 1;
    ${({ hasTeaser }) => !hasTeaser && " height: 40px; margin-top: 68px;"}
  }
`;

export const Title = styled.a`
  margin: 0;
  font-size: 18px;
`;

export const Description = styled.p`
  margin: 0;

  @media ${device.tablet} {
    font-size: 82%;
    height: 50px;
  }
`;

export const Rating = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.brand};
  margin: 0;
  font-size: 22px;
`;
