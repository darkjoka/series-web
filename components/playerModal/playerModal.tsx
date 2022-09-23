import {a, useTransition} from '@react-spring/web';
import dynamic from 'next/dynamic';
import React from 'react';

import usePlayer from '../../store/usePlayer';

const Portal = dynamic(() => import('../portal'), {ssr: false});

export default function PlayerModal({}: {}) {
  const {isPlayerOpen, closePlayer, playerSrc} = usePlayer();
  const modalTransition = useTransition(isPlayerOpen, {
    delay: 2,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return (
    <Portal>
      <div>
        {modalTransition(
          ({opacity}, item) =>
            item && (
              <>
                <a.div
                  className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-10"
                  style={{opacity}}
                  onClick={closePlayer}
                />

                <a.div
                  className="fixed top-1/2 left-1/2 w-10/12 aspect-video bg-white -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{opacity}}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${playerSrc}?rel=0`}
                    allowFullScreen
                    className="w-full h-full"
                  />
                </a.div>
              </>
            )
        )}
      </div>
    </Portal>
  );
}
