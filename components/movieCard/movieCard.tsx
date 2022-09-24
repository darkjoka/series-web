import Link from "next/link";
import React from "react";

import { CardProps } from "../../shared/constants/types";

const parseRate = (rating?: string) =>
  rating ? (Number(rating) * 2).toFixed(1).toString() : "";

export default function MovieCard(props: CardProps) {
  let { title, teaser = "", rating, imageSrc, permalink } = props;
  const route = `/download/${permalink}`;
  rating = parseRate(rating);

  return (
    <Link href={route} passHref>
      <a className="inline-block">
        <div className="w-full h-48 border rounded-lg bg-white hover:bg-gray-50 active:bg-gray-100 flex p-2 space-x-2 sm:w-72 sm:flex-col sm:space-x-0 sm:h-auto sm:space-y-2 hover:pointer">
          <div className="h-full w-32 bg-gray-200 rounded-md sm:w-full sm:h-44">
            <picture>
              <source
                srcSet={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${imageSrc}`}
                type="image/webp"
              />
              <img
                alt={title}
                src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${imageSrc}`}
                className="w-32 h-full min-w-[8rem] object-cover rounded sm:w-full sm:object-top sm:rounded-md"
              />
            </picture>
          </div>

          <div className="flex-1 flex-col space-y-3 sm:space-y-1">
            <div className="h-12">
              <p className="line-clamp-2 font-bold text">{title}</p>
            </div>
            <div className="h-20">
              <p className="line-clamp-4 font-semibold text-slate-500 text-sm">
                {teaser}
              </p>
            </div>
            <div className="h-6 ">
              <p className="flex-row-reverse font-bold flex">{rating}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
