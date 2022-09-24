import React from "react";

import { Filter } from "../Filter";
import { Helper, Main, Wrapper } from "./style";
import { useObserver } from "../../shared/hooks/useObserver";

export const Misc = () => {
  const [ref, onScreen] = useObserver({});
  const containerRef = React.useRef(null);

  return (
    <>
      <Helper ref={ref} />
      <Wrapper>
        <Main stay={!onScreen} ref={containerRef}>
          <Filter parent={containerRef} />
        </Main>
      </Wrapper>
    </>
  );
};
