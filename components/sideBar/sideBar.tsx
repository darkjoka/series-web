import {a, useTransition} from '@react-spring/web';
import React from 'react';

import dynamic from 'next/dynamic';

const Portal = dynamic(() => import('../portal'), {ssr: false});

export type SideBarProps = {show: boolean; close: VoidFunction};

export default function SideBar({show, close}: SideBarProps) {
  const modalTransition = useTransition(show, {
    from: {opacity: 0, x: 288},
    enter: {opacity: 1, x: 0},
    leave: {opacity: 0, x: 288},
  });

  return (
    <Portal>
      <div>
        {modalTransition(
          ({opacity, x}, item) =>
            item && (
              <>
                <a.div
                  className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10"
                  style={{opacity}}
                  onClick={close}
                ></a.div>
                <a.div
                  className="fixed w-72 h-full bg-white z-10 right-0"
                  style={{x}}
                ></a.div>
              </>
            )
        )}
      </div>
    </Portal>
  );
}
