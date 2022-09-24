import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  position: relative;
`;

export const Helper = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;

  top: -16px;
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.brand};
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Text = styled.p``;
