import Link from 'next/link';
import React from 'react';
import {Description, Genre, GenreArea, Wrapper} from './style';

type InfoProps = {
  description: string;
  genres: [string];
  title: string;
};

export const Info = ({description, genres}: InfoProps) => {
  return (
    <div className="mx-auto w-11/12 lg:max-w-[100rem]">
      <div className="flex flex-wrap">
        {genres.map(genre => (
          <Link href={`/filter/${genre.toLowerCase()}`} key={genre} passHref>
            <a className="m-1 p-3 relative text-xl before:absolute before:w-10 before:h-3 before:bg-teal-500 before:bottom-2 before:left-2 before:-z-10 before:transition-all hover:before:w-16 font-semibold">
              {genre}
            </a>
          </Link>
        ))}
      </div>
      <div className="text-slate-500 font-semibold text-lg">{description}</div>
    </div>
  );
};
