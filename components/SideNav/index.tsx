import React from 'react';
import {animated, useTransition} from '@react-spring/web';
import {X} from 'react-feather';
import Link from 'next/link';

import {Filter} from '../Filter';
import {BackDrop, Close, Nav, NavLink, NavLinks, Wrapper} from './style';
import {getVisibleSelectionRect} from 'draft-js';

export const SideNav = (props: {handler: () => void; visible: boolean}) => {
  const {handler, visible} = props;
  const ref = React.useRef(null);

  const navTransition = useTransition(visible, {
    from: {x: -300},
    enter: {x: 0},
    leave: {x: -300},
  });

  const backdropTransition = useTransition(visible, {
    from: {opacity: 0},
    enter: {opacity: 0.4},
    leave: {opacity: 0},
  });

  if (visible) {
    return (
      <>
        <div className="fixed z-10 w-full top-0 left-0">
          {navTransition(
            (style, item) =>
              item && (
                <animated.div
                  className="w-36 h-screen bg-white absolute z-20 shadow-lg"
                  style={style}
                  ref={ref}
                >
                  <button className="m-2 p-2" onClick={handler}>
                    <X />
                  </button>
                  <div className="flex flex-col m-4">
                    <Link href="/" passHref>
                      <a className="my-2 p-2 font-bold" onClick={handler}>
                        Home
                      </a>
                    </Link>
                    <Link href="/trailers" passHref>
                      <a className="my-2 p-2 font-bold" onClick={handler}>
                        Trailers
                      </a>
                    </Link>
                  </div>
                </animated.div>
              )
          )}
          {backdropTransition(
            (style, item) =>
              item && (
                <animated.div
                  className="h-screen bg-black"
                  style={style}
                  onClick={handler}
                />
              )
          )}
        </div>
      </>
    );
  }
  return null;
};
