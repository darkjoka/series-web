import styled from "styled-components";

export const Wrapper = styled.div``;
export const Head = styled.div<{ item: boolean }>`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  width: 70%;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    /* background: linear-gradient(to right, ${({ theme: { theme } }) => theme.brand} 50%, transparent 50%); */
    background-color: gray;
    bottom: -16px;
    transform: translateX(
      ${({ item }) => {
        return item && "75%";
      }}
    );
    transition: transform 0.3s ease-out;
  }

  p {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  block-size: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow: auto hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  place-items: center;
  grid-gap: 8px;
  font-size: 0.9em;
  width: 100%;
  margin-top: 32px;
  scroll-snap-align: start;
  padding: 8px;
  box-shadow: 0 4px 0 hsla(0, 0%, 100%, 0.15), inset 0 4px 4px hsla(0, 0%, 0%, 0.1);
  border-radius: 4px;
`;

export const FilterItem = styled.div`
  display: grid;
  place-items: center;
  background-color: lightgray;
  width: 95%;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: gray;
    width: inherit;
    height: inherit;
    display: grid;
    place-items: center;
  }
`;
