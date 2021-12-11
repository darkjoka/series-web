import { Main, Wrapper } from "./style";

export const Content = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};
