import { useSpring, useTransition } from "@react-spring/web";
import useMeasure from "react-use-measure";
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
  const transition = useTransition(value, {
    from: { "max-height": 0, opacity: 0 },
    enter: { "max-height": 72 * episodes.length, opacity: 1 },
    leave: { "max-height": 0, opacity: 0 },
  });
  console.log(value);
  return (
    <Wrapper>
      <Head onClick={() => handler(index)}>{season}</Head>
      {transition(
        (style, item) =>
          item && (
            <Body style={style}>
              {episodes.map(({ epidsodeTitle, episodeSize, episodePermalink }) => {
                return <Item key={episodePermalink}>{epidsodeTitle}</Item>;
              })}
            </Body>
          )
      )}
    </Wrapper>
  );
};
