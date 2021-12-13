import { Accordion } from "./Accordion";
import { Hero } from "./Hero";
import { Info } from "./Info";

export const Detail = ({ description, title, hero, seasonEpisodes, genres }) => {
  return (
    <>
      <Hero hero={hero} />
      <Info description={description} genres={genres} title={title} />
      {seasonEpisodes.map((data, index) => {
        return <Accordion index={index} key={index} value={null} {...data} />;
      })}
    </>
  );
};
