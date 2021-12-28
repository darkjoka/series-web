import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.altBackground};
  color: ${({ theme }) => theme.primaryText};
  height: 100vh;
  overflow: auto;
`;
