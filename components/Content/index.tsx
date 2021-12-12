import { Misc } from "../Misc";
import { Main, Wrapper } from "./style";

export const Content = ({ children }) => {
  return (
    <Wrapper>
      <Misc />
      <Main>{children}</Main>
    </Wrapper>
  );
};
