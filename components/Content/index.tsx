import React from "react";

import { Misc } from "../Misc";
import { Main, Wrapper } from "./style";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Misc />
      <Main>{children}</Main>
    </Wrapper>
  );
};
