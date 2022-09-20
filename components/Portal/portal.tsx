// ref: https://spectrum.chat/react-spring/general/react-spring-modal-help~64fcff35-fc8a-4334-b65a-a8d74aa1a552
import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

export default function Portal({children}) {
  const portalRoot = document.getElementById('top');
  const mainDivRef = useRef(document.createElement('div'));

  useEffect(() => {
    const mainDiv = mainDivRef.current;
    if (portalRoot && mainDiv) {
      portalRoot.appendChild(mainDiv);
    }
    return () => {
      if (portalRoot && mainDiv) {
        portalRoot.removeChild(mainDiv);
      }
    };
  }, []);

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null;
}
