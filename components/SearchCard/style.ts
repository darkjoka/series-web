import styled from "styled-components";

export const Wrapper = styled.a`
  padding: 20px;
  height: 30px;
  border-radius: 2px;
  margin: 8px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) =>
    `0px 6px ${16}px ${-3.2 / theme.shadowStrength}px ${theme.shadow},3px -3px 0px 0px ${theme.brand}`};
`;
