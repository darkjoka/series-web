import React from 'react';
import DetailDescription from '../detailDescription';
import DetailMetaInfo from '../detailMetaInfo';

export default function DetailSummary() {
  return (
    <div className="space-y-4 sm:flex">
      <div className="sm:hidden">
        <DetailMetaInfo />
      </div>
      <div className="w-full rounded aspect-video bg-gray-200 sm:flex-1 sm:mr-4"></div>
      <div className="sm:flex-1">
        <div className="hidden sm:block">
          <DetailMetaInfo />
        </div>
        <DetailDescription />
      </div>
    </div>
  );
}
