import React from 'react';
import {HeroBg, HeroContainer, Title, Wrapper} from './style';

export const Hero = ({hero, title}) => {
  return (
    <div className="w-11/12 mx-auto lg:max-w-[100rem]">
      <h1 className="font-bold text-4xl my-2">{title}</h1>

      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}image/${hero}`}
        width={1067}
        height={600}
        alt={title}
        className="w-full rounded-lg lg:h-[30rem] object-cover"
      />
    </div>
  );
};
