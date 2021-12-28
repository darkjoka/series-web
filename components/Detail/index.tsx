import React from "react";

import { DetailProps } from "../../shared/constants/types";
import { useAccordion } from "../../shared/hooks/useAccordion";
import { Accordion } from "./Accordion";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { Wrapper } from "./style";

export const Detail = ({ description, title, heroImage, seasonEpisodes, genres }: DetailProps) => {
  const { accordion, handleAccordion } = useAccordion(seasonEpisodes.length);
  return (
    <Wrapper>
      <Hero hero={heroImage} title={title} />
      <Info description={description} genres={genres} title={title} />
      {seasonEpisodes.map((data, index) => {
        return (
          <Accordion index={index} key={data.season} value={accordion[index]} {...data} handler={handleAccordion} />
        );
      })}
    </Wrapper>
  );
};
