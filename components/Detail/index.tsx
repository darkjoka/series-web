import {useRouter} from 'next/router';
import React, {useRef, useEffect} from 'react';
import {X} from 'react-feather';

import {DetailProps} from '../../shared/constants/types';
import {useAccordion} from '../../shared/hooks/useAccordion';
import {Accordion} from './Accordion';
import {Hero} from './Hero';
import {Info} from './Info';
import {Nav, NavWrapper} from './styles';

export const Detail = ({
  description,
  title,
  heroImage,
  seasonEpisodes,
  genres,
  prev,
}: DetailProps) => {
  const {accordion, handleAccordion} = useAccordion(seasonEpisodes.length);

  const router = useRouter();
  let referrer = useRef<string>('');
  useEffect(() => {
    referrer.current = prev as string;
    console.log(document.referrer);
  }, []);

  const handleBack = () => {
    if (!referrer.current) {
      router.push('/');
      return;
    }
    router.back();
  };

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-end lg:max-w-[100rem]">
        <button
          className="p-2 outline-none  rounded-md focus:ring-4 ring-teal-500 ring-opacity-60 ring-offset-2"
          onClick={handleBack}
        >
          <X />
        </button>
      </div>
      <Hero hero={heroImage} title={title} />
      <Info description={description} genres={genres} title={title} />
      <div className="w-11/12 lg:max-w-[100rem] mx-auto">
        {seasonEpisodes.map((data, index) => {
          return (
            <Accordion
              index={index}
              key={data.season}
              value={accordion[index]}
              {...data}
              handler={handleAccordion}
            />
          );
        })}
      </div>
    </>
  );
};
