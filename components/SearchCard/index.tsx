import Link from 'next/link';
import React from 'react';
import {SearchCardProps} from '../../shared/constants/types';

export const SearchCard = ({title, permalink}: SearchCardProps) => {
  return (
    <Link href={`/detail/${permalink}`} passHref>
      <a
        className={`p-5 h-8 shadow-md flex items-center rounded-md m-2 focus:outline-none focus:ring-4 ring-teal-500 ring-offset-2 ring-opacity-70 font-semibold text-lg`}
      >
        {title}
      </a>
    </Link>
  );
};
