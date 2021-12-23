import React from "react";
import { Filter } from "../Filter";

import { BackDrop, Nav, Wrapper } from "./style";

import { animated, useTransition } from "@react-spring/web";

export const SideNav = ({ handler, visible }: { handler: () => void; visible: boolean }) => {
  const ref = React.useRef(null);

  const transition = useTransition(visible, {
    from: { x: -300 },
    enter: { x: 0 },
    leave: { x: -300, opacity: 0, delay: 2000 },
  });

  return (
    <>
      <Wrapper>
        {transition(
          (style, item) =>
            item && (
              <Nav style={style} ref={ref}>
                <Filter parent={ref} handler={handler} />
              </Nav>
            )
        )}
        <BackDrop onClick={handler} />
      </Wrapper>
    </>
  );
};
