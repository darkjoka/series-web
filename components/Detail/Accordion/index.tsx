import { Body, Head, Item, Wrapper } from "./style";

interface AccordionProps {
  index: number;
  value: boolean;
  season: string;
  handler: (index: number) => void;
  episodes: [
    {
      epidsodeTitle: string; //TODO: correct spelling of episode on backend server
      episodeSize: string;
      episodePermalink: string;
    }
  ];
}

export const Accordion = ({ index, value, season, episodes, handler }: AccordionProps) => {
  return (
    <Wrapper>
      <Head onClick={() => handler(index)}>{season}</Head>
      <Body isOpen={value} items={episodes.length}>
        {episodes.map(({ epidsodeTitle, episodeSize, episodePermalink }) => {
          return <Item key={episodePermalink}>{epidsodeTitle}</Item>;
        })}
      </Body>
    </Wrapper>
  );
};
