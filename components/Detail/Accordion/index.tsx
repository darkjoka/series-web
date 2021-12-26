import { useSpring, useTransition } from "@react-spring/web";
import Link from "next/link";
import useMeasure from "react-use-measure";
import { Icon } from "../../Icon";
import { Body, DownloadLink, Head, Item, Size, SubContainer, Title, Wrapper } from "./style";

interface AccordionProps {
  index: number;
  value: boolean;
  season: string;
  handler: (index: number) => void;
  episodes: [Episode];
}

type Episode = {
  epidsodeTitle: string; //TODO: correct spelling of episode on backend server
  episodeSize: string;
  episodePermalink: string;
};

export const Accordion = ({ index, value, season, episodes, handler }: AccordionProps) => {
  const transition = useTransition(value, {
    from: { "max-height": 0, opacity: 0 },
    enter: { "max-height": 72 * episodes.length, opacity: 1 },
    leave: { "max-height": 0, opacity: 0 },
  });

  return (
    <Wrapper>
      <Head onClick={() => handler(index)}>{season}</Head>
      {transition(
        (style, item) =>
          item && (
            <Body style={style}>
              {episodes.map((data) => {
                return <DownloadItem key={data.episodePermalink} {...data} />;
              })}
            </Body>
          )
      )}
    </Wrapper>
  );
};

const DownloadItem = ({ epidsodeTitle, episodeSize, episodePermalink }: Episode) => {
  return (
    <Item>
      <Title>{epidsodeTitle}</Title>

      <SubContainer>
        <Size>{episodeSize}</Size>
        <Link href={episodePermalink} passHref replace>
          <DownloadLink>
            <Icon icon={"download-outline"} /> Download
          </DownloadLink>
        </Link>
      </SubContainer>
    </Item>
  );
};
