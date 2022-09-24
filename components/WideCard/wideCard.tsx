import Link from 'next/link';
import React from 'react';
import {DownloadCloud} from 'react-feather';

import {TrailerProps} from '../../shared/constants/types';
import usePlayer from '../../store/usePlayer';

export default function WideCard(props: TrailerProps) {
  const {title, thumbnailSrc, videoSrc, permalink} = props;
  const {openPlayer, setPlayer} = usePlayer();

  function handleClick() {
    setPlayer(videoSrc);
    openPlayer();
  }

  return (
    <button onClick={handleClick} className="inline-block">
      <div className="w-full border rounded-lg bg-white hover:bg-gray-50 active:bg-gray-100 flex p-2 sm:w-72 flex-col h-auto space-y-2 hover:pointer">
        <div className="h-full  bg-gray-200 rounded-md w-full sm:h-44">
          <picture>
            <source
              srcSet={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${thumbnailSrc}`}
              type="image/webp"
            />
            <img
              alt={title}
              src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${thumbnailSrc}`}
              className="w-full h-full min-w-[8rem] object-cover rounded  sm:rounded-md"
            />
          </picture>
        </div>

        <div className="flex-1 flex-col space-y-2 sm:space-y-1">
          <div className="h-6 flex justify-start">
            <p className="line-clamp-1 font-bold text">{title}</p>
          </div>

          <div className="flex items-center justify-end">
            <Link href={`/download/${permalink}`}>
              <a
                onClick={e => e.stopPropagation()}
                className="border p-2 rounded hover:bg-gray-100"
              >
                <DownloadCloud />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
}
