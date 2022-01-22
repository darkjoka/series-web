import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: -39px;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.altBackground};
  border-radius: 2px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 95%;
  padding: 8px 20px;
  box-shadow: ${({ theme }) => `0px 10px ${24}px ${-4.2 / theme.shadowStrength}px ${theme.shadow}`};
`;

export const Input = styled.div`
  width: inherit;
  position: relative;
  border-radius: 2px;

  input {
    color: ${({ theme }) => theme.secondaryText};
    height: 40px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 2px;
    padding-right: 34px;
    background-color: ${({ theme }) => theme.primaryBackground};
    font-size: 1.1em;
  }
`;

export const Button = styled.div`
  width: 140px;
  background-color: ${({ theme }) => theme.brand};
  color: ${({ theme }) => theme.secondaryText}
  border-radius: 2px;
  height: 40px;
  margin-left: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const Clear = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translate(0%, -50%);
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
`;
