import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import { X } from "react-feather";

import { DetailProps } from "../../shared/constants/types";
import { useAccordion } from "../../shared/hooks/useAccordion";
import { Accordion } from "./Accordion";
import { Hero } from "./Hero";
import { Info } from "./Info";
import { Nav, NavWrapper } from "./styles";

export const Detail = ({ description, title, heroImage, seasonEpisodes, genres }: DetailProps) => {
  const { accordion, handleAccordion } = useAccordion(seasonEpisodes.length);

  const router = useRouter();
  let referrer = useRef<string>("");
  useEffect(() => {
    referrer.current = document.referrer;
  }, []);

  const handleBack = () => {
    if (!referrer.current) {
      router.push("/");
      return;
    }
    router.back();
  };

  return (
    <>
      <NavWrapper>
        <Nav onClick={handleBack}>
          <X />
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
