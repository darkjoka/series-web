import React from 'react';
import {useLoader} from '../../shared/hooks/useLoader';
import {useObserver} from '../../shared/hooks/useObserver';
import {Loader} from 'react-feather';

export default function LoadMore({
  url,
  handler,
}: {
  url: string;
  handler: (data: any) => void;
}) {
  const [ref, onScreen] = useObserver({});
  const {loadError, resetHandler} = useLoader(url, onScreen, handler);
  return (
    <div className="grid place-items-center w-full relative">
      <div className="absolute w-2 h-2 -top-4" ref={ref} />
      <Loader className="animate-spin" />
      {loadError && (
        <button
          onClick={resetHandler}
          className="px-4 py-2 rounded border hover:bg-gray-100"
        >
          Try again?
        </button>
      )}
    </div>
  );
}
