import { useRouter } from "next/router";
import React from "react";

import { DetailProps } from "../../shared/constants/types";
import { useAccordion } from "../../shared/hooks/useAccordion";
import { Icon } from "../Icon";
import { Accordion } from "./Accordion";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { IconWrapper, Nav, NavWrapper } from "./styles";

export const Detail = ({ description, title, heroImage, seasonEpisodes, genres }: DetailProps) => {
  const { accordion, handleAccordion } = useAccordion(seasonEpisodes.length);

  const router = useRouter();
  return (
    <>
      <NavWrapper>
        <Nav onClick={() => router.back()}>
          <Icon icon="arrow-back-outline" />

          <p>Go back</p>
        </Nav>
      </NavWrapper>
      <Hero hero={heroImage} title={title} />
      <Info description={description} genres={genres} title={title} />
      {seasonEpisodes.map((data, index) => {
        return (
          <Accordion index={index} key={data.season} value={accordion[index]} {...data} handler={handleAccordion} />
        );
      })}
    </>
  );
};
