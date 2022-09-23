import {useRouter} from 'next/router';
import React from 'react';

import DetailDescription from '../detailDescription';
import DetailMetaInfo from '../detailMetaInfo';

export default function DetailSummary({description, title, heroImage, genres}) {
  const router = useRouter();
  console.log(router);
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: router.asPath,
      });
    }
  };
  return (
    <div className="space-y-4 sm:flex">
      <div className="sm:hidden">
        <DetailMetaInfo {...{title, handleShare}} />
      </div>
      <div className="w-full rounded aspect-video bg-gray-200 sm:flex-1 sm:mr-4">
        <img
          alt={title}
          src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${heroImage}`}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="sm:flex-1">
        <div className="hidden sm:block">
          <DetailMetaInfo {...{title, handleShare}} />
        </div>
        <DetailDescription {...{description, genres}} />
      </div>
    </div>
  );
}
