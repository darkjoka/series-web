import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: -39px;
`;

export const Form = styled.form`
  background-color: lightgray;
  border: 2px solid gray;
  border-radius: 2px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 95%;
  padding: 8px;
`;

export const Input = styled.div`
  width: inherit;
  position: relative;
  border: 2px solid gray;
  border-radius: 2px;

  input {
    height: 36px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 2px;
    padding-right: 34px;
  }
`;

export const Button = styled.div`
  width: 140px;
  background-color: gray;
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
