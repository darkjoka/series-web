import React from "react";
import { Filter } from "../Filter";

import { BackDrop, Close, Nav, NavLink, NavLinks, Wrapper } from "./style";

import { useTransition } from "@react-spring/web";
import { Icon } from "../Icon";

import Link from "next/link";

export const SideNav = ({ handler, visible }: { handler: () => void; visible: boolean }) => {
  const ref = React.useRef(null);

  const navTransition = useTransition(visible, {
    from: { x: -300 },
    enter: { x: 0 },
    leave: { x: -300 },
  });

  const backdropTransition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 0.4 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <Wrapper>
        {navTransition(
          (style, item) =>
            item && (
              <Nav style={style} ref={ref}>
                <Close onClick={handler}>
                  <Icon icon="close-outline" />
                </Close>
                <NavLinks>
                  <Link href="/" passHref>
                    <NavLink onClick={handler}>Home</NavLink>
                  </Link>
                  <Link href="/trailers" passHref>
                    <NavLink onClick={handler}>Trailers</NavLink>
                  </Link>
                </NavLinks>
                <Filter parent={ref} cStyle={{ margin: "0 8px", height: "360px" }} />
              </Nav>
            )
        )}
        {backdropTransition((style, item) => item && <BackDrop style={style} onClick={handler} />)}
      </Wrapper>
    </>
  );
};
