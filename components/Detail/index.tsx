import React from "react";

import { DetailProps } from "../../shared/constants/types";
import { useAccordion } from "../../shared/hooks/useAccordion";
import { Accordion } from "./Accordion";
import { Hero } from "./Hero";
import { Info } from "./Info";

export const Detail = ({ description, title, hero, seasonEpisodes, genres }: DetailProps) => {
  const { accordion, handleAccordion } = useAccordion(seasonEpisodes.length);
  return (
    <>
      <Hero hero={hero} />
      <Info description={description} genres={genres} title={title} />
      {seasonEpisodes.map((data, index) => {
        return (
          <Accordion index={index} key={data.season} value={accordion[index]} {...data} handler={handleAccordion} />
        );
      })}
    </>
  );
};
