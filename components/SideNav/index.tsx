import React from "react";
import { Filter } from "../Filter";

import { BackDrop, Nav, Wrapper } from "./style";

export const SideNav = ({ handler }: { handler: () => void }) => {
  const ref = React.useRef(null);
  return (
    <>
      <Wrapper>
        <Nav ref={ref}>
          <Filter parent={ref} handler={handler} />
        </Nav>
        <BackDrop onClick={handler} />
      </Wrapper>
    </>
  );
};
