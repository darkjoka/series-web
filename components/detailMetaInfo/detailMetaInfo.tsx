import React from 'react';
import {Share2} from 'react-feather';

export default function DetailMetaInfo() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between w-full items-center">
        <div>
          <p>19 September 2021</p>
          <p className="text-sm text-gray-600">Last aired</p>
        </div>
        <button className="p-2 border rounded space-x-2 flex items-center justify-around hover:bg-gray-100">
          <Share2 />
          <p className="hidden sm:block">Share</p>
        </button>
      </div>
      <div>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          molestias.
        </p>
      </div>
    </div>
  );
}
