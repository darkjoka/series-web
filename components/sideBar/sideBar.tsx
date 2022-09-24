import {a, useTransition} from '@react-spring/web';
import dynamic from 'next/dynamic';
import React from 'react';

import useSide from '../../store/useSide';

const Portal = dynamic(() => import('../port'), {ssr: false});

export default function SideBar() {
  const {isSideOpen, closeSide} = useSide();
  const modalTransition = useTransition(isSideOpen, {
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
                  onClick={closeSide}
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
