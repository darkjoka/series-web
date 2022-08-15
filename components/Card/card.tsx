import Link from 'next/link';
import React from 'react';

import {CardProps} from '.';

const Card = ({title, teaser = '', rating, imageSrc, permalink}: CardProps) => {
  const route = `/detail/${permalink}`;
  return (
    <Link href={route} passHref>
      <a className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-teal-400 rounded">
        <div className="w-full h-52 rounded shadow-md flex items-center  p-4 space-x-3 sm:space-x-0 sm:w-72 sm:h-auto sm:flex-col sm:rounded-md ">
          <img
            alt={title}
            src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${imageSrc}`}
            className="w-32 h-44 min-w-[8rem] object-cover rounded shadow-lg sm:w-full sm:object-top sm:rounded-md"
          />

          <div
            className={`flex flex-col h-44 flex-grow justify-between sm:mt-2 sm:w-full ${
              !teaser && 'sm:h-auto'
            }`}
          >
            <p className="line-clamp-2 font-bold text-xl">{title}</p>
            <p className="line-clamp-4 font-semibold text-slate-500 ">
              {teaser}
            </p>
            <p className="flex-row-reverse flex font-bold text-xl ">
              {rating ? (Number(rating) * 2).toFixed(1).toString() : ''}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
